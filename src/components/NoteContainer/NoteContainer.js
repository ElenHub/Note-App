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
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var NoteForm_1 = __importDefault(require("../NoteForm/NoteForm"));
var useNotes_1 = __importDefault(require("../../hooks/useNotes"));
var dayjs_1 = __importDefault(require("dayjs"));
var ColorCategorySelector_1 = __importDefault(require("../ColorCtaegorySelector/ColorCategorySelector"));
var BackButton_1 = require("../BackButton/BackButton");
var uuid_1 = require("uuid");
var react_toastify_1 = require("react-toastify");
var NoteContainer = function (_a) {
    var isEditMode = _a.isEditMode, initialNote = _a.initialNote, toggleStyle = _a.toggleStyle;
    var _b = (0, useNotes_1.default)(), createNote = _b.createNote, editNote = _b.editNote;
    var id = (0, react_router_dom_1.useParams)().id;
    var _c = (0, react_1.useState)(initialNote ? initialNote.title : ""), title = _c[0], setTitle = _c[1];
    var _d = (0, react_1.useState)(initialNote ? initialNote.details : ""), details = _d[0], setDetails = _d[1];
    var _e = (0, react_1.useState)({}), errors = _e[0], setErrors = _e[1];
    var _f = (0, react_1.useState)("#ffffff"), color = _f[0], setColor = _f[1];
    var _g = (0, react_1.useState)(initialNote ? initialNote.fontColor : "#000000"), fontColor = _g[0], setFontColor = _g[1];
    var _h = (0, react_1.useState)((0, dayjs_1.default)()), selectedDate = _h[0], setSelectedDate = _h[1];
    var _j = (0, react_1.useState)(initialNote ? initialNote.category : "default"), category = _j[0], setCategory = _j[1];
    var navigate = (0, react_router_dom_1.useNavigate)();
    var validateForm = function () {
        var newErrors = {};
        if (!title.trim())
            newErrors.title = "Title is required";
        if (!details.trim())
            newErrors.details = "Details are required";
        setErrors(newErrors);
        return !newErrors.title && !newErrors.details;
    };
    var handleSubmit = function (e) {
        e.preventDefault();
        if (validateForm()) {
            var noteData = {
                id: isEditMode ? id : (0, uuid_1.v4)(),
                title: title,
                details: details,
                fontColor: fontColor,
                color: color,
                category: category,
                date: selectedDate.format("YYYY-MM-DD"),
            };
            console.log("Note Data:", noteData);
            if (isEditMode) {
                editNote(id, title, details, color, fontColor, category);
                react_toastify_1.toast.success("Заметка успешно обновлена!");
            }
            else {
                createNote(noteData);
                react_toastify_1.toast.success("Заметка успешно создана!");
            }
            navigate("/");
        }
    };
    var handleChange = function (field, value) {
        if (field === "title") {
            setTitle(value);
            setErrors(function (prevErrors) { return (__assign(__assign({}, prevErrors), { title: "" })); });
        }
        if (field === "details") {
            setDetails(value);
            setErrors(function (prevErrors) { return (__assign(__assign({}, prevErrors), { details: "" })); });
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(BackButton_1.BackButton, { iconColor: toggleStyle.iconColor }), (0, jsx_runtime_1.jsx)(NoteForm_1.default, { title: title, details: details, onSubmit: handleSubmit, onChange: handleChange, errors: errors, fontColor: fontColor, toggleStyle: toggleStyle }), (0, jsx_runtime_1.jsx)(ColorCategorySelector_1.default, { fontColor: fontColor, setColor: setColor, setFontColor: setFontColor, toggleStyle: toggleStyle, isEditMode: isEditMode, category: category, setCategory: setCategory })] }));
};
exports.default = NoteContainer;
