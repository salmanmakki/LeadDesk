const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required.'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required.'],
    lowercase: true,
    trim: true,
  },
  budget: {
    type: String,
    required: [true, 'Budget is required.'],
    enum: ['Under $1,000', '$1,000–$5,000', '$5,000–$10,000', 'Over $10,000'],
  },
  message: {
    type: String,
    trim: true,
    maxlength: [1000, 'Message cannot exceed 1000 characters.'],
  },
  status: {
    type: String,
    enum: ['New', 'Contacted', 'Closed'],
    default: 'New',
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Lead', leadSchema);
