class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

function fromArray(inputArray: number[]) {
    if (inputArray.length === 0) {
        return null;
    }

    const root = new TreeNode(inputArray.shift());
    const queue = [root];
    while (queue.length > 0 && inputArray.length > 0) {
        const curNode = queue.shift();
        const leftVal = inputArray.shift();
        const rightVal = inputArray.shift();

        if (leftVal) {
            curNode.left = new TreeNode(leftVal);
            queue.push(curNode.left);
        }
        if (rightVal) {
            curNode.right = new TreeNode(rightVal);
            queue.push(curNode.right);
        }
    }

    return root;
}

function exec(p: TreeNode | null, q: TreeNode | null): boolean {
    if (!p && !q) {
        return true;
    }

    if (!p || !q) {
        return false;
    }

    if (p.val !== q.val) {
        return false;
    }

    return exec(p.left, q.left) && exec(p.right, q.right);
}

function isSameTree(p: number[] | null, q: number[] | null): boolean {
    return exec(fromArray(p), fromArray(q));
}
