// Require mongoose
var mongoose = require("mongoose");

// Create a Schema class with mongoose
var Schema = mongoose.Schema;

// Make LibrarySchema a Schema
var ArticleSchema = new Schema({
  // name: a unique string
  title: {
    type: String,
    unique: true
  },
  link: {
      type: String
  },
  note: [{
    type: Schema.Types.ObjectId,
    ref: "Note"
  }]
});

// Save the  model using the LibrarySchema
var Article = mongoose.model("Article", ArticleSchema);

// Export the  model
module.exports = Article;
