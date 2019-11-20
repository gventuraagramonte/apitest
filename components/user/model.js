'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = mongoose.Schema({
  name: {
    type: String,
    allowNull: false
  },
  lastname: {
    type: String,
    allowNull: false
  },
  dni: {
    type: Number,
    allowNull: false
  },
  active: {
    type: Boolean,
    allowNull: false,
    defaultValue: false
  },
  file: {
    type: String
  }
})

const model = mongoose.model('User', userSchema)

module.exports = model
