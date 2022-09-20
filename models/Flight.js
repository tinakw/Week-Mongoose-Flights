const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const flightSchema = new Schema({
  // Blueprint goes in here! (Exercises Step 6)

airline: {type: String, enum: ['American', 'Southwest', 'United']},
departs: {type: Date},
});

const Flight = model('Flight', flightSchema);

module.exports = Flight;