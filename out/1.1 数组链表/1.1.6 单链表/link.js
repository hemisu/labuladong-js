"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.L19RemoveNthFromEnd = exports.mergeKLists = exports.L21_1 = exports.L21 = exports.printList = exports.createList = void 0;
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
// export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
// };
var createList = function (arr) {
    var dummy = new ListNode(), p = dummy;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var node = arr_1[_i];
        p.next = new ListNode(node);
        p = p.next;
    }
    return dummy.next;
};
exports.createList = createList;
var printList = function (head) {
    var res = [];
    var p = head;
    while (p) {
        res.push(p.val);
        p = p.next;
    }
    return res;
};
exports.printList = printList;
function L21(list1, list2) {
    var p1 = list1;
    var p2 = list2;
    var dummy = new ListNode(), p = dummy;
    while (p1 && p2) {
        if (p1.val <= p2.val) {
            p.next = new ListNode(p1.val);
            p1 = p1.next;
        }
        else {
            p.next = new ListNode(p2.val);
            p2 = p2.next;
        }
        p = p.next;
    }
    if (p1) {
        p.next = p1;
    }
    if (p2) {
        p.next = p2;
    }
    return dummy.next;
}
exports.L21 = L21;
;
function L21_1(list1, list2) {
    if (!list1)
        return list2;
    if (!list2)
        return list1;
    if (list1.val < list2.val) {
        list1.next = L21_1(list1.next, list2);
        return list1;
    }
    else {
        list2.next = L21_1(list1, list2.next);
        return list2;
    }
}
exports.L21_1 = L21_1;
;
var merge2List = function (l1, l2) {
    if (!l1)
        return l2;
    if (!l2)
        return l1;
    if (l1.val < l2.val) {
        l1.next = merge2List(l1.next, l2);
        return l1;
    }
    else {
        l2.next = merge2List(l1, l2.next);
        return l2;
    }
};
// 通俗易懂 不搞什么优先队列 小根堆
function mergeKLists(lists) {
    var res = new ListNode(-1);
    if (!lists.length)
        return null;
    for (var _i = 0, lists_1 = lists; _i < lists_1.length; _i++) {
        var p = lists_1[_i];
        res.next = merge2List(res.next, p);
    }
    return res.next;
}
exports.mergeKLists = mergeKLists;
;
function L19RemoveNthFromEnd(head, n) {
    var dummy = new ListNode(), p1 = dummy, p2 = dummy, pre = null;
    dummy.next = head;
    while (n--) {
        p1 = p1.next;
    }
    while (p1) {
        p1 = p1.next;
        pre = p2;
        p2 = p2.next;
    }
    pre.next = p2.next;
    return dummy.next;
}
exports.L19RemoveNthFromEnd = L19RemoveNthFromEnd;
;
//# sourceMappingURL=link.js.map