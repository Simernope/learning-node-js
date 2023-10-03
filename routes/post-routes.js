const express = require('express')
const {
    getPost, getPostBiId, editPostById,
    changePost, addPost, deletePost
} = require('../controllers/post-controller')

const router = express.Router()

router.get('/posts', getPost)
router.get('/posts/:id', getPostBiId)
router.get('/edit/:id', editPostById)
router.put('/edit/:id', changePost)
router.post('/add-post', addPost)
router.delete('/posts/:id', deletePost)

module.exports = router