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
var _this = this;
describe('????????????', function () {
    it('p43 ???????????? ????????????', function () { return __awaiter(_this, void 0, void 0, function () {
        var Difference, difference;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.resolve().then(function () { return require('./Difference'); })];
                case 1:
                    Difference = (_a.sent()).Difference;
                    difference = new Difference([8, 5, 9, 6, 1]);
                    expect(difference.diff).toEqual([8, -3, 4, -3, -5]);
                    expect(difference.result).toEqual([8, 5, 9, 6, 1]);
                    return [2 /*return*/];
            }
        });
    }); });
    it('p45 ???????????? 370??? ????????????', function () { return __awaiter(_this, void 0, void 0, function () {
        var L370, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.resolve().then(function () { return require('./Difference'); })];
                case 1:
                    L370 = (_a.sent()).L370;
                    res = L370(5, [[1, 3, 2], [2, 4, 3], [0, 2, -2]]);
                    expect(res).toEqual([-2, 0, 3, 5, 3]);
                    return [2 /*return*/];
            }
        });
    }); });
    it('p45 ???????????? 1109??? ??????????????????', function () { return __awaiter(_this, void 0, void 0, function () {
        var L1109, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.resolve().then(function () { return require('./Difference'); })];
                case 1:
                    L1109 = (_a.sent()).L1109;
                    res = L1109([[1, 2, 10], [2, 3, 20], [2, 5, 25]], 5);
                    expect(res).toEqual([10, 55, 45, 25, 25]);
                    return [2 /*return*/];
            }
        });
    }); });
    it('p45 ???????????? 1094??? ??????', function () { return __awaiter(_this, void 0, void 0, function () {
        var L1094;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.resolve().then(function () { return require('./Difference'); })];
                case 1:
                    L1094 = (_a.sent()).L1094;
                    expect(L1094([[2, 1, 5], [3, 3, 7]], 4)).toEqual(false);
                    expect(L1094([[2, 1, 5], [3, 3, 7]], 5)).toEqual(true);
                    expect(L1094([[2, 1, 5], [3, 5, 7]], 3)).toEqual(true);
                    expect(L1094([[3, 2, 7], [3, 7, 9], [8, 3, 9]], 11)).toEqual(true);
                    expect(L1094([[7, 5, 6], [6, 7, 8], [10, 1, 6]], 16)).toEqual(false);
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=Difference.test.js.map