"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../../.env') });
var user = process.env.DB_USER;
var pass = process.env.DB_PASS;
exports.dbURI = "mongodb+srv://" + user + ":" + pass + "@rpicampusmap-fwvzb.gcp.mongodb.net/test?retryWrites=true";
exports.dbOptions = { useNewUrlParser: true, useUnifiedTopology: true };
//# sourceMappingURL=dbConfig.js.map