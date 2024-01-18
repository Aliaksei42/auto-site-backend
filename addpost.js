const mongoose = require('mongoose');
const Post = require('./models/post'); 

const URL = 'mongodb+srv://alex:Passs321@cluster0.tq2r9lo.mongodb.net/autoSite?retryWrites=true&w=majority';

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const handleError = (res, error) => {
  res.status(500).json({ error });
};

const addPost = async (postData) => {
  try {
    const post = new Post(postData);
    const result = await post.save();
    console.log('Пост успешно добавлен:', result);
  } catch (err) {
    console.error('Ошибка при добавлении поста:', err.message);
  } finally {
    mongoose.disconnect();
  }
};

// Пример использования:
// <strong></strong> <img : src="https://images.unsplash.com/photo-16">
const postData = {
  title: 'Test',
  text: 'Text text',
  
  "img":"https://images.unsplash.com/photo-1553875722-54793bce0406?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "slug": "Test",
  "date": "14.01.2024",
  "category": "Trends"

};

addPost(postData);
