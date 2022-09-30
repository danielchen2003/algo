var inorderSuccessor = function (root, p) {
  const stack = []
  let found = false
  let cur = root
  while (cur || stack.length) {
    while (cur) {
      stack.push(cur)
      cur = cur.left
    }
    cur = stack.pop()
    if (found) {
      break
    } else if (p === cur) {
      found = true
    }
    cur = cur.right
  }
  return cur
}

// var inorderSuccessor = function (root, p) {
//   const stack = []
//   stack.push(root)
//   let found =false
//   let node =root
//   while(node !==null && stack.length){
//     while()
//   }
// }

var inorderSuccessor = function (root, p) {
  const arr = []
  function inorder(node) {
    if (!node) return node
    inorder(node.left)
    arr.push(node)
    inorder(node.right)
  }
  inorder.push(root)
  arr.push(null)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === p) {
      return arr[i + 1]
    }
  }
}
