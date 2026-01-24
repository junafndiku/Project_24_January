const mongoose = require("mongoose");

const contactS = new mongoose.Schema({
    Name: {
        type:String,
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
    },
    region: {
        type: String,
        enum: ["Albania", "Europe", "Middle East", "Far East"],
    },
    comment: {
        type: String,
        
    },
});

const Contact = mongoose.model("Contact", contactS);
module.exports = Contact;