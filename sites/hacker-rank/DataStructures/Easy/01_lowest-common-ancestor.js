// https://www.hackerrank.com/challenges/binary-search-tree-lowest-common-ancestor/problem
// HackerRank - [Data Structures - Trees] Lowest Common Ancestor

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function insert(root, data) {
    if (root === null) {
        return new Node(data);
    } else if (data < root.data) {
        root.left = insert(root.left, data);
    } else {
        root.right = insert(root.right, data);
    }
    return root;
}

function lca(root, v1, v2) {
    if (root === null) return null;
    
    if (v1 < root.data && v2 < root.data) {
        return lca(root.left, v1, v2);
    } else if (v1 > root.data && v2 > root.data) {
        return lca(root.right, v1, v2);
    } else {
        return root;
    }
}

// 트리 구성
const values = [4, 2, 3, 1, 7, 6];
let root = null;

for (let value of values) {
    root = insert(root, value);
}

// LCA 찾기
const v1 = 1;
const v2 = 7;
const ancestor = lca(root, v1, v2);

if (ancestor) {
    console.log(`Lowest Common Ancestor of ${v1} and ${v2} is: ${ancestor.data}`);
} else {
    console.log("No common ancestor found.");
}
