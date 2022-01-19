"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrefixSum = void 0;
var PrefixSum = /** @class */ (function () {
    function PrefixSum(nums) {
        this.prefix = new Array(nums.length + 1).fill(0);
        for (var i = 1; i < this.prefix.length; i++) {
            this.prefix[i] = this.prefix[i - 1] + nums[i - 1];
        }
    }
    PrefixSum.prototype.query = function (i, j) {
        return this, this.prefix[j + 1] - this.prefix[i];
    };
    return PrefixSum;
}());
exports.PrefixSum = PrefixSum;
//# sourceMappingURL=PrefixSum.js.map