"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBinaryTree = exports.intToRoman = void 0;
function intToRoman(num) {
    var romaMap = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ];
    var res = '';
    var renderNUnit = function (n, char) { return Array(n).fill(char).join(''); };
    while (num) {
        for (var _i = 0, romaMap_1 = romaMap; _i < romaMap_1.length; _i++) {
            var _a = romaMap_1[_i], _unit = _a[0], char = _a[1];
            var unit = Number(_unit);
            if (num >= unit) {
                res += renderNUnit(Math.floor(num / unit), char);
                num -= Math.floor(num / unit) * unit;
                break;
            }
        }
    }
    return res;
}
exports.intToRoman = intToRoman;
;
var TreeNode = /** @class */ (function () {
    function TreeNode(val) {
        this.val = null;
        this.left = null;
        this.right = null;
        this.val = val;
    }
    return TreeNode;
}());
var createBinaryTree = function (nums, index) {
    if (index === void 0) { index = 0; }
    if (index > nums.length)
        return null;
    var root = new TreeNode(nums[index]);
    root.left = (0, exports.createBinaryTree)(nums, 2 * index + 1);
    root.right = (0, exports.createBinaryTree)(nums, 2 * index + 2);
    return root;
};
exports.createBinaryTree = createBinaryTree;
//# sourceMappingURL=code.js.map