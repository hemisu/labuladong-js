"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.L1094 = exports.L1109 = exports.L370 = exports.Difference = void 0;
var Difference = /** @class */ (function () {
    function Difference(nums) {
        if (nums.length === 0)
            throw new Error('nums is empty');
        this.diff = new Array(nums.length).fill(0);
        this.diff[0] = nums[0];
        for (var i = 1; i < nums.length; i++) {
            this.diff[i] = nums[i] - nums[i - 1];
        }
    }
    Difference.prototype.increment = function (i, j, val) {
        this.diff[i] += val;
        if (j + 1 < this.diff.length) {
            this.diff[j + 1] -= val;
        }
    };
    Object.defineProperty(Difference.prototype, "result", {
        get: function () {
            var res = new Array(this.diff.length).fill(0);
            res[0] = this.diff[0];
            for (var i = 1; i < this.diff.length; i++) {
                res[i] = res[i - 1] + this.diff[i];
            }
            return res;
        },
        enumerable: false,
        configurable: true
    });
    return Difference;
}());
exports.Difference = Difference;
var L370 = function (length, updates) {
    var res = new Array(length).fill(0);
    var diff = new Difference(res);
    for (var _i = 0, updates_1 = updates; _i < updates_1.length; _i++) {
        var _a = updates_1[_i], i = _a[0], j = _a[1], val = _a[2];
        diff.increment(i, j, val);
    }
    return diff.result;
};
exports.L370 = L370;
var L1109 = function (bookings, n) {
    var res = new Array(n).fill(0);
    var diff = new Difference(res);
    for (var _i = 0, bookings_1 = bookings; _i < bookings_1.length; _i++) {
        var _a = bookings_1[_i], i = _a[0], j = _a[1], k = _a[2];
        diff.increment(i - 1, j - 1, k);
    }
    return diff.result;
};
exports.L1109 = L1109;
var L1094 = function (trips, capacity) {
    var res = new Array(1000 + 1).fill(0);
    var diff = new Difference(res);
    for (var _i = 0, trips_1 = trips; _i < trips_1.length; _i++) {
        var _a = trips_1[_i], k = _a[0], i = _a[1], j = _a[2];
        diff.increment(i, j - 1, k);
    }
    return diff.result.every(function (p) { return p <= capacity; });
};
exports.L1094 = L1094;
//# sourceMappingURL=Difference.js.map