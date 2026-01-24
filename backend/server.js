const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const session = require('express-session')

app.use(cors(
{
credentials: true,
origin: "http://localhost:3000",
exposedHeaders: ["set-cookie"],
}))
app.use(session({
secret: "This will be secret",
resave: false,
saveUninitialized: true,
cookie: {maxAge: 1000 * 60 * 60 * 24}
}))
app.use(express.json({ limit: "1000mb", extended: true }));

mongoose.connect(
    "mongodb+srv://admin_juna:10101997@cluster0.a6a577v.mongodb.net/?appName=Cluster0")
.then(() =>console.log("DB connected"))
.catch((err) => console.log("Something is wrong", err))

app.use('/', (req, res) => {
res.send("Hello Node!")
})

app.listen(5000, (req,res) => {
console.log("Server created!")})