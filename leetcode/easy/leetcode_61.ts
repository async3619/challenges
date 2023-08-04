class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function toNode(arr: number[]): ListNode {
    const first = new ListNode(arr[0]);
    let result = first;
    for (let i = 1; i < arr.length; ++i) {
        result.next = new ListNode(arr[i]);
        result = result.next;
    }

    return first;
}

function toArray(node: ListNode): number[] {
    const result: number[] = [];
    while (true) {
        result.push(node.val);
        node = node.next;

        if (!node) {
            break;
        }
    }

    return result;
}

function findLast(node: ListNode): [ListNode | null, ListNode] {
    let previous: ListNode | null = null;
    let current = node;

    while (true) {
        if (!current.next) {
            break;
        }

        previous = current;
        current = current.next;
    }

    return [previous, current];
}

function getLength(node: ListNode | null): number {
    if (!node) {
        return 0;
    }

    let value = 0;
    while (true) {
        if (!node) {
            break;
        }

        node = node.next;
        value++;
    }

    return value;
}

function solution(node: ListNode | null, k: number): ListNode {
    if (!node) {
        return node;
    }

    const length = getLength(node);
    k = k >= length ? k % length : k;

    let head = node;
    for (let i = 0; i < k; ++i) {
        const [previous, last] = findLast(head);
        if (previous) {
            previous.next = null;
            last.next = head;
            head = last;
        }
    }

    return head;
}

function rotateRight(head: number[], k: number): number[] {
    const node = toNode(head);
    const result = toArray(solution(node, k));

    return result;
}
