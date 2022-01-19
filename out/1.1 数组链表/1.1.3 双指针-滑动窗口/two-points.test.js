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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
var two_points_1 = require("./two-points");
describe('双指针-滑动窗口', function () {
    it('L76 最小覆盖子串', function () { return __awaiter(void 0, void 0, void 0, function () {
        var minWindow;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.resolve().then(function () { return require('./two-points'); })];
                case 1:
                    minWindow = (_a.sent()).minWindow;
                    expect(minWindow('ADOBECODEBANC', 'ABC')).toEqual('BANC');
                    expect(minWindow('a', 'a')).toEqual('a');
                    expect(minWindow('a', 'aa')).toEqual('');
                    return [2 /*return*/];
            }
        });
    }); });
    it('L567 字符串排列', function () { return __awaiter(void 0, void 0, void 0, function () {
        var L567;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.resolve().then(function () { return require('./two-points'); })];
                case 1:
                    L567 = (_a.sent()).L567;
                    expect(L567("ab", "eidbaooo")).toBeTruthy();
                    expect(L567("ab", "eidboaoo")).toBeFalsy();
                    return [2 /*return*/];
            }
        });
    }); });
    it('L438 找到字符串中所有字母异位词', function () { return __awaiter(void 0, void 0, void 0, function () {
        var L438;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.resolve().then(function () { return require('./two-points'); })];
                case 1:
                    L438 = (_a.sent()).L438;
                    expect(L438("cbaebabacd", "abc")).toEqual([0, 6]);
                    expect(L438("abab", "ab")).toEqual([0, 1, 2]);
                    return [2 /*return*/];
            }
        });
    }); });
    it('L3 无重复字符的最长子串', function () { return __awaiter(void 0, void 0, void 0, function () {
        var L3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.resolve().then(function () { return require('./two-points'); })];
                case 1:
                    L3 = (_a.sent()).L3;
                    expect(L3("abcabcbb")).toEqual(3);
                    expect(L3("bbbbb")).toEqual(1);
                    expect(L3("pwwkew")).toEqual(3);
                    expect(L3("")).toEqual(0);
                    return [2 /*return*/];
            }
        });
    }); });
    it('L870 田忌赛马', function () {
        expect((0, two_points_1.L870)([2, 7, 11, 15], [1, 10, 4, 11])).toEqual([2, 11, 7, 15]);
        expect((0, two_points_1.L870)([12, 24, 8, 32], [13, 25, 32, 11])).toEqual([24, 32, 8, 12]);
    });
});
//# sourceMappingURL=two-points.test.js.map