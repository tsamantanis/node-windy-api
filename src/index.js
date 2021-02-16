"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.standard = exports.get = void 0;
// https://api.windy.com/api/point-forecast/v2
var fetch = require("node-fetch");
// params
function get(lat, //  latitude
lon, // longitude
model, // forecast model ['Arome', 'IconEu', 'GFS', 'Wavewatch', 'namConus', 'namHawaii', 'namAlaska', 'geos5']
parameters, // https://api.windy.com/point-forecast/docs#parameters
levels, // geopotential values ['surface', '1000h', '950h', '925h', '900h', '850h', '800h', '700h', '600h', '500h', '400h', '300h', '200h', '150h']
apiKey) {
    return __awaiter(this, void 0, void 0, function () {
        var path, options, data, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    path = "https://api.windy.com/api/point-forecast/v2";
                    options = {
                        method: "post",
                        body: JSON.stringify({
                            lat: lat,
                            lon: lon,
                            model: model,
                            parameters: parameters,
                            levels: levels,
                            key: apiKey
                        }),
                        headers: {
                            "Content-type": "application/json; charset=UTF-8"
                        }
                    };
                    return [4 /*yield*/, fetch(path, options)];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, data.json()];
                case 2:
                    err_1 = _a.sent();
                    return [2 /*return*/, err_1];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.get = get;
;
// default forecasting route
function standard(lat, //  latitude
lon, // longitude
apiKey) {
    return __awaiter(this, void 0, void 0, function () {
        var data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, get(lat, lon, "gfs", ["temp", "wind", "rh"], ["surface"], apiKey)]; // await fetch(path, options)
                case 1:
                    data = _a.sent() // await fetch(path, options)
                    ;
                    return [2 /*return*/, data];
                case 2:
                    error_1 = _a.sent();
                    return [2 /*return*/, error_1];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.standard = standard;
