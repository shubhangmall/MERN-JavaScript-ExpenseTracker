// File to connect to database
const mongoose = require("mongoose");

// Create arrow function
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });

    console.log(
      `MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (err) {
    console.log(`Error: ${error.message}`.red);
    process.exit(1); //Exit with failure, shut down application
  }
};

module.exports = connectDB;
