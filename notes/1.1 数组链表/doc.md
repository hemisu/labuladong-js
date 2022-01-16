# 前缀和数组
## leetcode
- [1109. 航班预订统计](https://leetcode-cn.com/problems/corporate-flight-bookings/)
- [1094. 拼车](https://leetcode-cn.com/problems/car-pooling/)

> 前缀和主要适用的场景是原始数组不会被修改的情况下，频繁查询某个区间的累加和

核心代码 [command + click跳转](./code.ts#L3) [点击运行](./code.test.js#L1) 

<img src=./assets/presum.png width=300 style="display: block;" />

# 差分数组
## leetcode
- [370. 区间加法](https://leetcode-cn.com/problems/range-addition/)
- [1109. 航班预订统计](https://leetcode-cn.com/problems/corporate-flight-bookings/)
- [1094. 拼车](https://leetcode-cn.com/problems/car-pooling/)
- 
> 差分数组主要适用场景是频繁对原始数据的某个区间的元素进行删除

核心代码 [command + click跳转](code.ts#L14) [点击运行](./code.test.js#L11) 

<img src=./assets/difference.png width=300 style="display: block;" />

# 双指针-滑动窗口
## leetcode

- [76. 最小覆盖子串](https://leetcode-cn.com/problems/minimum-window-substring/)
- [567. 字符串的排列](https://leetcode-cn.com/problems/permutation-in-string/)
- [438. 找到字符串中所有字母异位词](https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/)
- [3. 无重复字符的最长子串](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)
- [870. 优势洗牌](https://leetcode-cn.com/problems/advantage-shuffle/)

滑动窗口算法的思路：
以 76 最小覆盖子串为例
1. 在字符串S上使用双指针初始化 `left` = `right` = 0, [`left`, `right`) 称为一个窗口
2. 先不断扩大 `right` 直到窗口内的内容符合要求（ 窗口包含所有的S ）
3. 停止增加 `right` ，不断增加left减小窗口，直至窗口内不再符合要求
4. 重复 2. 3. 直到 `right` 达到字符串S的尽头
   
最长不重复子串：
1. 拓展窗口，判断左侧是否要收缩的条件变为 `window[c] > 1`
2. `res = max(res, right - left);` 更新答案

## 二分搜索

- [704. 二分查找](https://leetcode-cn.com/problems/binary-search/)
- [34. 在排序数组中查找元素的第一个和最后一个位置](https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/)
- [875. 爱吃香蕉的珂珂](https://leetcode-cn.com/problems/koko-eating-bananas/)
- [1011. 在 D 天内送达包裹的能力](https://leetcode-cn.com/problems/capacity-to-ship-packages-within-d-days/submissions/)

## 修改数组
- [26. 删除有序数组中的重复项](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/)
- [83. 删除排序链表中的重复元素](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/)
- [27. 移除元素](https://leetcode-cn.com/problems/remove-element/)
- [283. 移动零](https://leetcode-cn.com/problems/move-zeroes/)

# 链表-反转链表
