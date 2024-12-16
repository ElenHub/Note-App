"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditableSpanBaseExample = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var EditableSpan_1 = __importDefault(require("./EditableSpan"));
var addon_actions_1 = require("@storybook/addon-actions");
exports.default = {
    title: 'EditableSpan Component',
    component: EditableSpan_1.default,
};
var changeTodoListTitleCallback = (0, addon_actions_1.action)('title changed');
var EditableSpanBaseExample = function () {
    return (0, jsx_runtime_1.jsx)(EditableSpan_1.default, { title: "Double click to edit me!", onChange: changeTodoListTitleCallback });
};
exports.EditableSpanBaseExample = EditableSpanBaseExample;
