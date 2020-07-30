/*
 * @lc app=leetcode.cn id=24 lang=typescript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
    
function swapPairs(head: ListNode | null): ListNode | null {
    //解法1:时间复杂度O(n) 空间复杂度O(1)
    let cur = head;
    let preNode = new ListNode();
    let newHead = preNode;
    preNode.next = head;
    while(cur && cur.next) {
        const next = cur.next;
        cur.next = next.next;
        next.next = cur;
        preNode.next = next;

        preNode = cur;
        cur = cur.next;
    }
    return newHead.next;
};
// @lc code=end

