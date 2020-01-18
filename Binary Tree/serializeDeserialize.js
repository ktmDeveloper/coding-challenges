// https://leetcode.com/problems/serialize-and-deserialize-binary-tree/

const serialize = function (root) {
  let string = '';
  function recur(node) {
    if (node === null) {
      string += 'e '; // append 'e' for empty nodes
      return;
    }
    string += `${node.val} `;
    recur(node.left);
    recur(node.right);
  }

  recur(root);
  return string;
};

/* you get something like '1 2 e e 3 4 e e 5 e e ' for a tree that looks like this:
    1
   / \
  2   3
     / \
    4   5
*/

const deserialize = function (data) {
  const nodes = data.split(' ');

  function recur() {
    const curr = nodes.shift();
    if (curr == 'e') {
      return null;
    }
    const node = new TreeNode(Number(curr));
    node.left = recur();
    node.right = recur();
    return node;
  }

  return recur();
};
