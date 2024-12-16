"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackButton = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var react_router_dom_1 = require("react-router-dom");
var bi_1 = require("react-icons/bi");
var BackButton = function (props) {
    return ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "..", children: (0, jsx_runtime_1.jsx)(material_1.IconButton, { sx: { color: props.iconColor, marginBottom: "20px" }, children: (0, jsx_runtime_1.jsx)(bi_1.BiArrowBack, {}) }) }));
};
exports.BackButton = BackButton;
