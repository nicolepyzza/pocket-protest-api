require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Define Boycott Schema
const BoycottSchema = new mongoose.Schema({
  store: String
});

const Boycott = mongoose.model("Boycott", BoycottSchema);


// Define ProDei Schema
const ProDeiSchema = new mongoose.Schema({
    store: String
});

const ProDei = mongoose.model("ProDei", ProDeiSchema);

// Define BlackoutDate Schema
const BlackoutDateSchema = new mongoose.Schema({
    store: String,
    dates: [
        {
        start: Date,
        end: Date
        }
    ]
});

const BlackoutDate = mongoose.model("BlackoutDate", BlackoutDateSchema);  

// Get all boycotts
app.get("/boycotts", async (req, res) => {
  const boycotts = await Boycott.find();
  res.json(boycotts);
});

// Add a new boycott
app.post("/boycotts", async (req, res) => {
  const { store } = req.body;
  const newBoycott = new Boycott({ store });
  await newBoycott.save();
  res.json(newBoycott);
});


app.get("/pro-dei", async (req, res) => {
    const pro_dei = await ProDei.find();
    res.json(pro_dei);
  });
  
  // Add a new boycott
app.post("/pro-dei", async (req, res) => {
    const { store } = req.body;
    const newProDei = new ProDei({ store });
    await newProDei.save();
    res.json(newProDei);
});

app.get("/blackout-dates", async (req, res) => {
    const blackout_dates = await BlackoutDate.find();
    res.json(blackout_dates);
});

// Add a new boycott
app.post("/blackout-dates", async (req, res) => {
    const { store, dates } = req.body;
    const newBlackoutDate = new BlackoutDate({ store, dates });
    await newBlackoutDate.save();
    res.json(newBlackoutDate);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = { Boycott, ProDei, BlackoutDate };