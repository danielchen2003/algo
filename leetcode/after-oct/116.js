var connect = function (root) {
  let q = [root]
  while (q.length !== 0) {
    let size = q.length
    while (size--) {
      let cur = q.pop()

      if (size !== size - 1) {
        cur.next = q[0]
      }

      cur.left && q.push(cur.left)
      cur.right && q.push(cur.right)
    }
  }
}
