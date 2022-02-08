const assert = require('chai').assert

const addValue = (a, b) => (
    a+b
)

describe('Suite de pueba para el curso', () => {
    it('should return 4', () => {
        let va = addValue(2, 2)
        assert.equal(va, 4)
    })
})