const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
require('dotenv').config();

console.log("🔍 Mongo URI:", process.env.MONGO_URI); // Debug line

mongoose.connect(process.env.MONGO_URI, {
})
.then(() => {
    console.log("✅ Connected successfully to MongoDB");

    app.listen(process.env.PORT || 5000, (error) => {
        if (error) {
            console.error("❌ Server error:", error);
        } else {
            console.log(`🚀 Server running on port ${process.env.PORT || 5000}`);
        }
    });
})
.catch(err => console.error("❌ DB connection failed:", err));