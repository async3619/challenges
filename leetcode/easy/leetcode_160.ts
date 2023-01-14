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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let ln = headA;
    let rn = headB;

    while (ln !== rn) {
        ln = ln === null ? headB : ln.next;
        rn = rn === null ? headA : rn.next;
    }

    return ln;
}
