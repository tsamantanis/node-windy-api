import { expect } from 'chai';
import 'mocha';
require('dotenv').config()
const WindyAPI = require('../src/')
const BetterDate = require("@tsamantanis/date-lib")

describe('test standard method route', () => {
    it('should return true', async () => {
        const res = await WindyAPI.standard(49.809, 16.787, process.env.WINDY_API_KEY)
        expect(res).to.be.a('object');
        expect(res).to.include.keys('ts');
        expect(res).to.include.keys('units');
        expect(res).to.include.keys('temp-surface');
        expect(res).to.include.keys('wind_u-surface');
        expect(res).to.include.keys('wind_v-surface');
        expect(res).to.include.keys('rh-surface');
    });
});

describe('test beautify method', () => {
    it('should return true', async () => {
        const res = await WindyAPI.standard(49.809, 16.787, process.env.WINDY_API_KEY)
        const data = await WindyAPI.beautify(res, 'E M f, Y', 'c', 'kts')
        expect(data).to.be.a('object');
        expect(data).to.include.keys('ts');
        expect(data.ts[0]).to.be.equal(new BetterDate().format('E M f, Y'));
        expect(data).to.include.keys('units');
        expect(data).to.include.keys('temp-surface');
        expect(data['temp-surface'][0]).to.be.a('string');
        expect(parseFloat(data['temp-surface'][0])).to.be.at.most(100);
        expect(parseFloat(data['temp-surface'][0])).to.be.at.least(-50);
        expect(data).to.include.keys('wind_u-surface');
        expect(data['wind_u-surface'][0]).to.be.a('string');
        expect(parseFloat(data['wind_u-surface'][0])).to.be.at.least(-150);
        expect(parseFloat(data['wind_u-surface'][0])).to.be.at.most(150);
        expect(data).to.include.keys('wind_v-surface');
        expect(data['wind_u-surface'][0]).to.be.a('string');
        expect(parseFloat(data['wind_v-surface'][0])).to.be.at.least(0);
        expect(parseFloat(data['wind_v-surface'][0])).to.be.at.most(150);
        expect(data).to.include.keys('rh-surface');
        expect(data['rh-surface'][0]).to.be.a('string');
        expect(data['rh-surface'][0]).to.include('%');
    });
});
