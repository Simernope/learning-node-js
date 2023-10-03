const Post = require('../models/post')
const fileName = require('../helpers/create-path')


const getPost = (req, res) => {
    const title = 'Posts'
    Post
        .find()
        .sort({createdAt: -1})
        .then(posts => res.render(fileName('posts'), {title, posts}))
        .catch((error) => {
            console.log(error)
            res.render(fileName('error'), {title: 'Error'})
        })
}

const getPostBiId = (req, res) => {
    const title = 'Post'
    Post
        .findById(req.params.id)
        .then(post => res.render(fileName('post'), {title, post}))
        .catch((error) => {
            console.log(error)
            res.render(fileName('error'), {title: 'Error'})
        })
}

const editPostById = (req, res) => {
    const title = 'Edit Post'
    Post
        .findById(req.params.id)
        .then(post => res.render(fileName('edit-post'), {title, post}))
        .catch((error) => {
            console.log(error)
            res.render(fileName('error'), {title: 'Error'})
        })
}

const changePost = (req, res) => {
    const {title, author, text} = req.body
    Post
        .findByIdAndUpdate(req.params.id, {title, author, text})
        .then(() => res.redirect(`/posts/${req.params.id}`))
        .catch((error) => {
            console.log(error)
            res.render(fileName('error'), {title: 'Error'})
        })
}

const addPost = (req, res) => {
    const {title, author, text} = req.body
    const post = new Post({title, author, text})
    post
        .save()
        .then(response => res.redirect(`/posts/${response._id}`))
        .catch((error) => {
            console.log(error)
            res.render(fileName('error'), {title: 'Error'})
        })
}

const deletePost = (req, res) => {
    Post
        .findByIdAndDelete(req.params.id)
        .then(() => res.sendStatus(200))
        .catch((error) => {
            console.log(error)
            res.render(fileName('error'), {title: 'Error'})
        })
}


module.exports = {
    getPost,
    getPostBiId,
    editPostById,
    changePost,
    addPost,
    deletePost
}