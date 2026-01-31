const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

// Routes
const contactRoute = require("./routes/contactRoutes");
const itemRoute = require("./routes/itemRoutes");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json({ limit: "1000mb", extended: true }));
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose
  .connect(
    "mongodb+srv://admin_juna:10101997@cluster0.a6a577v.mongodb.net/travelagencyDB?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("Something is wrong", err));


app.use(contactRoute);
app.use(itemRoute);


app.use("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});


app.listen(5000, () => {
  console.log("Server running on port 5000!");
});
