/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

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

function seek(root: TreeNode | null, depth = 0): number {
    if (!root) {
        return null;
    }

    if (!root.left && !root.right) {
        return depth + 1;
    }

    const leftDepth = seek(root.left, depth + 1);
    const rightDepth = seek(root.right, depth + 1);
    if (leftDepth === null) {
        return rightDepth;
    }

    if (rightDepth === null) {
        return leftDepth;
    }

    return Math.min(leftDepth, rightDepth);
}

function exec(root: TreeNode | null): number {
    return seek(root);
}

function minDepth(root: number[] | null): number {
    return exec(fromArray(root));
}
