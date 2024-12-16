"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_toastify_1 = require("react-toastify");
var dayjs_1 = __importDefault(require("dayjs"));
var TimeNotification = function () {
    var _a = (0, react_1.useState)(''), selectedTime = _a[0], setSelectedTime = _a[1];
    var _b = (0, react_1.useState)(false), isNotified = _b[0], setIsNotified = _b[1]; // Для предотвращения повторных уведомлений
    var handleTimeChange = function (event) {
        setSelectedTime(event.target.value);
        setIsNotified(false); // Сбросить уведомление при изменении времени
    };
    (0, react_1.useEffect)(function () {
        var interval = setInterval(function () {
            var now = (0, dayjs_1.default)();
            var chosenTime = (0, dayjs_1.default)().hour(selectedTime.split(':')[0]).minute(selectedTime.split(':')[1]).second(0);
            if (now.isSame(chosenTime, 'minute') && !isNotified) {
                react_toastify_1.toast.success('Время пришло! Уведомление!', {
                    autoClose: 5000,
                });
                setIsNotified(true); // Уведомление отправлено
            }
            else if (!now.isSame(chosenTime, 'minute')) {
                setIsNotified(false); // Сбросить флаг, если время изменилось
            }
        }, 60000); // Проверяем каждую минуту
        return function () { return clearInterval(interval); }; // Очистка интервала при размонтировании
    }, [selectedTime, isNotified]);
    return Выберите;
    время;
    для;
    уведомления: /h2>
        < input;
    type = "time";
    value = { selectedTime: selectedTime };
    onChange = { handleTimeChange: handleTimeChange }
        /  >
        />
        < /div>;
};
;
;
exports.default = TimeNotification;
