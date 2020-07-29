/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
function maxArea(height: number[]): number {
  /*
  //解法1:暴力循环 时间复杂度O(n^2) 空间复杂度O(1)
  const l = height.length;
  let area = 0;
  for (let i = 0; i < l - 1; i++) {
    for (let j = i + 1; j < l; j++) {
      area = Math.max(area, Math.min(height[j], height[i]) * (j - i));
    }
  }
  return area;
  // */

  //解法2:双指针 左右边界,中间收敛 时间复杂度O(n) 空间复杂度O(1)
  const l = height.length;
  let area = 0;
  for (let i = 0, j = l - 1; i < j; ) {
    const width = j - i;
    let maxHeight = height[i] < height[j] ? height[i++] : height[j--] ;
    area = Math.max(area, maxHeight * width);
  }
  return area;
};
// @lc code=end

