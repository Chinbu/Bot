import mongoose from 'mongoose';

const buttonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  url: {
    type: String,
    required: true
  },
  addedBy: {
    type: String,
    required: true
  },
  addedAt: {
    type: Date,
    default: Date.now
  }
});

export const Button = mongoose.model('Button', buttonSchema);