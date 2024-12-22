// index.js

// Basic arithmetic functions
module.exports = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  },
  divide: function(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  },
  sqrt: function(a) {
    if (a < 0) {
      throw new Error("Cannot take square root of a negative number");
    }
    return Math.sqrt(a);
  },
  // Note-taking feature
  notes: [],
  addNote: function(note) {
    this.notes.push(note);
  },
  getNotes: function() {
    return this.notes;
  },
  clearNotes: function() {
    this.notes = [];
  }
};
