/*
 * @lc app=leetcode.cn id=104 lang=typescript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

function maxDepth(root: TreeNode | null): number {
  /*
  //解法1:Deep First Search(DFS)深度优先搜索,递归,时间复杂度O(n)每个都会节点遍历一次,空间复杂度O(h) h为二叉树的高度
  if (!root) {
    return 0;
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
  */

  //解法2:Breadth First Search(BFS)广度优先搜索,时间复杂度O(n)每个都会节点遍历一次, 空间复杂度O(n)
  if (!root) {
    return 0;
  }
  let list = [root];
  let depth:number = 0;
  while(list.length > 0) {
    let len = list.length;
    while(len > 0) {
      const node = list.shift();
      if (node && node.left) {
          list.push(node.left);
      }
      if (node && node.right) {
          list.push(node.right);
      }
      len--;
    }
    depth++;
  }
  return depth;
};
// @lc code=end

