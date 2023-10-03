const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
    const fileName = (page) => path.resolve(__dirname, 'views', `${page}.html`)
    let baseName = ''
    res.setHeader('Content-Type', 'text/html')
    switch (req.url) {
        case '/':
            baseName = fileName('index')
            break
        case '/contacts':
            baseName = fileName('contacts')
            break
        default:

            baseName = fileName('error')
            break
    }
    fs.readFile(baseName, (err, data) => {
        if(err){
            console.log(err)
            res.end()
        }
        else {
            res.write(data)
            res.end()
        }
    })
})

server.listen(3000, 'localhost', (error) => {
    console.log(error)
})