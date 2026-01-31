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


module.exports = app;