 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const res = [];
  inorderTraversalHelper(root, res);
  return res;
}

// Helper function to perform inorder traversal of binary tree
function inorderTraversalHelper(root, res) {
  if (root === null) {
    return;
  }
  inorderTraversalHelper(root.left, res);
  res.push(root.val);
  inorderTraversalHelper(root.right, res);
};
