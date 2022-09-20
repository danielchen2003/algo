var connect = function (root) {
  let q = []
  q.push(root)
  let res = []
  while (q.length !== 0) {
    let len = q.length
    let inner = []
    for (let i = 0; i < len; i++) {
      let node = q.shift()
      node.next = q[0]

      node.left && q.push(node.left)
      node.right && q.push(node.right)
    }
    inner.push("#")
    res.push(inner)
  }
  return res
}

var connect = function (root) {
  let q = []
  q.push(root)
  let res = []
  while (q.length !== 0) {
    let len = q.length
    let inner = []
    for (let i = 0; i < len; i++) {
      let node = q.shift()
      if (i < len - 1) node.next = q[0]
    }
  }
  return root
}
