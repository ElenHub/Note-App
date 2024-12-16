"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var md_1 = require("react-icons/md");
var react_router_dom_1 = require("react-router-dom");
var material_1 = require("@mui/material");
require("./Header.module.css");
var Header = function (props) {
    return ((0, jsx_runtime_1.jsxs)(material_1.AppBar, { position: "static", sx: { backgroundColor: props.toggleStyle.backgroundColor, borderRadius: '8px', marginBottom: '20px' }, children: [" ", (0, jsx_runtime_1.jsxs)(material_1.Toolbar, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h6", component: "div", sx: { flexGrow: 1, color: props.toggleStyle.textColor }, children: "Notes" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/calendar", style: { textDecoration: 'none' }, children: (0, jsx_runtime_1.jsxs)(material_1.IconButton, { sx: { color: props.toggleStyle.iconColor, '&:hover': {
                                    transform: 'scale(1.1)', // Увеличение при наведении
                                    transition: 'transform 0.2s', // Плавный переход
                                } }, children: [" ", (0, jsx_runtime_1.jsx)(md_1.MdCalendarMonth, {})] }) }), (0, jsx_runtime_1.jsx)(material_1.IconButton, { sx: { color: props.toggleStyle.iconColor, '&:hover': {
                                transform: 'scale(1.1)', // Увеличение при наведении
                                transition: 'transform 0.2s', // Плавный переход
                            } }, children: (0, jsx_runtime_1.jsx)(md_1.MdNotifications, {}) }), (0, jsx_runtime_1.jsx)(material_1.IconButton, { sx: { color: props.toggleStyle.iconColor, '&:hover': {
                                transform: 'scale(1.1)', // Увеличение при наведении
                                transition: 'transform 0.2s', // Плавный переход
                            } }, onClick: props.handleToggleDarkMode, children: props.darkMode ? (0, jsx_runtime_1.jsx)(md_1.MdLightMode, {}) : (0, jsx_runtime_1.jsx)(md_1.MdDarkMode, {}) })] })] }));
};
exports.default = Header;
