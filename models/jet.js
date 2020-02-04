const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

const jetSchema = new mongoose.Schema({
  type: { type: String, required: true, unique: true },
  manufacturer: { type: String, required: true },
  commercial: { type: Boolean, required: true },
  operational: { type: Boolean, required: true },
  year: { type: Number, required: true, min: 1903, max: 2020 },
  image: { type: String, required: true },
  description: { type: String, required: true, maxlength: 800 },
  comments: [commentSchema],
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

module.exports = mongoose.model('Jet', jetSchema)