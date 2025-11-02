const Booking = require("../models/Booking");
const Event = require("../models/Event");

// Create Booking
const createBooking = async (req, res) => {
  try {
    const { event, hallName, date, timeSlot, guests } = req.body;

    // Basic validation
    if (!event || !hallName || !date || !timeSlot || !guests) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if hall already booked for this slot
    const existingBooking = await Booking.findOne({ hallName, date, timeSlot });
    if (existingBooking) {
      return res.status(400).json({ message: "Hall already booked for this slot" });
    }

    // Verify event exists
    const eventData = await Event.findById(event);
    if (!eventData) {
      return res.status(404).json({ message: "Event not found" });
    }

    // Create new booking
    const booking = await Booking.create({
      user: req.user._id,
      event: eventData._id,
      hallName,
      date,
      timeSlot,
      guests,
      status: "Pending",
      paymentStatus: "Unpaid",
    });

    res.status(201).json({
      message: "Booking successful",
      booking,
    });
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ message: "Error creating booking" });
  }
};

// Get all bookings for logged-in user
const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id })
      .populate("event", "name date location")
      .sort({ date: 1 });
    res.json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ message: "Error fetching bookings" });
  }
};

// Delete a booking
const deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    // Ensure user owns this booking
    if (booking.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    await booking.deleteOne();
    res.json({ message: "Booking deleted successfully" });
  } catch (error) {
    console.error("Error deleting booking:", error);
    res.status(500).json({ message: "Error deleting booking" });
  }
};

module.exports = { createBooking, getBookings, deleteBooking };