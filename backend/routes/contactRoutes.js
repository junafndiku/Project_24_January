const express = require("express");
const app = express();
const contactModel = require("../models/contactModel");
app.post("/addContact", async (req,res) => {
    try {
        console.log(req.body)
        const newContact = new contactModel(req.body);
        await newContact.save();
        console.log("Contact created");
        res.status(200).send(newContact);
    }catch(err) {
        console.log("Not add " + err);
        res.status(500).send("Not add " + err);
    }
})

app.get("/inquiry", async (req, res) => {
  try {
    const contacts = await contactModel.find(); // fetch all contacts from DB
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: "Unable to fetch contacts" });
  }
});

app.delete("/inquiry/:id", async (req, res) => {
  try {
    const deletedContact = await contactModel.findByIdAndDelete(req.params.id);

    if (!deletedContact) {
      return res.status(404).json({ message: "Inquiry not found" });
    }

    res.status(200).json({ message: "Inquiry deleted successfully" });
  } catch (err) {
    console.error("Error deleting inquiry:", err);
    res.status(500).json({ message: "Server error" });
  }
});


module.exports = app;