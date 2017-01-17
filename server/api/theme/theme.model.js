'use strict';

import mongoose from 'mongoose';

var ThemeSchema = new mongoose.Schema({
  title: String,
  category: String,
  rating: String,
  price: String
});

export default mongoose.model('Theme', ThemeSchema);
