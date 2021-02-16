require('dotenv').config()
const WindyAPI = require('../src/')
const testStandard = async function () {
    const res = await WindyAPI.standard(49.809, 16.787, process.env.WINDY_API_KEY)
    // validate with test
    const data = await WindyAPI.beautify(res, 'E M f, Y', 'c', 'kts')
    console.log(data)
}

testStandard()
