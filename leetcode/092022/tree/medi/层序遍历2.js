var levelOrder = function (head) {
  let res = []
  if (!head) return res
  let queue = []
  queue.push(head)

  while (queue.length !== 0) {
    let level = q.length

    let inner = []
    for (let i = 0; i < level; i++) {
      let head = queue.shift()
      inner.push(p.val)
      if (head.left) queue.push(head.left)
      if (head.right) queue.push(head.right)
    }
    res.push(inner)
  }
  return res
}

var levelOrder = function (root) {
  if (!root) return []
  let res = []
  res.push(root)
  let queue = []
  while (queue.length !== 0) {
    let levelSize = queue.length
    let inner = []
    for (let i = 0; i < levelSize; i++) {
      let cur = queue.shift()
      inner.push(cur.val)
      if (cur.left) queue.push(cur.left)
      if (cur.right) queue.push(cur.right)
    }
    res.push(inner)
  }
  return res
}

var levelOrder = function (head) {
  let res = []
  if (!head) return res
  const q = []
  q.push(head)
  while (q.length !== 0) {
    let level = q.length
    let curLevel = []
    for (let i = 0; i < level; i++) {
      let p = q.shift()
      curLevel.push(p.val)
      if (p.left !== null) {
        q.push(p.left)
      }
      if (p.right !== null) {
        q.push(p.right)
      }
    }

    res.push(curLevel)
  }
  return res
}
