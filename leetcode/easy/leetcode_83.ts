class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let data = head;
    let pos = 0;
    while (data) {
        const val = data.val;
        let node = data.next;
        while (node) {
            if (node.val === val) {
                data.next = node.next;
            }

            node = node.next;
        }

        data = data.next;
        pos++;
    }

    return head;
}
