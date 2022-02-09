const chai = require('chai')
const chaiHttp = require('chai-http')

chai.use(chaiHttp)

const app = require('../app').app
    describe('Suite de pruebas auth', () => {
        it('should return 200 when jwt token is valid', (done) => {
            //Cuando la llamada no tiene correctamenta la clave
            chai.request(app)
            .post('/login')
            .end((err, res) => {
                chai.request(app)
                .get('/team')
                .set('Authorization', `JWT ${res.body.token}`)
                .end((err, res) => {
                chai.assert.equal(res.statusCode, 401)
                done()
            })
        })
    })
})
