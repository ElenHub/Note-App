"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var BackButton_1 = require("./BackButton");
exports.default = {
    title: 'Components/BackButton',
    component: BackButton_1.BackButton,
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(BackButton_1.BackButton, __assign({}, args)); };
exports.Default = Template.bind({});
exports.Default.args = {
    text: 'Back',
    onClick: function () { return alert('Back button clicked!'); },
};
