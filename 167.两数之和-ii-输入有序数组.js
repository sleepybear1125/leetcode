/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * 暴力法
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const l = numbers.length;
    for (let i = 0; i < l; i++) {
        const v1 = numbers[i];
        if (v1 > target) {
            break;
        }
        for (let j = i+1; j < l; j++) {
            const v2 = numbers[j];
            const sum = v1 + v2;
            if (sum > target) {
                break;
            }
            if (sum < target) {
                continue;
            }
            return [i+1, j+1];
        }
    }
    return [];
};
// @lc code=end

