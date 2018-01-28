var mongoose = require("mongoose");

var schemaOptions = {
  timestamps: true,
  toJSON: {
    virtuals: true
  },
  validateBeforeSave: false
};

var feelingSchema = new mongoose.Schema(
  {
    email: String,
    icon: Number,
    feelingDes: String,
    reason: String,
    date: { type: Date, default: Date.now }
  },
  schemaOptions
);

var Feeling = mongoose.model("Feeling", feelingSchema);

module.exports = Feeling;
