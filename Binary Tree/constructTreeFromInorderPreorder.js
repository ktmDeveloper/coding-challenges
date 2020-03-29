// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/* Explanation:
 * The first element in the preorder is the root;
 * Everything on the left of root in inorder is the left subtree and vice-versa.
 * Recursively use above step to build tree
 */
var buildTree = function (preorder, inorder) {
  // if no array then return null. Leaf of the tree
  if (preorder.length === 0 || inorder.length == 0) return null;
  const root = new TreeNode(preorder.shift());
  // use index to splice the inorder to get the left and right side from the root
  const idxOfRoot = inorder.indexOf(root.val);
  root.left = buildTree(preorder, inorder.slice(0, idxOfRoot));
  root.right = buildTree(preorder, inorder.slice(idxOfRoot + 1));
  return root;
};
