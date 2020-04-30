"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var admin_1 = require("../controllers/admin");
var jsonParser = body_parser_1.default.json();
var router = express_1.default.Router();
router.route('/')
    .get(function (req, res) { return admin_1.Index.read(req, res); })
    .post(jsonParser, function (req, res) { return admin_1.Index.create(req, res); })
    .put(jsonParser, function (req, res) { return admin_1.Index.update(req, res); })
    .delete(function (req, res) { return admin_1.Index.delete(req, res); });
router.route('/request')
    .get(function (req, res) { return admin_1.AdminRequest.read(req, res); })
    .post(jsonParser, function (req, res) { return admin_1.AdminRequest.create(req, res); })
    .put(jsonParser, function (req, res) { return admin_1.AdminRequest.update(req, res); })
    .delete(function (req, res) { return admin_1.AdminRequest.delete(req, res); });
router.route('/api/login')
    .get(function (req, res) { return admin_1.Login.read(req, res); })
    .post(jsonParser, function (req, res) { return admin_1.Login.create(req, res); })
    .put(jsonParser, function (req, res) { return admin_1.Login.update(req, res); })
    .delete(function (req, res) { return admin_1.Login.delete(req, res); });
exports.default = router;
//# sourceMappingURL=admin.js.map