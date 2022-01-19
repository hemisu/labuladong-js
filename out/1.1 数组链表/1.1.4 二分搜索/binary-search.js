"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.L1011 = exports.L875 = exports.searchRange = exports.searchRight = exports.searchLeft = exports.search = void 0;
function search(nums, target) {
    var l = 0;
    var r = nums.length - 1;
    while (l <= r) {
        var mid = l + ((r - l) >> 1);
        if (nums[mid] === target)
            return mid;
        else if (nums[mid] < target)
            l = mid + 1;
        else
            r = mid - 1;
    }
    return -1;
}
exports.search = search;
;
function searchLeft(nums, target) {
    var l = 0;
    var r = nums.length - 1;
    while (l <= r) {
        var mid = l + ((r - l) >> 1);
        if (nums[mid] === target)
            r = mid - 1;
        else if (nums[mid] < target)
            l = mid + 1;
        else
            r = mid - 1;
    }
    return (l >= nums.length - 1 || nums[l] !== target) ? -1 : l;
}
exports.searchLeft = searchLeft;
function searchRight(nums, target) {
    var l = 0;
    var r = nums.length - 1;
    while (l <= r) {
        var mid = l + ((r - l) >> 1);
        if (nums[mid] === target)
            l = mid + 1;
        else if (nums[mid] < target)
            l = mid + 1;
        else
            r = mid - 1;
    }
    return (r < 0 || nums[r] !== target) ? -1 : r;
}
exports.searchRight = searchRight;
function searchRange(nums, target) {
    return [searchLeft(nums, target), searchRight(nums, target)];
}
exports.searchRange = searchRange;
;
function L875(piles, h) {
    // h = f(x)
    var f = function (x) {
        var hours = 0;
        for (var _i = 0, piles_1 = piles; _i < piles_1.length; _i++) {
            var p = piles_1[_i];
            hours += ~~(p / x);
            if (p % x)
                hours++;
        }
        return hours;
    };
    var l = 1, r = 10e9;
    while (l <= r) {
        var mid = l + ((r - l) >> 1);
        if (f(mid) === h)
            r = mid - 1;
        else if (f(mid) < h)
            r = mid - 1;
        else
            l = mid + 1;
    }
    return l;
}
exports.L875 = L875;
function L1011(weights, days) {
    var f = function (x) {
        var day = 0;
        for (var i = 0; i < weights.length;) {
            var cap = x;
            while (i < weights.length) {
                if (cap < weights[i])
                    break;
                else
                    cap -= weights[i];
                i++;
            }
            day++;
        }
        return day;
    };
    var l = Math.max.apply(Math, weights), r = weights.reduce(function (a, b) { return a + b; });
    while (l <= r) {
        var mid = l + ((r - l) >> 1);
        if (f(mid) === days)
            r = mid - 1;
        else if (f(mid) < days)
            r = mid - 1;
        else
            l = mid + 1;
    }
    return l;
}
exports.L1011 = L1011;
;
//# sourceMappingURL=binary-search.js.map