/*
 * @lc app=leetcode.cn id=49 lang=typescript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
  // 解法1: 遍历+sort,时间复杂度O(NKlogK) 空间复杂度O(NK)，N为strs数组的长度，K为strs数组中字符串的最大长度
  let dict: {[str:string]: Array<string>} = {};
  strs.forEach((v) => {
    let str = strSplitAndSort(v);
    if (!dict[str]) {
      dict[str] = [v];
    } else {
      dict[str].push(v);
    }
  });
  let result = [];
  for (let key in dict) {
    result.push(dict[key]);
  }
  return result;
};

function strSplitAndSort(str:string): string {
  const arr = str.split('');
  arr.sort();//O(nlogn)
  return arr.join('');
}
// @lc code=end

