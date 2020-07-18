/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */


/**
 * 给定一个链表，判断链表中是否有环。
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head:any) {
    if (!head) {
        return false;
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
    return true;
};