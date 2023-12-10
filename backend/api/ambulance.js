const router = require('express').Router();
const verifyToken = require('../middleware');
const AmbulanceBooking = require("../schema/booking");
const User = require('../schema/user');
const mongoose = require('mongoose');

router.post("/book",verifyToken,async (req, res) => {
  try {
    const userId = req.userId;
    const { bookingType, patientName, contactNumber, bookingDate } = req.body;

    const user = await User.findById(userId);


    const newBooking = new AmbulanceBooking({
      user:userId,
      bookingType,
      patientName,
      contactNumber,
      bookingDate,
    });

    const savedBooking = await newBooking.save();


    user.bookings.push(savedBooking._id);
    await user.save();

    res.status(201).json({
      message: "Ambulance Booking Created Successfully.",
      bookingData: savedBooking,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error Occurred, Unable to create ambulance booking.",
    });
  }
});


router.get("/bookings",verifyToken,async (req, res) => {
  try {
      const userId = req.userId;

      if (!mongoose.Types.ObjectId.isValid(userId)) {
          return res.status(400).json({ message: "Invalid userId format." });
      }

      const user = await User.findById(userId);

      if (!user) {
          return res.status(404).json({ message: "User not found." });
      }

      const userBookings = await AmbulanceBooking.find({ user: userId });

      res.status(200).json({
          message: "User's bookings retrieved successfully.",
          userBookings: userBookings,
      });
  } catch (error) {
      console.error(error);
      res.status(500).json({
          message: "Error occurred while retrieving user's bookings.",
      });
  }
});

router.post("/cancel/:bookingId", async (req, res) => {
  try {
      const bookingId = req.params.bookingId;

      const booking = await AmbulanceBooking.findById(bookingId);

      if (!booking) {
          return res.status(404).json({ message: "Booking not found." });
      }

      if (booking.isCancelled) {
          return res.status(400).json({ message: "Booking is already cancelled." });
      }

      // Update the booking status to cancelled
      booking.isCancelled = true;
      await booking.save();

      res.status(200).json({
          message: "Booking cancelled successfully.",
          cancelledBooking: booking,
      });
  } catch (error) {
      console.error(error);
      res.status(500).json({
          message: "Error occurred while cancelling the booking.",
      });
  }
});


module.exports = router;


