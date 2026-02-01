const express = require("express");
const app = express();
const bookModel = require("../models/bookModel");

app.post("/reservation", async (req,res) => {
    try {
        console.log(req.body)
        const newReservation = new bookModel(req.body);
        await newReservation.save();
        console.log("Reservation created");
        res.status(200).send(newReservation);
    }catch(err) {
        console.log("Not add " + err);
        res.status(500).send("Not add " + err);
    }
})

app.get("/readBooking", async (req, res) => {
  try {
    const bookings = await bookModel.find(); // fetch all bookings from DB
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: "Unable to fetch bookings" });
  }
});

app.delete("/readBooking/:id", async (req, res) => {
  try {
    const deletedBooking = await bookModel.findByIdAndDelete(req.params.id);

    if (!deletedBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.status(200).json({ message: "Booking deleted successfully" });
  } catch (err) {
    console.error("Error deleting booking:", err);
    res.status(500).json({ message: "Server error" });
  }
});



module.exports = app;