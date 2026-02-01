const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const cors = require("cors");
const path = require("path");

// Routes
const contactRoute = require("./routes/contactRoutes");
const itemRoute = require("./routes/itemRoutes");
const userRoute = require("./routes/userRoutes");
const bookingRoute = require("./routes/bookRoutes");


app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
    exposedHeaders: ["set-cookie"],
  })
);

app.use(
  session({
    secret: "This will be secret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
  }),
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
app.use(userRoute);
app.use(bookingRoute);


app.use("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});


app.listen(5000, () => {
  console.log("Server Created!");
});
