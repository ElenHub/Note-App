"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notesAPI = void 0;
var axios_1 = __importDefault(require("axios"));
var instance = axios_1.default.create({
    baseURL: 'http://localhost:5000/api/',
});
exports.notesAPI = {
    getNotes: function () {
        return instance.get("notes");
    },
    deleteNotes: function (id) {
        return instance.delete("notes/".concat(id));
    },
    createNotes: function (title, details, color, fontColor, category) {
        return instance.post("notes", { title: title, details: details, color: color, fontColor: fontColor, category: category });
    },
    updateNotes: function (id, title, details, color, fontColor, category) {
        return instance.put("notes/".concat(id), { title: title, details: details, color: color, fontColor: fontColor, category: category });
    },
};
