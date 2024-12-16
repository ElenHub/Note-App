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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
var NoteItem_1 = __importDefault(require("../NoteItem/NoteItem"));
var Search_1 = __importDefault(require("../Search/Search"));
var Header_1 = __importDefault(require("../Header/Header"));
var react_router_dom_1 = require("react-router-dom");
var material_1 = require("@mui/material");
var Add_1 = __importDefault(require("@mui/icons-material/Add"));
var react_redux_1 = require("react-redux");
var useLoadNotes_1 = __importDefault(require("../../hooks/useLoadNotes")); // Импортируйте ваш кастомный хук
var Note = react_1.default.memo(function (props) {
    var _a = (0, react_1.useState)(''), searchTerm = _a[0], setSearchTerm = _a[1];
    var _b = (0, useLoadNotes_1.default)(), loading = _b.loading, loadedNotes = _b.notes; // Используем хук для отслеживания загрузки
    var reduxNotes = (0, react_redux_1.useSelector)(function (state) { return state.notes.notes; }) || []; // Заметки из Redux
    var _c = (0, react_1.useState)([]), filteredNotes = _c[0], setFilteredNotes = _c[1];
    (0, react_1.useEffect)(function () {
        var allNotes = loadedNotes.length > 0 ? loadedNotes : reduxNotes; // Используем загруженные заметки или заметки из Redux
        if (Array.isArray(allNotes)) {
            var filtered = allNotes.filter(function (note) {
                return note.title.toLowerCase().includes(searchTerm.toLowerCase());
            });
            setFilteredNotes(filtered);
        }
    }, [loadedNotes, reduxNotes, searchTerm]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Header_1.default, { isBeer: props.isBeer, handleToggleDarkMode: props.handleToggleDarkMode, toggleStyle: props.toggleStyle }), (0, jsx_runtime_1.jsx)(Search_1.default, { notes: filteredNotes, setSearchTerm: setSearchTerm, toggleStyle: props.toggleStyle }), loading ? ((0, jsx_runtime_1.jsx)(material_1.Box, { sx: { display: 'flex', justifyContent: 'center', marginTop: 2 }, children: (0, jsx_runtime_1.jsx)(material_1.CircularProgress, { color: 'warning' }) })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [filteredNotes.length === 0 && ((0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "body1", color: props.toggleStyle.textColor, align: "center", sx: { margin: 2 }, children: "No notes found" })), (0, jsx_runtime_1.jsx)(material_1.Grid, { container: true, spacing: 2, sx: { padding: 2 }, children: filteredNotes.map(function (note) { return ((0, jsx_runtime_1.jsx)(material_1.Grid, { item: true, xs: 12, sm: 6, md: 4, children: (0, jsx_runtime_1.jsx)(NoteItem_1.default, { note: note, toggleStyle: props.toggleStyle, sx: {
                                    backgroundColor: props.toggleStyle.backgroundColor,
                                    color: props.toggleStyle.textColor,
                                    borderRadius: '8px',
                                    boxShadow: 2,
                                    padding: 2,
                                } }) }, note.id)); }) })] })), (0, jsx_runtime_1.jsx)(material_1.Box, { sx: { position: 'fixed', bottom: 16, right: 16 }, children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/create", style: { textDecoration: 'none' }, children: (0, jsx_runtime_1.jsx)(material_1.IconButton, { sx: __assign(__assign({}, props.toggleStyle), { fontSize: '2rem', borderRadius: '50%', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', '&:hover': {
                                backgroundColor: props.toggleStyle.iconHover.backgroundColor,
                                transform: 'scale(1.1)',
                                transition: '0.2s'
                            } }), children: (0, jsx_runtime_1.jsx)(Add_1.default, { style: { color: props.toggleStyle.iconColor } }) }) }) })] }));
});
exports.default = Note;
