/*
 * @lc app=leetcode.cn id=242 lang=typescript
 *
 * [242] 有效的字母异位词
 * 时间复杂度O(n),空间复杂度O(n)
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  if (s.length != t.length) {
    return false;
  }
  let dict:{ [num:string]: number } = {};
  const l = s.length;
  for (let i = 0; i < l; i++) {
    const plusKey = s[i];
    const minusKey = t[i];
    if (plusKey == minusKey) {
      continue;
    }
    if (!dict[plusKey]) {
      dict[plusKey] = 0;
    }
    dict[plusKey]++;
    if (!dict[minusKey]) {
      dict[minusKey] = 0;
    }
    dict[minusKey]--;
  }
  for (let key in dict) {
    if (dict[key] != 0) {
      return false;    
    }
  }
  return true;
};
// @lc code=end

