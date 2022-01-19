"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var modify_arr_1 = require("./modify-arr");
describe('操作数组', function () {
    it('L26', function () {
        var arr = [1, 1, 2];
        expect((0, modify_arr_1.removeDuplicates)(arr)).toEqual(2);
        expect(arr).toEqual([1, 2, 2]);
        var arr2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
        expect((0, modify_arr_1.removeDuplicates)(arr2)).toEqual(5);
        expect(arr2).toEqual([0, 1, 2, 3, 4, 2, 2, 3, 3, 4]);
        // [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
        // [0, 1, 1, 1, 1, 2, 2, 3, 3, 4]
        // [0, 1, 2, 1, 1, 2, 2, 3, 3, 4]
        // [0, 1, 2, 3, 1, 2, 2, 3, 3, 4]
        // [0, 1, 2, 3, 4, 2, 2, 3, 3, 4]
    });
    it('L83', function () {
        var link = (0, modify_arr_1.arrToLink)([1, 1, 2]);
        expect((0, modify_arr_1.deleteDuplicates)(link)).toEqual((0, modify_arr_1.arrToLink)([1, 2]));
        var link2 = (0, modify_arr_1.arrToLink)([1, 1, 2, 3, 3]);
        expect((0, modify_arr_1.deleteDuplicates)(link2)).toEqual((0, modify_arr_1.arrToLink)([1, 2, 3]));
    });
    it('27', function () {
        var arr = [3, 2, 2, 3];
        expect((0, modify_arr_1.removeElement)(arr, 3)).toBe(2);
        expect(arr).toEqual([2, 2, 2, 3]);
        var arr2 = [0, 1, 2, 2, 3, 0, 4, 2];
        expect((0, modify_arr_1.removeElement)(arr2, 2)).toBe(5);
        expect(arr2).toEqual([0, 1, 3, 0, 4, 0, 4, 2]);
        // [0,1,2,2,3,0,4,2]
        // [0,1,3,2,3,0,4,2]
        // [0,1,3,0,3,0,4,2]
        // [0,1,3,0,4,0,4,2]
    });
    it('283', function () {
        var arr = [0, 1, 0, 3, 12];
        (0, modify_arr_1.moveZeroes)(arr);
        expect(arr).toEqual([1, 3, 12, 0, 0]);
    });
});
//# sourceMappingURL=modify-arr.test.js.map