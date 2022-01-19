"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveZeroes = exports.removeElement = exports.deleteDuplicates = exports.arrToLink = exports.removeDuplicates = void 0;
function removeDuplicates(nums) {
    if (nums.length === 0)
        return 0;
    var slow = 0, fast = 0;
    while (fast < nums.length) {
        if (nums[fast] !== nums[slow]) {
            nums[++slow] = nums[fast];
        }
        fast++;
    }
    return slow + 1;
}
exports.removeDuplicates = removeDuplicates;
;
/**
 * Definition for singly-linked list.
 */
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
var arrToLink = function (arr) {
    var dummy = new ListNode(), p = dummy;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var n = arr_1[_i];
        p.next = new ListNode(n);
        p = p.next;
    }
    return dummy.next;
};
exports.arrToLink = arrToLink;
function deleteDuplicates(head) {
    if (!head)
        return head;
    var slow = head, fast = head;
    while (fast) {
        if (slow.val !== fast.val) {
            slow.next = fast;
            slow = slow.next;
        }
        fast = fast.next;
    }
    slow.next = null;
    return head;
}
exports.deleteDuplicates = deleteDuplicates;
;
function removeElement(nums, val) {
    var slow = 0, fast = 0;
    while (fast < nums.length) {
        if (nums[fast] !== val) {
            nums[slow] = nums[fast];
            slow++;
        }
        fast++;
    }
    return slow;
}
exports.removeElement = removeElement;
;
function moveZeroes(nums) {
    var slow = 0, fast = 0;
    while (fast < nums.length) {
        if (nums[fast] !== 0) {
            nums[slow] = nums[fast];
            slow++;
        }
        fast++;
    }
    for (var i = slow; i < nums.length; i++) {
        nums[i] = 0;
    }
}
exports.moveZeroes = moveZeroes;
;
//# sourceMappingURL=modify-arr.js.map