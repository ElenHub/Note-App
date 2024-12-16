"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var CreateNote_1 = __importDefault(require("./components/CreateNote/CreateNote"));
var Note_1 = __importDefault(require("./components/Note/Note"));
var EditNote_1 = __importDefault(require("./components/EditNote/EditNote"));
var BasicDateRangeCalendar_1 = __importDefault(require("./components/Calendar/BasicDateRangeCalendar"));
var useNotes_1 = __importDefault(require("./hooks/useNotes")); // Импорт хука useNotes
require("react-toastify/dist/ReactToastify.css");
var react_toastify_1 = require("react-toastify");
function App() {
    var _a = (0, react_1.useState)(false), darkMode = _a[0], setDarkMode = _a[1];
    var notes = (0, useNotes_1.default)().notes; // Используем хук для получения заметок
    var toggleStyle = {
        backgroundColor: darkMode ? "var(--body-color)" : "var(--orange-color)",
        textColor: darkMode ? 'rgba(202, 98, 23, 0.77)' : 'rgba(0, 0, 0, 0.87)',
        iconColor: darkMode ? 'rgba(202, 98, 23, 0.77)' : 'rgba(0, 0, 0, 0.87)',
        iconHover: {
            backgroundColor: darkMode ? 'rgb(204, 201, 201)' : 'rgba(202, 98, 23, 0.94)'
        }
    };
    var handleToggleDarkMode = (0, react_1.useCallback)(function () {
        setDarkMode(function (prevMode) { return !prevMode; });
    }, []);
    return ((0, jsx_runtime_1.jsx)("main", { style: { minHeight: '100vh' }, className: darkMode ? 'dark-mode' : '', children: (0, jsx_runtime_1.jsxs)("div", { className: "container", children: [(0, jsx_runtime_1.jsx)(react_toastify_1.ToastContainer, {}), (0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(Note_1.default, { notes: notes, handleToggleDarkMode: handleToggleDarkMode, toggleStyle: toggleStyle, darkMode: darkMode }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/calendar", element: (0, jsx_runtime_1.jsx)(BasicDateRangeCalendar_1.default, { toggleStyle: toggleStyle }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/create", element: (0, jsx_runtime_1.jsx)(CreateNote_1.default, { toggleStyle: toggleStyle }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/edit/:id", element: (0, jsx_runtime_1.jsx)(EditNote_1.default, { toggleStyle: toggleStyle }) })] }) })] }) }));
}
exports.default = App;
