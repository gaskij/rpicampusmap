"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var dotenv_1 = __importDefault(require("dotenv"));
var path_1 = __importDefault(require("path"));
var locations_1 = __importDefault(require("./routes/locations"));
var search_1 = __importDefault(require("./routes/search"));
var info_1 = __importDefault(require("./routes/info"));
dotenv_1.default.config({ path: './.env' });
var port = 5000;
var server = express_1.default();
server
    .use(body_parser_1.default.urlencoded({ extended: true }))
    .use(body_parser_1.default.json())
    .use(express_1.default.static(path_1.default.join(__dirname, '../../src/campusmap/')))
    .listen(port);
console.log("Listening on port " + port);
server.use('/api/locations', locations_1.default);
server.use('/api/search', search_1.default);
server.use('/api/info', info_1.default);
server.get('/', (function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '../../src/campusmap/index.html'));
}));
server.get('/*', (function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '../../src/campusmap/index.html'));
}));
server.use(function (req, res) {
    res.status(404)
        .sendFile(path_1.default.join(__dirname, '../../src/campusmap/index.html'), { error: '404: Page not Found' });
});
server.use(function (error, req, res, next) {
    res.status(500).send("Error 500: Internal Server Error\n" + error);
    next();
});
//# sourceMappingURL=server.js.map