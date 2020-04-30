"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var dbConfig_1 = require("../config/dbConfig");
var unsupported = function (req, res) {
    res.send('This method is not supported.');
};
var readIndex = function (req, res) {
    console.log('GET: /api/admin');
    res.send('Not yet implemented');
};
var createIndex = function (req, res) {
    console.log('POST: /api/admin');
    res.send('Not yet implemented');
};
var createRequest = function (req, res) {
    var username = req.body.rcsID;
    var password = req.body.password;
    console.log('Username:', username);
    console.log('Password:', password);
    mongoose_1.default.connect(dbConfig_1.dbURI, dbConfig_1.dbOptions).then(function () {
        console.log('Database connected in route "/admin"!');
        mongoose_1.default.disconnect();
        res.send('Not yet implemented');
    });
};
var createLogin = function (req, res) {
    console.log('POST: /api/admin/login');
    res.send('Not yet implemented');
};
exports.Index = {
    create: createIndex,
    read: readIndex,
    update: unsupported,
    delete: unsupported,
};
exports.AdminRequest = {
    create: createRequest,
    read: unsupported,
    update: unsupported,
    delete: unsupported,
};
exports.Login = {
    create: createLogin,
    read: unsupported,
    update: unsupported,
    delete: unsupported,
};
//# sourceMappingURL=admin.js.map