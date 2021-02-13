// https://api.windy.com/api/point-forecast/v2
require('dotenv').config()
const fetch = require("node-fetch");
// params

export async function get<T>(
    lat: number, //  latitude
    lon: number, // longitude
    model: string, // forecast model ['Arome', 'IconEu', 'GFS', 'Wavewatch', 'namConus', 'namHawaii', 'namAlaska', 'geos5']
    parameters: Array<string>, // https://api.windy.com/point-forecast/docs#parameters
    levels: Array<string>, // geopotential values ['surface', '1000h', '950h', '925h', '900h', '850h', '800h', '700h', '600h', '500h', '400h', '300h', '200h', '150h']
    // key: string
) {
    try {
        const path = "https://api.windy.com/api/point-forecast/v2"
        const options = {
            method: "post",
            body: JSON.stringify({
                lat: lat,
                lon: lon,
                model: model,
                parameters: parameters,
                levels: levels,
                key: process.env.WINDY_API_KEY
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }
        const data = await fetch(path, options)
        return data
    } catch (err) {
        return err;
    }
};

// default forecasting route
export async function standard<T>(
    lat: number, //  latitude
    lon: number, // longitude
) {
    try {
        const path = "https://api.windy.com/api/point-forecast/v2"
        const options = {
            method: "post",
            body: JSON.stringify({
                lat: lat,
                lon: lon,
                model: "gfs",
                parameters: ["temp", "wind", "rh"],
                levels: ["surface"],
                key: process.env.WINDY_API_KEY
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }
        const data = await fetch(path, options)
        return data.json()
    } catch(error) {
        console.log("Error", error)
    }
}
