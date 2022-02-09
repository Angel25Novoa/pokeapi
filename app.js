const express = require('express')
const passport = require('passport')
require('./auth')(passport)

const app = express()
const port = 3000


app.get('/', (req, res) => {
    res.status(200).send('Hello World!')
})

app.post('/login', (req, res) => {

})

app.post('/team/pokemons', () => {
    res.status(200).send('Hello World')
})

app.get('/team',passport.authenticate('jwt', {session:false}), (req, res) => {
    res.status(200).send('Hello World')
})

app.delete('/team/pokemons/:pokeid', (req, res) => {
    res.status(200).send('Hello World')
})

app.put('/team', (req, res) => {
    res.status(200).send('Hello World')
})

app.listen(port, (req, res) => {
    console.log(`Server started at port ${port}`);
})  

exports.app = app