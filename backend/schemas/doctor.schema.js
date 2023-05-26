const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  surname: {
    type: String,
    required: [true, 'Surname is required']
  },
  age: {
    type: Number,
    required: [true, 'Age is required']
  },
  specialization: {
    type: String,
    required: [true, 'Specialization is required']
  },
  tel: {
    type: String,
    required: [true, 'Telephone number is required']
  },
  description: String,
  image: {
    type: String,
    required: [true, 'Image URL is required']
  }
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
