"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var dbConfig_1 = require("../config/dbConfig");
var Location_1 = __importDefault(require("../models/Location"));
var unsupported = function (req, res) {
    res.send('This method is not supported.');
};
var readIndex = function (req, res) {
    console.log('GET: /api/search/');
    var searchQuery = (req.query.query)
        ? {
            $or: [
                { 'properties.name': { $regex: req.query.query, $options: 'i' } },
                { 'properties.nick': { $regex: req.query.query, $options: 'i' } },
            ],
        }
        : null;
    mongoose_1.default.connect(dbConfig_1.dbURI, dbConfig_1.dbOptions).then(function () {
        Location_1.default.find(searchQuery, { properties: 1 }).then(function (results) {
            console.log("\tFound " + results.length + " locations.");
            mongoose_1.default.disconnect();
            res.json(results);
        });
    }).catch(function (err) {
        console.error('\tERROR:', err);
        mongoose_1.default.disconnect();
        res.send("ERROR: " + err);
    });
};
exports.Index = {
    create: unsupported,
    read: readIndex,
    update: unsupported,
    delete: unsupported,
};
exports.default = exports.Index;
//# sourceMappingURL=search.js.map