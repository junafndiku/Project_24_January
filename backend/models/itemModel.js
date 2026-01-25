const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema({

packageName: {
type: String,
//required: true,
},
packageDescription: {
type: String,
//required: true,
},
packageRegion: {
type: String,
enum: ["Albania", "Europe", "Middle East", "Far East"],
//required: true,
},
packageDestination: {
type: String,
//required: true,
},
packageDays: {
      type: Number,
      //required: true,
},
    packageTransportation: {
      type: String,
      enum: ["airplane", "train", "private car", "cruise"],
      //required: true,
    },
    packagePrice: {
      type: Number,
      //required: true,
    },
    packageImage: {
      type: String,
      //required: true,
    },
});
// Krijimi i modelit ne mongoDB
const Package = mongoose.model("Package", packageSchema);
//Exportimi i modelit
module.exports = Package;