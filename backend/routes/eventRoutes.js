const express = require("express");
const router = express.Router();
const { createEvent, getAllEvents, getEventById } = require("../controllers/eventController");
const { protect } = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

// Admin creates event
router.post("/", protect, admin, createEvent);

// Get all events
router.get("/", getAllEvents);

// Get single event by ID
router.get("/:id", getEventById);

module.exports = router;