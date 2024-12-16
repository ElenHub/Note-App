"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var tasks_api_1 = require("../api/tasks-api"); // Импортируйте ваш notesAPI
var useTasks_1 = __importDefault(require("./useTasks"));
var react_redux_1 = require("react-redux");
var tasksSlice_1 = require("../redux/features/tasksSlice");
var useLoadTasks = function () {
    var tasks = (0, useTasks_1.default)().tasks; // Получаем заметки из useNotes
    var _a = (0, react_1.useState)(true), loading = _a[0], setLoading = _a[1]; // Добавляем состояние загрузки
    var dispatch = (0, react_redux_1.useDispatch)(); // Получаем dispatch
    (0, react_1.useEffect)(function () {
        var loadTasks = function () { return __awaiter(void 0, void 0, void 0, function () {
            var savedTasks, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        savedTasks = localStorage.getItem('tasks');
                        if (!savedTasks) return [3 /*break*/, 1];
                        dispatch((0, tasksSlice_1.setTasks)(JSON.parse(savedTasks))); // Используем dispatch для обновления состояния
                        return [3 /*break*/, 4];
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, tasks_api_1.tasksAPI.getTasks()];
                    case 2:
                        response = _a.sent();
                        dispatch((0, tasksSlice_1.setTasks)(response.data)); // Используем dispatch для обновления состояния
                        localStorage.setItem('tasks', JSON.stringify(response.data)); // Сохраняем загрузку в локальное хранилище
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.error('Ошибка при загрузке заметок:', error_1);
                        return [3 /*break*/, 4];
                    case 4:
                        setLoading(false); // Устанавливаем состояние загрузки в false после завершения загрузки
                        return [2 /*return*/];
                }
            });
        }); };
        loadTasks();
    }, [dispatch]);
    return { loading: loading, tasks: tasks }; // Возвращаем loading и Tasks
};
exports.default = useLoadTasks;
