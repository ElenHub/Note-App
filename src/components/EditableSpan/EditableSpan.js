"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var EditableSpan = function (props) {
    var _a = (0, react_1.useState)(false), editMode = _a[0], setEditMode = _a[1];
    var _b = (0, react_1.useState)(""), title = _b[0], setTitle = _b[1];
    var activateEditMode = function () {
        setEditMode(true);
        setTitle(props.title);
    };
    var activateViewMode = function () {
        setEditMode(false);
        props.onChange(title);
    };
    var onChangeText = function (e) {
        setTitle(e.target.value);
    };
    return editMode ? (0, jsx_runtime_1.jsx)(material_1.TextField, { value: title, onChange: onChangeText, onBlur: activateViewMode, autoFocus: true }) : (0, jsx_runtime_1.jsx)("span", { onDoubleClick: activateEditMode, children: props.title });
};
EditableSpan.propTypes = {
    title: prop_types_1.default.string.isRequired,
    onChange: prop_types_1.default.func.isRequired,
};
exports.default = EditableSpan;
