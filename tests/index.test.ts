const WindyAPI = require('../src/')
const testStandard = async function () {
    const res = await WindyAPI.standard(49.809, 16.787)
    console.log(res)
}

testStandard()
