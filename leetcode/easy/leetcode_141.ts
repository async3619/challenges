class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function fromArray(arr: number[], pos: number): ListNode {
    const nodes: ListNode[] = new Array(arr.length);
    for (let i = arr.length - 1; i >= 0; --i) {
        nodes[i] = new ListNode(arr[i]);
    }

    for (let i = 0; i < nodes.length; i++) {
        nodes[i].next = nodes[i + 1] || null;
    }

    nodes.at(-1).next = nodes[pos];
    return nodes[0];
}

function exec(node: ListNode | null): boolean {
    if (!node || !node.next) {
        return false;
    }

    let slow: ListNode | null = node;
    let fast: ListNode | null = node;

    while (!!fast && !!fast.next) {
        fast = fast.next.next;
        slow = slow.next;

        if (fast === slow) {
            return true;
        }
    }

    return false;
}

function hasCycle(head: number[] | null, pos: number): boolean {
    return exec(fromArray(head, pos));
}
