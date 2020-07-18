/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function(head, n) {
    if (!head) {
        return null;
    }
    let pre = head;
    let i = 1;
    while(i < n) {
        if (!pre) {
            return head;
        }
        pre = pre.next;
        i++;
    }
    let cur = null;
    while(pre.next) {
        if (!cur) {
            cur = head;
        } else {
            cur = cur.next;
        }
        pre = pre.next;
    }
    if (!cur) {
        head = head.next;
        return head;
    }
    const deleteNode = cur.next;
    if (!deleteNode) {
        return head;
    }
    cur.next = deleteNode.next;
    return head;
};