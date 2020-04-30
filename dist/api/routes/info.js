"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var info_1 = require("../controllers/info");
var jsonParser = body_parser_1.default.json();
var router = express_1.default.Router();
router.route('/:id')
    .get(function (req, res) { return info_1.Index.read(req, res); })
    .post(jsonParser, function (req, res) { return info_1.Index.create(req, res); })
    .put(jsonParser, function (req, res) { return info_1.Index.update(req, res); })
    .delete(function (req, res) { return info_1.Index.delete(req, res); });
router.route('/:id/comments')
    .get(function (req, res) { return info_1.Comments.read(req, res); })
    .post(jsonParser, function (req, res) { return info_1.Comments.create(req, res); })
    .put(jsonParser, function (req, res) { return info_1.Comments.update(req, res); })
    .delete(function (req, res) { return info_1.Comments.delete(req, res); });
router.route('/:id/photos')
    .get(function (req, res) { return info_1.Photos.read(req, res); })
    .post(jsonParser, function (req, res) { return info_1.Photos.create(req, res); })
    .put(jsonParser, function (req, res) { return info_1.Photos.update(req, res); })
    .delete(function (req, res) { return info_1.Photos.delete(req, res); });
exports.default = router;
//# sourceMappingURL=info.js.map