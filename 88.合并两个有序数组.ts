/*
 * @lc app=leetcode.cn id=88 lang=typescript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    for (let i = 0; i < nums2.length; i++) {
        nums1[m + i] = nums2[i];
    }
    nums1.sort((l, r)=>{
        return l - r;
    })
};
// @lc code=end

