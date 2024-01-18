// post-router.js

const express = require('express')

const {
    getPosts,
    getPost,
    deletePost,
    addPost,
    updatePost
} = require('../controllers/post-controller')

const router = express.Router()

router.get('/posts', getPosts)
router.get('/posts/:slug', getPost)
router.delete('/posts/:slug', deletePost)
router.post('/posts', addPost)
router.patch('/posts/:slug', updatePost)

module.exports = router;
