"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var search_1 = require("../controllers/search");
var router = express_1.default.Router();
router.route('/')
    .get(function (req, res) { return search_1.Index.read(req, res); })
    .post(function (req, res) { return search_1.Index.create(req, res); })
    .put(function (req, res) { return search_1.Index.update(req, res); })
    .delete(function (req, res) { return search_1.Index.delete(req, res); });
exports.default = router;
//# sourceMappingURL=search.js.map