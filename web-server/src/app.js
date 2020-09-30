const express = require('express')
const path = require('path')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')

// serving static file
app.use(express.static(publicDirectoryPath))

// setting cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
  })

// route
app.get('', (req, res) => {
    res.send({name: 'Nam', age: 27})
})

app.get('/help', (req, res) => {
    res.send('Help page!')
})

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>')
})

app.get('/weather', (req, res) => {
    if(!req.query.address) {
        return res.send({
            error: 'You need to provide a location'
        })
    }
    else {
        res.send({
            forecast: 'Today is sunny day',
            location: req.query.address
        })
    }
})

// app.post()

// setting server, start up the server
app.listen(3000, () => {
    console.log('Server is up on port 3000')
})