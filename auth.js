const { ExtractJwt } = require('passport-jwt/lib')

const JwtStrategy = require('passport-jwt').Strategy,
    Extract = require('passport-jwt').ExtractJwt

module.exports = passport => {
    const opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
        secretOrKey: 'secretPassword' // Esto debe estar en una vatiable de entorno
    }
    passport.use(new JwtStrategy(opts, (decoded, done) => {
        console.log('decoded jwt', decoded)
        return done(null, false)
    }))
}