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


// 解法2: 遍历+哈希,时间复杂度O(NK) 空间复杂度O(NK)，N为strs数组的长度，K为strs数组中字符串的最大长度
function groupAnagrams1(strs: string[]): string[][] {
  let dict = new Map<string, Array<string>>();
  let startCode = 'a'.charCodeAt(0);
  strs.forEach((v)=>{
      let arr = Array(26).fill(0);
      for(let j = 0; j < v.length; j++) {
          arr[v.charCodeAt(j) - startCode]++;
      } 
      const hashKey = arr.join();
      if (dict.has(hashKey)) {
          const temp = dict.get(hashKey);
          temp && temp.push(v);
      } else {
          dict.set(hashKey, [v]);
      }
  })
  return [...dict.values()];
}

// @lc code=end

