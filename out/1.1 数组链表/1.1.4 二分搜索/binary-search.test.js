"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var binary_search_1 = require("./binary-search");
it('二分搜索', function () {
    expect((0, binary_search_1.search)([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
    expect((0, binary_search_1.search)([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
}, 3);
it('二分搜索左右边界', function () {
    expect((0, binary_search_1.searchRange)([5, 7, 7, 8, 8, 10], 8)).toEqual([3, 4]);
    expect((0, binary_search_1.searchRange)([5, 7, 7, 8, 8, 10], 6)).toEqual([-1, -1]);
    expect((0, binary_search_1.searchRange)([], 0)).toEqual([-1, -1]);
}, 1);
it('L875', function () {
    expect((0, binary_search_1.L875)([3, 6, 7, 11], 8)).toBe(4);
    expect((0, binary_search_1.L875)([30, 11, 23, 4, 20], 5)).toBe(30);
    expect((0, binary_search_1.L875)([30, 11, 23, 4, 20], 6)).toBe(23);
    expect((0, binary_search_1.L875)([2, 2], 2)).toBe(2);
});
it('L1011', function () {
    expect((0, binary_search_1.L1011)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)).toBe(15);
});
//# sourceMappingURL=binary-search.test.js.map