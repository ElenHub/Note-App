"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var client_1 = require("react-dom/client");
var App_1 = __importDefault(require("./App"));
require("./index.css");
var store_ts_1 = __importDefault(require("../src/store/store.ts"));
var react_redux_1 = require("react-redux");
(0, client_1.createRoot)(document.getElementById('root')).render((0, jsx_runtime_1.jsx)(react_redux_1.Provider, { store: store_ts_1.default, children: (0, jsx_runtime_1.jsx)(App_1.default, {}) }));
