// Bring in path module for node
const path = require("path");
// Create simple express server
const express = require("express");
// Dotenv allows global variables for port, and database url, etc.
const dotenv = require("dotenv");
// Allows for colors in console
const colors = require("colors");
// Logins
const morgan = require("morgan");

const connectDB = require("./config/db");

// Let dotenv know where the file is
dotenv.config({ path: "./config/config.env" });

connectDB();

// Bring in router to use it
const transactions = require("./routes/transactions");

// Initialize express app
const app = express();

// Middleware
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Create a route and relate back to router file
app.use("/api/v1/transactions", transactions);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

// Set variable called port, acess global variables using process.env
const PORT = process.env.PORT || 5000;

// Listen on a port from config file then use dotenv to get variable
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
