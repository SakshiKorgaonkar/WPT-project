const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    phone: Number,
    email: String,
    password: String,
    confirmPassword: String,
    bookings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'AmbulanceBooking'
        }
    ]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
