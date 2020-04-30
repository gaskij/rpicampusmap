"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var ProfessorSchema = new mongoose_1.default.Schema({
    _id: {
        type: String,
        require: true,
    },
    id: {
        type: String,
        require: true,
    },
    properties: {
        name: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            require: true,
        },
        phone: {
            type: String,
            require: true,
        },
        office: {
            // maybe after nav is done, make this be coordinates so user can
            // get directions for getting to office
            type: String,
            require: true,
        },
        department: {
            type: String,
            require: true,
        },
        description: {
            type: String,
            require: true,
        },
    },
});
var Professor = mongoose_1.default.model('Professor', ProfessorSchema);
exports.default = Professor;
//# sourceMappingURL=Professor.js.map