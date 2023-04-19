//TO DO: Make Schema for journal entries
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/journal");

let journalSchema = mongoose.Schema({
  date: { type: Date, default: Date.now},
  feeling: {
    type: String,
    required: true,
    enum: ["calm", "hopeful", "conflicted", "anxious", "overwhelmed"]
  }
});

let Journal = mongoose.model('Journal', journalSchema);


module.exports.Journal = Journal;

