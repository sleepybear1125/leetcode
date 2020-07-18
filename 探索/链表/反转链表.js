/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head) {
        return head;
    }
    let cur = head.next;
    let pre = head;
    while(cur) {
        pre.next = cur.next
        cur.next = head;
        head = cur;
        cur = pre.next;
    }
    return head;
};