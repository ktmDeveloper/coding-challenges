/* 
    InOrder traversal of Binary Tree
*/

const inOrderTraversal = function (root) {
    if (!root || root.length === 0) {
        return [];
    }
    let res = [];
    let stack = []; //consider array as stack
    let curr = root;
    while (curr || stack.length) {
        while (curr) { //first traverse all the way down to left leaf of the tree
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop(); //now take the top item of the stack
        res.push(curr.val); //this is where the work is done. here we just add it to our result array
        curr = curr.right; //then we go to the right side of the tree
    }
    return res;
}

/*
https://leetcode.com/problems/kth-smallest-element-in-a-bst/
The inorder traveral returns ascending order list in BST
*/
const inOrderTraversal = function (root, k) {
    if (!root || root.length === 0) {
        return [];
    }
    let stack = []; //consider array as stack
    let curr = root;
    while (curr || stack.length) {
        while (curr) { //first traverse all the way down to left leaf of the tree
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop(); //now take the top item of the stack
        k--;
        if (k === 0) break; //this is where the work is done. We break out of the loop if k is 0;
        curr = curr.right; //then we go to the right side of the tree
    }
    return curr.val;
}

/*
https://leetcode.com/problems/validate-binary-search-tree/
Validate Binary Search Tree
*/
const inOrderTraversal = function (root) {
    if (!root || root.length === 0) {
        return true;
    }
    let pre = null;
    let stack = []; //consider array as stack
    let curr = root;
    while (curr || stack.length) {
        while (curr) { //first traverse all the way down to left leaf of the tree
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop(); //now take the top item of the stack

        if (pre && pre.val >= curr.val) {//this is where the work is done. We check if previous val is greater than current val.
            return false;
        }
        pre = curr;

        curr = curr.right; //then we go to the right side of the tree
    }
    return true
}
