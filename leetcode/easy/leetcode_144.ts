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

function seek(node: TreeNode | null, arr: number[]) {
    if (!node) {
        return;
    }

    arr.push(node.val);

    if (node.left) {
        seek(node.left, arr);
    }

    if (node.right) {
        seek(node.right, arr);
    }
}

function exec(node: TreeNode | null): number[] {
    const ret: number[] = [];
    seek(node, ret);

    return ret;
}

function preorderTraversal(root: number[] | null): number[] {
    return exec(fromArray(root));
}
