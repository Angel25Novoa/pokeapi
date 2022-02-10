const uuid = require('uuid')
const crypto = require('../crypto')

const userDatabase = {
    '0001': {
        'password': '',
        'salt': '',
        'userName': ''
    }
}
//userID -> password

const registerUser = (userName, password) => {
    //Guardar en la base de daros nuestro usuario
    crypto.hashPassword(password, (err, result) => {
        userDatabase[uuid.v4()] = {
            userName: userName,
            password: result
        }
    })
}

const checkUserCredentials = (userId, password, done) => {
    //comprobar que las credenciales son correctas
    let user = userDatabase[userId]
    crypto.comparePassword(password, user.password, done)
    return false
}