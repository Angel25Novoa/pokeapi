const express = require('express')
const passport = require('passport')
const usersController = require('./controllers/users')
const jwt = require('jsonwebtoken')
require('./auth')(passport)

const app = express()
const port = 3000


app.get('/', (req, res) => {
    res.status(200).send('Hello World!')
})

app.post('/login', (req, res) => {
    usersController.checkUserCredentials(req.body.user, req.body.password, (err, result) => {
        //Comprobamos credenciales
        if(!result){
            return res.status(401).json({'Invalid Credentials'})
        } //Si no son validas error
        const token = jwt.sign({userId: req.body.user})
        res.status(200).json(
            {token: token}
        )
    })
    //Si no son validas 403
    //Si son validas generamos un JWT y lo devolvemos
})

app.post('/team/pokemons', () => {
    res.status(200).send('Hello World')
})

app.get('/team',
    passport.authenticate('jwt', {session:false}), 
    (req, res, next) => {
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