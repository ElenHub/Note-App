"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var NoteForm = function (props) {
    return ((0, jsx_runtime_1.jsxs)("form", { className: "create-note__form", onSubmit: props.onSubmit, children: [(0, jsx_runtime_1.jsx)(material_1.TextField, { variant: "outlined", label: "Title", value: props.title, onChange: function (e) { return props.onChange('title', e.target.value); }, error: Boolean(props.errors.title), helperText: props.errors.title, fullWidth: true, margin: "normal", InputProps: {
                    sx: {
                        borderRadius: '14px',
                        background: 'var(--body-color)',
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: props.toggleStyle.iconColor,
                            color: props.toggleStyle.iconColor,
                        }
                    },
                } }), (0, jsx_runtime_1.jsx)(material_1.TextField, { label: "Details", value: props.details, onChange: function (e) { return props.onChange('details', e.target.value); }, multiline: true, rows: 1.3, error: Boolean(props.errors.details), helperText: props.errors.details, fullWidth: true, InputProps: {
                    sx: {
                        color: props.fontColor,
                        borderRadius: '14px',
                        background: 'var(--body-color)',
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: props.toggleStyle.iconColor,
                            color: props.toggleStyle.iconColor,
                        }
                    },
                } }), (0, jsx_runtime_1.jsx)(material_1.Button, { sx: { borderRadius: '30px', backgroundColor: props.toggleStyle.iconHover.backgroundColor, color: props.toggleStyle.iconColor, marginBottom: '20px', marginTop: '20px' }, type: "submit", variant: "contained", color: "primary", fullWidth: true, children: "Submit" })] }));
};
exports.default = NoteForm;
