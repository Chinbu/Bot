import mongoose from 'mongoose';

const channelSchema = new mongoose.Schema({
  channelId: {
    type: String,
    required: true,
    unique: true
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

export const Channel = mongoose.model('Channel', channelSchema);