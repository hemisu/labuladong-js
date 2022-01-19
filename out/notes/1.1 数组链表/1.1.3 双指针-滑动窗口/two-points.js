"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.L870 = exports.L3 = exports.L438 = exports.L567 = exports.minWindow = void 0;
/**
 * S 中寻找 T 的子串
 * 滑动窗口的思想：初始化 l = r = 0, 把左闭右开的区间作为一个窗口，[l, r)
 * 1. 先不断扩大r，直到窗口里的解符合要求 （寻找可行解）
 * 2. 再在符合要求的情况下不断缩小l，同时不断更新最优解，直到窗口里的解不再符合要求 （寻找最优解）
 * 3. 直到 r 到达字符串的尽头
 **/
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    var need = new Map();
    var window = new Map();
    for (var _i = 0, t_1 = t; _i < t_1.length; _i++) {
        var c = t_1[_i];
        need.has(c) ? need.set(c, need.get(c) + 1) : need.set(c, 1);
    }
    var l = 0, r = 0, minLen = Number.MAX_SAFE_INTEGER, valid = 0, start = 0;
    while (r < s.length) {
        var c = s[r];
        r++;
        if (need.has(c)) {
            window.set(c, window.has(c) ? window.get(c) + 1 : 1);
            if (window.get(c) === need.get(c))
                valid++;
        }
        while (valid === need.size) {
            if (r - l < minLen) {
                start = l;
                minLen = r - l;
            }
            var d = s[l];
            l++;
            if (need.has(d)) {
                if (window.get(d) === need.get(d))
                    valid--;
                window.set(d, window.get(d) - 1);
            }
        }
    }
    return minLen === Number.MAX_SAFE_INTEGER ? '' : s.slice(start, start + minLen);
};
exports.minWindow = minWindow;
var L567 = function (s1, s2) {
    var need = {};
    var window = {};
    for (var _i = 0, s1_1 = s1; _i < s1_1.length; _i++) {
        var c = s1_1[_i];
        need[c] ? need[c]++ : need[c] = 1;
    }
    var l = 0, r = 0, valid = 0;
    while (r < s2.length) {
        var c = s2[r];
        r++;
        if (need[c]) {
            window[c] ? window[c]++ : window[c] = 1;
            if (window[c] === need[c])
                valid++;
        }
        while (r - l >= s1.length) { // 判断是否要收缩，与上面不同的是这里要求是要求窗口大小等于s1的长度
            if (valid === Object.keys(need).length)
                return true;
            var d = s2[l];
            l++;
            if (need[d]) {
                if (need[d] === window[d])
                    valid--;
                window[d]--;
            }
        }
    }
    return false;
};
exports.L567 = L567;
var L438 = function (s, p) {
    var need = {};
    var window = {};
    var res = [];
    for (var _i = 0, p_1 = p; _i < p_1.length; _i++) {
        var c = p_1[_i];
        need[c] ? need[c]++ : need[c] = 1;
    }
    var l = 0, r = 0, valid = 0;
    while (r < s.length) {
        var c = s[r];
        r++;
        if (need[c]) {
            window[c] ? window[c]++ : window[c] = 1;
            if (window[c] === need[c])
                valid++;
        }
        while (r - l >= p.length) {
            if (valid === Object.keys(need).length) {
                res.push(l);
            }
            var d = s[l];
            l++;
            if (need[d]) {
                if (window[d] === need[d])
                    valid--;
                window[d]--;
            }
        }
    }
    return res;
};
exports.L438 = L438;
var L3 = function (s) {
    var window = {};
    var l = 0, r = 0, res = 0;
    while (r < s.length) {
        var c = s[r];
        r++;
        window[c] ? window[c]++ : window[c] = 1;
        while (window[c] > 1) {
            var d = s[l];
            l++;
            window[d]--;
        }
        res = Math.max(res, r - l);
    }
    return res;
};
exports.L3 = L3;
function L870(nums1, nums2) {
    var res = [];
    nums1.sort(function (a, b) { return a - b; }); // 小 -> 大
    var index2 = Array.from({ length: nums2.length }, function (_, i) { return i; });
    index2.sort(function (a, b) { return (nums2[b] - nums2[a]); });
    var left = 0, right = nums1.length - 1;
    for (var i = 0; i < nums2.length; i++) {
        var curB = nums2[index2[i]];
        if (nums1[right] <= curB) { // 最大的打不过，保存实力
            res[index2[i]] = nums1[left++];
        }
        else {
            res[index2[i]] = nums1[right--];
        }
    }
    return res;
}
exports.L870 = L870;
;
//# sourceMappingURL=two-points.js.map