const bcrypt = require('bcrypt')

const hashPassword(plainTextPwd, done) => {
    bcrypt.hash(plainTextPwd, 10, (err, hash) => {
        done(err, hash)
    })
}

const comparePassword = (plainPassword, hashPassword, done) => {
    bcrypt.compare(plainPassword, hashPassword, (err, result) => {
        done(err, result)
    })
}