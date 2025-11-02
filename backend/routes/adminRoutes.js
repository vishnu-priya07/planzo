// routes/adminRoutes.js
const express = require("express");
const router = express.Router();
const { getAllUsers, getAllEvents, getAllBookings } = require("../controllers/adminController");
const { protect } = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

// Admin-only routes
router.get("/users", protect, admin, getAllUsers);
router.get("/events", protect, admin, getAllEvents);
router.get("/bookings", protect, admin, getAllBookings);

module.exports = router;