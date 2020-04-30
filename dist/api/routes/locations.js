"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var locations_1 = require("../controllers/locations");
var jsonParser = body_parser_1.default.json();
var router = express_1.default.Router();
router.route('/')
    .get(function (req, res) { return locations_1.Index.read(req, res); })
    .post(jsonParser, function (req, res) { return locations_1.Index.create(req, res); })
    .put(jsonParser, function (req, res) { return locations_1.Index.update(req, res); })
    .delete(function (req, res) { return locations_1.Index.delete(req, res); });
router.route('/:id')
    .get(function (req, res) { return locations_1.LocationController.read(req, res); })
    .post(jsonParser, function (req, res) { return locations_1.LocationController.create(req, res); })
    .put(function (req, res) { return locations_1.LocationController.update(req, res); })
    .delete(function (req, res) { return locations_1.LocationController.delete(req, res); });
exports.default = router;
//# sourceMappingURL=locations.js.map