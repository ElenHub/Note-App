"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./Loader.module.css"); // Подключите CSS для стилей
var Loader = function () {
    return ((0, jsx_runtime_1.jsx)("div", { className: "preloader", children: (0, jsx_runtime_1.jsx)("div", { className: "spinner" }) }));
};
exports.default = Loader;
