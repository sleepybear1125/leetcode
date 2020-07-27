/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n: number): number {
  /*
  //普通递归(超时)
  //优化版本2:把中间值缓存，只计算一遍 时间复杂度:O(2^n) 空间复杂度:O(1)
  if (n <= 2) {
    return n;
  }
  return climbStairs(n-1) + climbStairs(n-2);
  */

  /*
  //优化版本2:优化时间复杂度 把中间值缓存，只计算一遍 时间复杂度:O(n) 空间复杂度:O(n)
  const dp = [];
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n ; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
  */
  
  // /*
  //优化版本3:优化空间复杂度 时间复杂度:O(n) 空间复杂度:O(1)
  let v0 = 1;
  let v1 = 1;
  let sum = 1;
  for (let i = 2; i <= n ; i++) {
    sum = v1 + v0;
    v0 = v1;
    v1 = sum;
  }
  return sum;
  // */

  //TODO:优化版本4:优化时间复杂度 时间复杂度:O(logn) 空间复杂度:O(1)
};
// @lc code=end

