const Post = require('../models/post')
const fileName = require('../helpers/create-path')


const getPost = (req, res) => {
    Post
        .find()
        .sort({createdAt: -1})
        .then((posts) => res.status(200).json(posts))
        .catch((error) => {
            console.log(error)
            res.render(fileName('error'), {title: 'Error'})
        })
}

const getPostBiId = (req, res) => {
    Post
        .findById(req.params.id)
        .then((post) => res.status(200).json(post))
        .catch((error) => {
            console.log(error)
            res.render(fileName('error'), {title: 'Error'})
        })
}

const editPostById = (req, res) => {
    Post
        .findById(req.params.id)
        .then((post) => res.status(200).json(post))
        .catch((error) => {
            console.log(error)
            res.render(fileName('error'), {title: 'Error'})
        })
}

const changePost = (req, res) => {
    Post
        .findByIdAndUpdate(req.params.id, {title, author, text})
        .then((post) => res.status(200).json(post))
        .catch((error) => {
            console.log(error)
            res.render(fileName('error'), {title: 'Error'})
        })
}

const addPost = (req, res) => {
    const post = new Post({title, author, text})
    post
        .save()
        .then((post) => res.status(200).json(post))
        .catch((error) => {
            console.log(error)
            res.render(fileName('error'), {title: 'Error'})
        })
}

const deletePost = (req, res) => {
    Post
        .findByIdAndDelete(req.params.id)
        .then(() => res.status(200).json(req.params.id))
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