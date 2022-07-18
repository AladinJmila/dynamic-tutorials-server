const mongoose = require('mongoose');

const Slide = mongoose.model(
  'Slide',
  new mongoose.Schema({
    features: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Feature',
        required: true,
      },
    ],
    groups: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group',
        required: true,
      },
    ],
    name: { type: String, required: true },
    editedImageName: { type: String, default: '' },
    audioName: { type: String, default: '' },
    notes: { type: String, default: '' },
    duration: { type: Number, default: 0 },
    isViewed: { type: Boolean, default: false },
  })
);

module.exports = Slide;
