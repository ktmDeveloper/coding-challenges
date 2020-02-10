// https://leetcode.com/problems/delete-nodes-and-return-forest

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function (root, to_delete) {
  const res = [];

  // first travers all the way to button of the tree.
  // after on the way back to the top, check if that node is deleted or not
  // if deleted, and has left or right, and those left and right to result
  // else just return null
  const helper = (node) => {
    if (!node) return null;
    node.left = helper(node.left);
    node.right = helper(node.right);
    if (to_delete.includes(node.val)) {
      if (node.left) {
        res.push(node.left);
      }
      if (node.right) {
        res.push(node.right);
      }
      return null;
    }
    return node;
  };

  helper(root);

  // as we go to the top, we should as the same question to the root of the tree
  if (!to_delete.includes(root.val)) {
    res.push(root);
  }
  return res;
};
