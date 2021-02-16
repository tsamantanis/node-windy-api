require('dotenv').config()
const WindyAPI = require('../src/')
const testStandard = async function () {
    const res = await WindyAPI.standard(49.809, 16.787, process.env.WINDY_API_KEY)
    console.log(res)
}

testStandard()
