# Windy API Node Library

This library helps developers use the Windyty API point forecast https://api.windy.com/point-forecast

![npm bundle size](https://img.shields.io/bundlephobia/min/@tsamantanis/node-windy-api?style=for-the-badge)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/tsamantanis/node-windy-api?style=for-the-badge)

# Installation

Inside your project directory run
```
npm install @tsamantanis/node-windy-api
```

# Usage

Visit [Windy Point Forecast API](https://api.windy.com/point-forecast/docs#model) to obtain your API key. Note that `The trial API version is for development purposes only. The data for trial version API keys is from random coordinates.`

Once you've obtained your API key go ahead and add it to your `.env` file like this
```
WINDY_API_KEY="insert_api_key_here"
```
You can take a look at the `.env.example` file for reference

Next, import the library in your file by running
```
const WindyAPI = require('@tsamantanis/node-windy-api')
```

Here's a simple example that utilizes the standard function
```
const testStandard = async function () {
    const res = await WindyAPI.standard(49.809, 16.787, "YOUR_API_KEY")
    // res contains json object
}
```
If you wish to receive the resulting object in an easier to read and ready to present format you can also use the beautify method as follows
```
const testStandardWithBeautify = async function () {
    const res = await WindyAPI.standard(49.809, 16.787, "YOUR_API_KEY")    
    const data = await WindyAPI.beautify(res, 'E M f, Y', 'c', 'kts')
    // data contains json object with beautified values
}
```
See the [@tsamantanis/date-lib](https://www.npmjs.com/package/@tsamantanis/date-lib) documentation for more information about formatting dates
