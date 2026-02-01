const mongoose = require("mongoose");

const bookingS = new mongoose.Schema({
    Name: {
        type:String,
    },
    Surname: {
        type:String,
    },
    Age: {
        type:Number,
    },
    departureDay: {
        type:Date,
    },
    arrivalDay: {
        type:Date,
    },
    numberAdults: {
        type:Number,
    },
    numberChildren: {
        type:Number,
    },
    accommodation: {
        type:String,
        enum: ["Hotel", "Hostel", "Vacation Rental"],
    },
    numberRooms: {
        type: Number,
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
    },
    comment: {
        type: String,
        
    },
    packageName: {
        type: String,
    },
    packageRegion: {
        type: String,
        enum: ["Albania", "Europe", "Middle East", "Far East"],
    },
});

const Booking = mongoose.model("Booking", bookingS);
module.exports = Booking;