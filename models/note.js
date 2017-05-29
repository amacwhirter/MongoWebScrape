// Require mongoose
var mongoose = require("mongoose");

// Create a Schema class with mongoose
var Schema = mongoose.Schema;

// make NoteSchema a Schema
var NoteSchema = new Schema({
  note: {
    type: String
  }
});

var Note = mongoose.model("Note", NoteSchema);

// Export the model so we can use it on our server file.
module.exports = Note;
