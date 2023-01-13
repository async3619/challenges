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

function seek(root: TreeNode, path: number[]) {
    if (root.left) {
        seek(root.left, path);
    }

    path.push(root.val);

    if (root.right) {
        seek(root.right, path);
    }
}

function exec(root: TreeNode | null): number[] {
    if (!root) {
        return [];
    }

    const path: number[] = [];
    seek(root, path);

    return path;
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

function inorderTraversal(root: number[] | null): number[] {
    if (!root) {
        return [];
    }

    return exec(fromArray(root));
}
