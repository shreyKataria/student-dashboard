require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const router = require("./routes/studentRoute");
const app = express();

const port = process.env.PORT || 8000;

// middleware
app.use(express.json());

// routes
app.use("/api", router);

// server
app.listen(port, () => {
  console.log(`server started at port : ${port}`);
});

// database
connectDB();
