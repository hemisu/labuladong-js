"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var link_1 = require("./link");
describe('反转链表', function () {
    it('L21', function () {
        var res = (0, link_1.L21)((0, link_1.createList)([1, 2, 4]), (0, link_1.createList)([1, 3, 4]));
        var res2 = (0, link_1.L21_1)((0, link_1.createList)([1, 2, 4]), (0, link_1.createList)([1, 3, 4]));
        var printRes = (0, link_1.printList)(res);
        var printRes2 = (0, link_1.printList)(res2);
        expect(printRes).toEqual([1, 1, 2, 3, 4, 4]);
        expect(printRes2).toEqual([1, 1, 2, 3, 4, 4]);
    });
    it('合并多项列表 L23', function () {
        var res = (0, link_1.mergeKLists)([
            (0, link_1.createList)([1, 4, 5]),
            (0, link_1.createList)([1, 3, 4]),
            (0, link_1.createList)([2, 6])
        ]);
        console.log((0, link_1.printList)(res));
    });
});
//# sourceMappingURL=link.test.js.map