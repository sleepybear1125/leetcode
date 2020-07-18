/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
 

/**
 * 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head:any) {
    if (!head) {
        return null;
    }
    let fast = head;
    let slow = head;
    while(true) {
        if (fast == null || fast.next == null) {
            return null;
        }
        fast = fast.next.next;
        slow = slow.next;
        if (fast == slow) {
            break;
        }
    }
    fast = head;
    while(fast != slow) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
};