var isSameTree = function(p, q) {
    if (!p && !q) {
    return true;
  }
  // if one of the nodes is null, they are not the same
  if (!p || !q) {
    return false;
  }
  // if nodes have different values, they are not the same
  if (p.val !== q.val) {
    return false;
  }
  // recursively compare left and right subtrees
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
