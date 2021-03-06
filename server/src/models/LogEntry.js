var mongoose = require("mongoose");
var { Schema } = mongoose;

const requiredNumber = {
  type: Number,
  required: true,
};

const logEntrySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    comments: String,
    rating: {
      type: Number,
      min: 0,
      max: 10,
      dafault: 0,
    },
    latitude: { ...requiredNumber, min: -90, max: 90 },
    longitude: { ...requiredNumber, min: -180, max: 180 },

    visitDate: {
      required: true,
      type: Date,
    },
  },
  { timeStamp: true }
);

const LogEntry = mongoose.model("LogEntry", logEntrySchema);

module.exports = LogEntry;
