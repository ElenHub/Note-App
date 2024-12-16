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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var ConfirmationDialog_1 = __importDefault(require("./ConfirmationDialog"));
exports.default = {
    title: 'Components/ConfirmationDialog',
    component: ConfirmationDialog_1.default,
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(ConfirmationDialog_1.default, __assign({}, args)); };
exports.Default = Template.bind({});
exports.Default.args = {
    isOpen: true,
    title: 'Confirm Action',
    message: 'Are you sure you want to proceed?',
    onConfirm: function () { return alert('Confirmed!'); },
    onCancel: function () { return alert('Canceled!'); },
};
