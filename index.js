const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./database/queries')
const port = 3000

// Config
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

// Routes
app.get('/users', db.getUsers)
app.get('/user/:id', db.getUserById)
app.post('/user/create', db.createUser)
app.put('/user/update/:id', db.updateUser)
app.delete('/user/delete/:id', db.deleteUser)

// Server
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})