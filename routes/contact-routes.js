const Contact = require('../models/contact')
const express = require('express')
const fileName = require('../helpers/create-path')

const router = express.Router()


router.get('/contacts', (req, res) => {
    const title = 'Contacts'
    Contact
        .find()
        .then(contacts => res.render(fileName('contacts'), {title, contacts}))
        .catch((error) => {
            console.log(error)
            res.render(fileName('error'), {title: 'Error'})
        })
})

module.exports = router
