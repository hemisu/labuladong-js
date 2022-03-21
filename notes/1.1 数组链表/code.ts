export function intToRoman(num: number): string {
  const romaMap = [
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
  let res = ''
  const renderNUnit = (n, char) => Array(n).fill(char).join('')
  while (num) {
    for (let [_unit, char] of romaMap) {
      let unit = Number(_unit)
      if (num >= unit) {
        res += renderNUnit(Math.floor(num / unit), char)
        num -= Math.floor(num / unit) * unit
        break;
      }
    }
  }
  return res
};

class TreeNode {
  val = null;
  left = null;
  right = null;
  constructor(val) {
    this.val = val;
  }
}
export const createBinaryTree = (nums: number[], index = 0) => {
  if (index > nums.length) return null
  const root = new TreeNode(nums[index])
  root.left = createBinaryTree(nums, 2 * index + 1)
  root.right = createBinaryTree(nums, 2 * index + 2)
  return root
}