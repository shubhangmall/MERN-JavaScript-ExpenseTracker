// Bring in mongoose
const mongoose = require("mongoose");

// Create scheme for our models
const TransactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true, //Trim white space
    required: [true, `Please add some text`], // Backend required
  },
  amount: {
    type: Number,
    required: [true, `Please add a positive or negative number`],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Transaction", TransactionSchema);
