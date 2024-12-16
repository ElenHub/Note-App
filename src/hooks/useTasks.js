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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var react_redux_1 = require("react-redux");
var tasksSlice_1 = require("../redux/features/tasksSlice");
var react_1 = require("react");
var tasks_api_1 = require("../api/tasks-api");
var useTasks = function () {
    var dispatch = (0, react_redux_1.useDispatch)();
    var tasks = (0, react_redux_1.useSelector)(function (state) { return state.tasks; });
    (0, react_1.useEffect)(function () {
        var loadLocalTasks = function () {
            var savedTasks = localStorage.getItem('tasks');
            if (savedTasks) {
                dispatch((0, tasksSlice_1.setTasks)(JSON.parse(savedTasks)));
            }
        };
        loadLocalTasks();
    }, [dispatch]);
    (0, react_1.useEffect)(function () {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
    var createTask = function (task) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, tasks_api_1.tasksAPI.createTasks(task.title)];
                case 1:
                    response = _a.sent();
                    dispatch((0, tasksSlice_1.addTask)(__assign(__assign({}, task), { id: (0, uuid_1.v4)(), isDone: false }))); // Добавляем id и isDone
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error('Ошибка при создании задачи:', error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var removeTask = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, tasks_api_1.tasksAPI.deleteTasks(id)];
                case 1:
                    _a.sent();
                    dispatch((0, tasksSlice_1.deleteTask)(id));
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.error('Ошибка при удалении задачи:', error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var toggleTaskStatus = function (id, newStatus) {
        dispatch((0, tasksSlice_1.toggleTaskCompletion)({ id: id, newStatus: newStatus }));
    };
    var editTask = function (id, newTitle) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, tasks_api_1.tasksAPI.updateTask(id, newTitle)];
                case 1:
                    response = _a.sent();
                    dispatch((0, tasksSlice_1.updateTask)({ id: id, title: newTitle }));
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.error('Ошибка при обновлении задачи:', error_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var editTaskTitle = function (id, newTitle) {
        dispatch((0, tasksSlice_1.updateTaskTitle)({ id: id, newTitle: newTitle }));
    };
    var editTaskDate = function (id, newDate) {
        dispatch((0, tasksSlice_1.updateTaskDate)({ id: id, newDate: newDate }));
    };
    return { tasks: tasks, createTask: createTask, editTask: editTask, removeTask: removeTask, toggleTaskStatus: toggleTaskStatus, editTaskTitle: editTaskTitle, editTaskDate: editTaskDate };
};
exports.default = useTasks;
