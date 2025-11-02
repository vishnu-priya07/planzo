// backend/routes/bookingRoutes.js
const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  createBooking,
  getBookings,
  deleteBooking,
} = require("../controllers/bookingController");

// ✅ Every handler here is a valid function
router.post("/", protect, createBooking);        // Create a new booking
router.get("/", protect, getBookings);           // Get all bookings for a user
router.delete("/:id", protect, deleteBooking);   // Delete a booking by ID

module.exports = router;