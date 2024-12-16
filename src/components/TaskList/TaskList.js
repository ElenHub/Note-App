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
var material_1 = require("@mui/material");
var icons_material_1 = require("@mui/icons-material");
var EditableSpan_1 = __importDefault(require("../EditableSpan/EditableSpan"));
var TimePicker_1 = require("@mui/x-date-pickers/TimePicker");
var AdapterDayjs_1 = require("@mui/x-date-pickers/AdapterDayjs");
var LocalizationProvider_1 = require("@mui/x-date-pickers/LocalizationProvider");
var dayjs_1 = __importDefault(require("dayjs"));
var react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
var TaskList_module_css_1 = __importDefault(require("./TaskList.module.css"));
var TaskList = function (props) {
    var getTaskTitleById = function (id) {
        var task = props.tasks.find(function (task) { return task.id === id; });
        return task ? task.title : "Неизвестная задача";
    };
    // Уведомление по времени
    (0, react_1.useEffect)(function () {
        var interval = setInterval(function () {
            var now = (0, dayjs_1.default)();
            Object.keys(props.notificationTimes).forEach(function (taskId) {
                var chosenTime = (0, dayjs_1.default)(props.notificationTimes[taskId]);
                if (now.isSame(chosenTime, "minute")) {
                    var taskTitle = getTaskTitleById(taskId);
                    react_toastify_1.toast.success("\u0412\u0440\u0435\u043C\u044F \u043F\u0440\u0438\u0448\u043B\u043E! \u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0437\u0430\u0434\u0430\u0447\u0438: ".concat(taskTitle), {
                        autoClose: 5000,
                    });
                }
            });
        }, 60000); // Проверяем каждую минуту
        return function () { return clearInterval(interval); };
    }, [props.notificationTimes, props.tasks]);
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, { sx: { marginTop: 2 }, children: [(0, jsx_runtime_1.jsx)(react_toastify_1.ToastContainer, {}), props.tasks.length === 0 ? ((0, jsx_runtime_1.jsx)(material_1.Typography, { color: props.color, variant: "body1", align: "center", sx: { margin: 2 }, children: "\u041D\u0435\u0442 \u0437\u0430\u0434\u0430\u0447" })) : (props.tasks.map(function (task) { return ((0, jsx_runtime_1.jsxs)(material_1.Box, { className: "".concat(task.isDone ? TaskList_module_css_1.default.isDone : TaskList_module_css_1.default.task), sx: { display: "flex", alignItems: "center", gap: 1, padding: 1 }, children: [(0, jsx_runtime_1.jsx)(material_1.Checkbox, { checked: task.isDone, onChange: function (event) { return props.toggleCompletion(task.id, event.target.checked); }, sx: {
                            "&.Mui-checked": {
                                color: "var(--orange-color)",
                            },
                        } }), (0, jsx_runtime_1.jsx)(EditableSpan_1.default, { title: task.title, onChange: function (newTitle) { return props.changeTaskTitle(task.id, newTitle); } }), (0, jsx_runtime_1.jsx)(LocalizationProvider_1.LocalizationProvider, { dateAdapter: AdapterDayjs_1.AdapterDayjs, children: (0, jsx_runtime_1.jsx)(TimePicker_1.TimePicker, { label: "\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435", value: props.notificationTimes[task.id] ? (0, dayjs_1.default)(props.notificationTimes[task.id]) : (0, dayjs_1.default)(), onChange: function (newValue) { return props.handleTimeChange(task.id, newValue ? newValue.format() : null); }, renderInput: function (params) { return (0, jsx_runtime_1.jsx)(material_1.TextField, __assign({}, params)); }, disabled: task.isDone, sx: { marginLeft: 'auto' } }) }), (0, jsx_runtime_1.jsx)(material_1.IconButton, { onClick: function () { return props.handleOpen(task.id); }, color: "error", sx: {
                            backgroundColor: 'transparent',
                            marginLeft: 4, // Добавлен отступ слева от кнопки
                            marginRight: 2,
                            '&:hover': {
                                backgroundColor: 'rgba(255, 0, 0, 0.1)', // Легкий красный фон при наведении
                                borderRadius: '50%',
                            },
                            transition: 'background-color 0.3s ease',
                        }, children: (0, jsx_runtime_1.jsx)(icons_material_1.Delete, {}) })] }, task.id)); }))] }));
};
exports.default = TaskList;
