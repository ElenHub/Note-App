"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categories = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var material_1 = require("@mui/material");
var styles_1 = require("@mui/material/styles");
var react_color_1 = require("react-color");
// Определите стилизованный компонент Select
var CustomSelect = (0, styles_1.styled)(material_1.Select)(function (_a) {
    var theme = _a.theme;
    return ({
        '& .MuiInputLabel-root': {
            color: '#333'
        },
        '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ccc',
        },
        '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: '#888',
        },
        '& .MuiSelect-select:focus': {
            borderColor: '#56B5A0',
        },
    });
});
var CustomMenuItem = (0, styles_1.styled)(material_1.MenuItem)(function (_a) {
    var theme = _a.theme;
    return ({
        '&:hover': {
            backgroundColor: '#f5f5f5',
        },
    });
});
exports.categories = {
    work: { name: "Job", color: "#56B5A0" },
    personal: { name: "Personal", color: "#DED16F" },
    shopping: { name: "Purchases", color: "#73BAE0" },
    urgent: { name: "Urgently", color: "#E37173" },
};
var CategoryColorSelector = function (_a) {
    var category = _a.category, setColor = _a.setColor, setCategory = _a.setCategory, setFontColor = _a.setFontColor, fontColor = _a.fontColor, isEditMode = _a.isEditMode, toggleStyle = _a.toggleStyle;
    var _b = (0, react_1.useState)(null), anchorEl = _b[0], setAnchorEl = _b[1];
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    var open = Boolean(anchorEl);
    var id = open ? 'simple-popover' : undefined;
    var handleCategoryChange = function (e) {
        var selectedCategory = e.target.value;
        setCategory(selectedCategory);
        // setColor(categories[selectedCategory].color); // Устанавливаем цвет категории
        if (exports.categories[selectedCategory]) {
            setColor(exports.categories[selectedCategory].color); // Устанавливаем цвет категории
        }
        else {
            console.error("Selected category does not exist:", selectedCategory);
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(material_1.FormControl, { variant: "outlined", fullWidth: true, children: (0, jsx_runtime_1.jsx)(CustomSelect, { sx: { borderRadius: '30px', backgroundColor: toggleStyle.iconHover.backgroundColor, color: toggleStyle.iconColor }, labelId: "category-select-label", value: category, onChange: handleCategoryChange, displayEmpty: true, renderValue: function (selected) {
                        if (selected && exports.categories[selected]) {
                            return exports.categories[selected].name; // Показываем имя выбранной категории
                        }
                        return isEditMode ? "Change category" : "Select category"; // Начальный текст
                    }, children: Object.keys(exports.categories).map(function (key) { return ((0, jsx_runtime_1.jsx)(CustomMenuItem, { value: key, style: { color: exports.categories[key].color }, children: exports.categories[key].name }, key)); }) }) }), (0, jsx_runtime_1.jsxs)("div", { style: { marginTop: '20px' }, children: [(0, jsx_runtime_1.jsx)(material_1.Button, { sx: { borderRadius: '30px', backgroundColor: toggleStyle.iconHover.backgroundColor, color: toggleStyle.iconColor }, variant: "contained", color: "primary", onClick: handleClick, children: "Select Color" }), (0, jsx_runtime_1.jsx)(material_1.Popover, { id: id, open: open, anchorEl: anchorEl, onClose: handleClose, anchorOrigin: { vertical: 'bottom', horizontal: 'left' }, transformOrigin: { vertical: 'top', horizontal: 'left' }, children: (0, jsx_runtime_1.jsx)(react_color_1.SketchPicker, { color: fontColor, onChangeComplete: function (color) { return setFontColor(color.hex); } }) })] })] }));
};
exports.default = CategoryColorSelector;
