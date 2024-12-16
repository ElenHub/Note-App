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
exports.default = BasicDateRangeCalendar;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var material_1 = require("@mui/material");
var LocalizationProvider_1 = require("@mui/x-date-pickers/LocalizationProvider");
var AdapterDayjs_1 = require("@mui/x-date-pickers/AdapterDayjs");
var DateCalendar_1 = require("@mui/x-date-pickers/DateCalendar");
var react_toastify_1 = require("react-toastify");
var dayjs_1 = __importDefault(require("dayjs"));
var useTasks_1 = __importDefault(require("../../hooks/useTasks"));
var TaskInput_1 = __importDefault(require("../TaskInput/TaskInput"));
var TaskList_1 = __importDefault(require("../TaskList/TaskList"));
var ConfirmationDialog_1 = __importDefault(require("../ConfirmationDialog/ConfirmationDialog"));
var BackButton_1 = require("../BackButton/BackButton");
function BasicDateRangeCalendar(props) {
    var tasks = (0, react_redux_1.useSelector)(function (state) { return state.tasks || []; });
    var _a = (0, react_1.useState)((0, dayjs_1.default)()), selectedDate = _a[0], setSelectedDate = _a[1];
    var _b = (0, useTasks_1.default)(), createTask = _b.createTask, removeTask = _b.removeTask, toggleTaskStatus = _b.toggleTaskStatus, editTaskTitle = _b.editTaskTitle;
    var _c = (0, react_1.useState)(false), open = _c[0], setOpen = _c[1];
    var _d = (0, react_1.useState)(null), taskIdToRemove = _d[0], setTaskIdToRemove = _d[1];
    var _e = (0, react_1.useState)({}), notificationTimes = _e[0], setNotificationTimes = _e[1];
    var addTask = (0, react_1.useCallback)(function (title) {
        if (title.trim()) {
            createTask({ title: title, date: selectedDate.format("YYYY-MM-DD") });
        }
    }, [createTask, selectedDate]);
    var handleOpen = (0, react_1.useCallback)(function (id) {
        setTaskIdToRemove(id);
        setOpen(true);
    }, []);
    var handleClose = (0, react_1.useCallback)(function () {
        setOpen(false);
        setTaskIdToRemove(null);
    }, []);
    var handleRemoveTask = (0, react_1.useCallback)(function () {
        if (taskIdToRemove) {
            removeTask(taskIdToRemove);
        }
        handleClose();
    }, [removeTask, taskIdToRemove, handleClose]);
    var toggleCompletion = (0, react_1.useCallback)(function (id, newStatus) {
        toggleTaskStatus(id, newStatus);
    }, [toggleTaskStatus]);
    var changeTaskTitle = (0, react_1.useCallback)(function (id, newTitle) {
        editTaskTitle(id, newTitle);
    }, [editTaskTitle]);
    var handleTimeChange = function (taskId, newTime) {
        if (newTime) {
            setNotificationTimes(function (prev) {
                var _a;
                return (__assign(__assign({}, prev), (_a = {}, _a[taskId] = newTime, _a)));
            });
        }
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(LocalizationProvider_1.LocalizationProvider, { dateAdapter: AdapterDayjs_1.AdapterDayjs, children: [(0, jsx_runtime_1.jsx)(BackButton_1.BackButton, { iconColor: props.toggleStyle.iconColor }), (0, jsx_runtime_1.jsx)(material_1.Box, { sx: {
                            backgroundColor: props.toggleStyle.backgroundColor,
                            padding: 3,
                            borderRadius: 2,
                            width: "100%",
                            maxWidth: "800px",
                            margin: "0 auto",
                            boxShadow: 3,
                        }, children: (0, jsx_runtime_1.jsx)(DateCalendar_1.DateCalendar, { value: selectedDate, onChange: function (newValue) { return setSelectedDate(newValue); }, sx: {
                                width: '100%',
                                height: '400px',
                                borderRadius: 2,
                                '& .MuiPickersDay-root.Mui-selected': {
                                    backgroundColor: 'var(--orange-color)',
                                    color: 'white', // Цвет текста для выделенного дня
                                },
                                '& .MuiPickersDay-root.Mui-selected:hover': {
                                    backgroundColor: 'rgb(176, 92, 31)',
                                },
                                '& .MuiPickersDay-root.Mui-selected:focus': {
                                    backgroundColor: 'rgb(176, 92, 31)',
                                },
                                '& .MuiPickersYear-yearButton.Mui-selected': {
                                    backgroundColor: 'rgb(176, 92, 31)',
                                    color: 'white', // Цвет текста для выделенной кнопки года
                                },
                                '& .MuiPickersYear-yearButton.Mui-selected:hover': {
                                    backgroundColor: 'rgb(176, 92, 31)'
                                },
                                '& .MuiPickersYear-yearButton.Mui-selected:focus': {
                                    backgroundColor: 'rgb(176, 92, 31)'
                                },
                                '& .MuiButtonBase-root': {
                                    backgroundColor: props.toggleStyle.backgroundColor, // Установите фон для кнопок
                                },
                                '& .MuiIconButton-root': {
                                    margin: '0 4px', // Увеличьте отступ между значками
                                },
                                color: 'black',
                            } }) })] }), (0, jsx_runtime_1.jsxs)(material_1.Box, { sx: { marginTop: 4, padding: 2, backgroundColor: props.toggleStyle.backgroundColor, borderRadius: 2, boxShadow: 2 }, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h6", sx: { marginBottom: 2, textAlign: "center", color: props.toggleStyle.textColor }, children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u0434\u0430\u0447\u0443" }), (0, jsx_runtime_1.jsx)(material_1.Box, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: (0, jsx_runtime_1.jsx)(TaskInput_1.default, { addTask: addTask, toggleStyle: props.toggleStyle.iconColor }) }), (0, jsx_runtime_1.jsx)(TaskList_1.default, { tasks: tasks.filter(function (task) { return task.date === selectedDate.format("YYYY-MM-DD"); }), toggleCompletion: toggleCompletion, color: props.toggleStyle.textColor, changeTaskTitle: changeTaskTitle, handleOpen: handleOpen, handleTimeChange: handleTimeChange, selectedDate: selectedDate, notificationTimes: notificationTimes })] }), (0, jsx_runtime_1.jsx)(ConfirmationDialog_1.default, { open: open, handleClose: handleClose, handleConfirm: handleRemoveTask, itemType: "task" }), (0, jsx_runtime_1.jsx)(react_toastify_1.ToastContainer, {})] }));
}
