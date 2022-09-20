function invertTree(root) {
  if (root == null) {
    return null
  }
  //将二叉树中的节点逐层放入队列中，再迭代处理队列中的元素
  let queue = []
  queue.add(root)
  while (!queue.isEmpty()) {
    //每次都从队列中拿一个节点，并交换这个节点的左右子树
    let node = queue.pop()
    let temp = node.left
    node.left = node.right
    node.right = temp
    //如果当前节点的左子树不为空，则放入队列等待后续处理
    if (node.left != null) {
      queue.push(node.left)
    }
    //如果当前节点的右子树不为空，则放入队列等待后续处理
    if (node.right != null) {
      queue.push(node.right)
    }
  }
  //返回处理完的根节点
  return root
}
