require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3500;

// custom packages
const dbConnect = require("./config/dbConnect");


// middleware used
app.use(express.json());




// Routes
app.use("/course-details", require("./routes/courseDetailRoute"));


dbConnect()
.then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})
.catch((err) => {
  console.log("Error connecting to MongoDB\n", err);
});
