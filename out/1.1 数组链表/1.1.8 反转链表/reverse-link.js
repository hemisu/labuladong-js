"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseLinkIt = exports.reverseLink = exports.arrToLink = void 0;
function NodeLink(val) {
    this.val = val;
    this.next = null;
}
var arrToLink = function (arr) {
    var dummy = new NodeLink(), pre = dummy;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        var cur = new NodeLink(num);
        pre.next = cur;
        pre = cur;
    }
    return dummy.next;
};
exports.arrToLink = arrToLink;
var reverseLink = function (head) {
    if (!head || !head.next)
        return head;
    var p = (0, exports.reverseLink)(head.next);
    head.next.next = head;
    head.next = null;
    return p;
};
exports.reverseLink = reverseLink;
var reverseLinkIt = function (head) {
    var prev = null;
    var cur = head;
    if (!head)
        return head;
    while (cur) {
        var temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp;
    }
    return prev;
};
exports.reverseLinkIt = reverseLinkIt;
//# sourceMappingURL=reverse-link.js.map