/*
 * @lc app=leetcode.cn id=42 lang=typescript
 *
 * [42] 接雨水
 */

// @lc code=start
function trap(height: number[]): number {
    let area = 0;
    let stack:number[] = [];
    for (let i = 0; i < height.length; i++)
    {
        while (stack.length > 0 && height[stack[stack.length - 1]] < height[i])
        {
            let cur = stack.pop();
            if (!cur || stack.length <= 0) break;
            let l = stack[stack.length - 1];
            let r = i;
            let h = Math.min(height[r], height[l]) - height[cur];
            area += (r - l - 1) * h;
        }
        stack.push(i);
    }
    return area;
};
// @lc code=end

