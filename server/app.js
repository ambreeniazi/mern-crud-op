const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const postUser = require('./routes/UserRoute');
const getAllUser = require('./routes/UserRoute');
app.use("/user", postUser);
app.use("/user", getAllUser);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Connected successfully to MongoDB");
    app.listen(process.env.PORT || 5000, () => {
      console.log(`🚀 Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch(err => {
    console.error("❌ DB connection failed:", err);
  });
