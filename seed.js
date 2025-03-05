require("dotenv").config();
const mongoose = require("mongoose");
const { Boycott, ProDei, BlackoutDate } = require("./server");

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const boycotts = [
    { store: "Starbucks" },
    { store: "McDonald's" },
    { store: "Molson Coors" },
    { store: "Target" },
    { store: "Harley Davidson" },
    { store: "Ford Motors" },
    { store: "Boeing Aircrafts" },
    { store: "Amazon" },
    { store: "Google" },
    { store: "X (Twitter)" },
    { store: "Facebook" },
    { store: "Lowe's Home Improvement" },
    { store: "John Deere" },
    { store: "Brown-Forman Distilleries" },
    { store: "Jack Daniel's" },
    { store: "Walmart" },
    { store: "The Smithsonian Institution" },
    { store: "Toyota" },
    { store: "Pepsi" },
    { store: "Goldman Sachs" },
    { store: "Instagram" },
    { store: "Meta" },
    { store: "Paramount" },
    { store: "Bank of America" },
    { store: "Amtrak" },
    { store: "Accenture" },
    { store: "GM" },
    { store: "Disney" },
    { store: "GE" },
    { store: "Intel" },
    { store: "PayPal" },
    { store: "Chipotle" },
    { store: "Comcast" },
    { store: "PBS" },
    { store: "Disney" },
    { store: "Citigroup" },
    { store: "Aldi" },
    { store: "Nissan" },
    { store: "Stanley Black & Decker" },
    { store: "Tractor Supply Co" },
    { store: "Nestle" },
    { store: "General Mills" }
];

const pro_dei = [
    { store: "Delta" },
    { store: "Costco"},
    { store: "Francesca's" },
    { store: "Ben & Jerry's" },
    { store: "Apple" },
]

const blackout_dates = [
    { store: "Nestle", dates: [{ start: "2023-03-07", end: "2023-03-14" }] },
    { store: "Walmart", dates: [{ start: "2023-04-07", end: "2023-04-14" }] },
    { store: "ALL", dates: [{ start: "2023-04-18", end: "2023-04-18" }] },
    { store: "General Mills", dates: [{ start: "2023-04-21", end: "2023-04-28" }] },
    { store: "Amazon", dates: [{ start: "2023-05-06", end: "2023-05-12" }] },
    { store: "Target", dates: [{ start: "2023-05-20", end: "2023-05-26" }, { start: "2023-06-03", end: "2023-06-09" }] },
    { store: "McDonald's", dates: [{ start: "2023-06-24", end: "2023-06-30" }] },
];

const seedDatabase = async () => {
    try {
        await Boycott.insertMany(boycotts);
        await ProDei.insertMany(pro_dei);
        await BlackoutDate.insertMany(blackout_dates);
        console.log("Data seeded successfully!");
    } catch (err) {
        console.error(err);
    } finally {
        mongoose.connection.close();
    }
};

seedDatabase();