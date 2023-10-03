const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const postRoutes = require('./routes/post-routes')
const contactRoutes = require('./routes/contact-routes')
const apiPostsRoutes = require('./routes/api-post-routes')
const fileName = require('./helpers/create-path')
require('dotenv').config()

const app = express()


mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log('Connected to db'))
    .catch((error) => console.log(error))


app.listen(3000, 'localhost', (error) => {
    error ? console.log(error) : console.log(`Listening port ${process.env.PORT}`)
})

app.use(express.static('styles'))
app.use(methodOverride('_method'))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(express.urlencoded({extended: false}))
app.use(contactRoutes)
app.use(postRoutes)
app.use(apiPostsRoutes)


app.get('/', (req, res) => {
    const title = 'Main Page'
    res.render(fileName('index'), {title})
})

app.get('/add-post', (req, res) => {
    const title = 'Add Post'
    res.render(fileName('add-post'), {title})
})

app.get('/about-us', (req, res) => {
    res.redirect('contacts')
})


app.use((req, res) => {
    const title = 'Error'
    res
        .status(404)
        .render(fileName('error'), {title})
})