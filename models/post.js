// post.js

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    
  },
  slug: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  date: {
    type: String,
  },
  
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post
