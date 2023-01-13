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

function calcDepth(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }

    const leftHeight = calcDepth(root.left);
    const rightHight = calcDepth(root.right);
    if (leftHeight == -1 || rightHight == -1) {
        return -1;
    }

    if (Math.abs(leftHeight - rightHight) > 1) {
        return -1;
    }

    return Math.max(leftHeight, rightHight) + 1;
}

function exec(root: TreeNode | null): boolean {
    if (!root) {
        return true;
    }

    return calcDepth(root) != -1;
}

function isBalanced(root: number[]): boolean {
    return exec(fromArray(root));
}
