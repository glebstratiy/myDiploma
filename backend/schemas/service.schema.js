const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
  duration: {
    type: Number,
    required: [true, 'Duration is required'],
  },
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
