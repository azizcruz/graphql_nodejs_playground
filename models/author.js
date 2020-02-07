const mongoose = require("mongoose");

// Create schema for books.
const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.Model("Author", authorSchema);
