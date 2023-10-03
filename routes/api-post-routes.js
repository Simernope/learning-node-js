const express = require('express')
const {
    getPost, getPostBiId,
    changePost, addPost, deletePost
} = require('../controllers/api-post-controller')

const router = express.Router()

router.get('/api/posts', getPost)

router.post('/api/add-post', addPost)

router.get('/api/posts/:id', getPostBiId)

router.delete('/api/posts/:id', deletePost)

router.put('/api/edit/:id', changePost)



module.exports = router