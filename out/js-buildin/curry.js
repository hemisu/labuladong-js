"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.curriedAdd = void 0;
var add = function (a, b, c) { return a + b + c; };
add(1, 2, 3);
var curry = function (fn, len) {
    if (len === void 0) { len = fn.length; }
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    return args.length >= len ? fn.apply(void 0, args) : curry.bind.apply(curry, __spreadArray([null, fn, len], args, false));
};
exports.curriedAdd = curry(add)(1)(2)(3);
console.log('%c 🍧 curriedAdd: ', 'font-size:20px;background-color: #2EAFB0;color:#fff;', exports.curriedAdd, 3);
//# sourceMappingURL=curry.js.map