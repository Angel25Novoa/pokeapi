const chai = require('chai')
const chaiHttp = require('chai-http')

const app = require('../app').app

chai.use(chaiHttp)
describe('Suite de prueba e2e para el curso', () => {
    it('Should return hello world', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                chai.assert.equal(res.text, 'Hello World!')
                done()
            })
    })
})