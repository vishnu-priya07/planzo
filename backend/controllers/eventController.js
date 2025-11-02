const Event = require("../models/Event");

// Create event (Admin only)
exports.createEvent = async (req, res) => {
  try {
    const { name, location, date, time, pricePerSeat, availableSeats } = req.body;

    if (!name || !location || !date || !time || !pricePerSeat || !availableSeats) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const event = await Event.create({ name, location, date, time, pricePerSeat, availableSeats });
    res.status(201).json({ message: "Event created successfully", event });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all events
exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get event by ID
exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};