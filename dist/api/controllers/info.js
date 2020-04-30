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
    var id = req.params.id;
    console.log("GET: /api/info/" + id);
    mongoose_1.default.connect(dbConfig_1.dbURI, dbConfig_1.dbOptions).then(function () {
        Location_1.default.findOne({ id: id }).then(function (result) {
            console.log('\tFound', result);
            mongoose_1.default.disconnect();
            res.json(result);
        });
    }).catch(function (err) {
        console.error('\tERROR:', err);
        mongoose_1.default.disconnect();
        res.send("ERROR: " + err);
    });
};
var readComments = function (req, res) {
    var id = req.params.id;
    console.log("GET: /api/info/" + id + "/comments");
    mongoose_1.default.connect(dbConfig_1.dbURI, dbConfig_1.dbOptions).then(function () {
        Location_1.default.findOne({ id: id }, { comments: 1 }).then(function (result) {
            console.log('\tFound', result);
            mongoose_1.default.disconnect();
            res.json(result);
        });
    }).catch(function (err) {
        console.error('\tERROR:', err);
        mongoose_1.default.disconnect();
        res.send("ERROR: " + err);
    });
};
var createComments = function (req, res) {
    var id = req.params.id;
    console.log("POST: /api/info/" + id + "/comments");
    res.send('Not yet implemented.');
};
var readPhotos = function (req, res) {
    var id = req.params.id;
    console.log("GET: /api/info/" + id + "/photos");
    mongoose_1.default.connect(dbConfig_1.dbURI, dbConfig_1.dbOptions).then(function () {
        Location_1.default.findOne({ id: id }, { photos: 1 }).then(function (result) {
            console.log('\tFound', result);
            mongoose_1.default.disconnect();
            res.json(result);
        });
    }).catch(function (err) {
        console.error('\tERROR:', err);
        mongoose_1.default.disconnect();
        res.send("ERROR: " + err);
    });
};
var createPhotos = function (req, res) {
    var id = req.params.id;
    console.log("POST: /api/info/" + id + "/photos");
    res.send('Not yet implemented.');
};
exports.Index = {
    create: unsupported,
    read: readIndex,
    update: unsupported,
    delete: unsupported,
};
exports.Comments = {
    create: createComments,
    read: readComments,
    update: unsupported,
    delete: unsupported,
};
exports.Photos = {
    create: createPhotos,
    read: readPhotos,
    update: unsupported,
    delete: unsupported,
};
//# sourceMappingURL=info.js.map