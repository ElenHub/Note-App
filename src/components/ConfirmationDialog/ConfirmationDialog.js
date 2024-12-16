"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var ConfirmationDialog = function (props) {
    return ((0, jsx_runtime_1.jsxs)(material_1.Dialog, { open: props.open, onClose: props.handleClose, children: [(0, jsx_runtime_1.jsx)(material_1.DialogTitle, { children: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F" }), (0, jsx_runtime_1.jsx)(material_1.DialogContent, { children: (0, jsx_runtime_1.jsx)(material_1.DialogContentText, { children: "\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u0443 ".concat(props.itemType, "?") }) }), (0, jsx_runtime_1.jsxs)(material_1.DialogActions, { children: [(0, jsx_runtime_1.jsx)(material_1.Button, { onClick: props.handleClose, children: "\u041E\u0442\u043C\u0435\u043D\u0430" }), (0, jsx_runtime_1.jsx)(material_1.Button, { onClick: props.handleConfirm, color: "error", children: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C" })] })] }));
};
exports.default = ConfirmationDialog;
