const mongoose = require("mongoose");

// Create schema for books.
const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  authorId: {
    type: String,
    required: true
  },
  release_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.Model("Book", bookSchema);
