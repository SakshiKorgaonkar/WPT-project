const mongoose = require("mongoose");

const ambulanceBookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    bookingType: {
        type: String,
        required: true,
    },
    patientName: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: String,
        required: true,
    },
    bookingDate: {
        type: Date,
        default: Date.now,
    },
    isCancelled: {
        type: Boolean,
        default: false,
    },
});

const AmbulanceBooking = mongoose.model("AmbulanceBooking", ambulanceBookingSchema);

module.exports = AmbulanceBooking;
