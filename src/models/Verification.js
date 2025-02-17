import mongoose from 'mongoose';

const verificationSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  step: {
    type: Number,
    required: true,
    enum: [1, 2]
  },
  verifiedAt: {
    type: Date,
    default: Date.now
  },
  expiresAt: {
    type: Date,
    required: true
  }
});

export const Verification = mongoose.model('Verification', verificationSchema);