"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var LocationSchema = new mongoose_1.default.Schema({
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
        nick: {
            type: String,
            require: true,
        },
        category: {
            type: String,
            require: true,
        },
        amenity: {
            type: String,
            require: false,
        },
        description: {
            type: String,
            require: true,
        },
        popupContent: {
            type: String,
            require: true,
        },
    },
    comments: {
        type: Array,
        require: true,
    },
    photos: {
        type: Array,
        require: true,
    },
    geometry: {
        type: String,
        coordinates: {
            type: Array,
            require: true,
        },
    },
});
var Location = mongoose_1.default.model('Location', LocationSchema);
exports.default = Location;
//# sourceMappingURL=Location.js.map