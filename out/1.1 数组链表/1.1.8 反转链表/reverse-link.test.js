"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reverse_link_1 = require("./reverse-link");
describe('反转链表', function () {
    it('边界', function () {
        (0, reverse_link_1.arrToLink)([1]);
    });
    it('递归', function () {
        var arr = [1, 2, 3, 4, 5];
        var t = (0, reverse_link_1.arrToLink)(arr);
        expect((0, reverse_link_1.reverseLink)(t)).toEqual((0, reverse_link_1.arrToLink)(arr.reverse()));
    });
    it('迭代', function () {
        var arr = [1, 2, 3, 4, 5];
        var t = (0, reverse_link_1.arrToLink)([1, 2, 3, 4, 5]);
        expect((0, reverse_link_1.reverseLinkIt)(t)).toEqual((0, reverse_link_1.arrToLink)(arr.reverse()));
    });
});
//# sourceMappingURL=reverse-link.test.js.map