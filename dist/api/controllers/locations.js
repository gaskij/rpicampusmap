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
    console.log('GET: /api/locations');
    mongoose_1.default.connect(dbConfig_1.dbURI, dbConfig_1.dbOptions).then(function () {
        Location_1.default.find({}, { properties: 1, geometry: 1 })
            .then(function (locations) {
            mongoose_1.default.disconnect();
            res.json(locations);
        });
    }).catch(function (err) {
        console.error('\tERROR:', err);
        mongoose_1.default.disconnect();
        res.send("ERROR: " + err);
    });
};
var createIndex = function (req, res) {
    console.log('POST: /api/locations');
    console.log(req.body);
    mongoose_1.default.connect(dbConfig_1.dbURI, dbConfig_1.dbOptions).then(function () {
        Location_1.default.create(req.body.location)
            .then(function (result) {
            console.log('\tSuccessfully added location to database.\n');
            mongoose_1.default.disconnect();
            res.json(result);
        });
    }).catch(function (err) {
        console.error('\tERROR:', err);
        mongoose_1.default.disconnect();
        res.send("ERROR: " + err);
    });
};
var readLocation = function (req, res) {
    var id = req.params.id;
    console.log("GET: /api/locations/" + id);
    mongoose_1.default.connect(dbConfig_1.dbURI, dbConfig_1.dbOptions).then(function () {
        Location_1.default.findOne({ id: id }).then(function (result) {
            console.log('Found', result);
            mongoose_1.default.disconnect();
            res.json(result);
        });
    }).catch(function (err) {
        console.error('\tERROR:', err);
        mongoose_1.default.disconnect();
        res.send("ERROR: " + err);
    });
};
var updateLocation = function (req, res) {
    var id = req.params.id;
    var body = req.body;
    console.log("PUT: /api/locations/" + id);
    mongoose_1.default.connect(dbConfig_1.dbURI, dbConfig_1.dbOptions).then(function () {
        Location_1.default.findOneAndUpdate({ id: id }, body).then(function (result) {
            console.log('Successfully updated.', result);
            mongoose_1.default.disconnect();
            res.json(result);
        });
    }).catch(function (err) {
        console.error('\tERROR:', err);
        mongoose_1.default.disconnect();
        res.send("ERROR: " + err);
    });
};
var deleteLocation = function (req, res) {
    var id = req.params.id;
    console.log("GET: /api/locations/" + id);
    res.send('Will be allowed once admins are set up.');
};
exports.Index = {
    create: createIndex,
    read: readIndex,
    update: unsupported,
    delete: unsupported,
};
exports.LocationController = {
    create: unsupported,
    read: readLocation,
    update: updateLocation,
    delete: deleteLocation,
};
//# sourceMappingURL=locations.js.map