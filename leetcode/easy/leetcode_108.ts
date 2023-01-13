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

function sortedArrayToBST(nums: number[]): TreeNode | null {
    if (nums.length === 0) {
        return null;
    }

    const midIndex = Math.floor(nums.length / 2);
    const rootVal = nums[midIndex];

    const left = nums.slice(0, midIndex);
    const right = nums.slice(midIndex + 1);

    return new TreeNode(rootVal, sortedArrayToBST(left), sortedArrayToBST(right));
}
