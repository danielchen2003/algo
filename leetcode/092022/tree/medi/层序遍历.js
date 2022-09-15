var levelOrder = function (root) {
  const ret = []
  if (!root) {
    return ret
  }

  const q = []
  q.push(root)
  while (q.length !== 0) {
    const currentLevelSize = q.length
    ret.push([])
    for (let i = 1; i <= currentLevelSize; ++i) {
      const node = q.shift()
      ret[ret.length - 1].push(node.val)
      if (node.left) q.push(node.left)
      if (node.right) q.push(node.right)
    }
  }

  return ret
}

var levelOrder = function (root) {
  let res = []
  if (!root) return res

  const q = []
  q.push(root)
  while (q.length !== 0) {
    const currentlevelSize = q.length
    res.push([])
    for (let i = 1; i < currentlevelSize; ++i) {
      const node = q.shift()
      res[res.length - 1].push(node.val)
      if (node.left) q.push(node.left)
      if (node.right) q.push(node.right)
    }
  }
  return res
}

var levelOrder = function (head) {
  let res = []
  if (!head) return res
  const q = []
  q.push(head)
  while (q.length === 0) {
    const cur = q.pop()
    res.push(cur.val)
    if (cur.left !== null) {
      q.push(cur.left)
    }
    if (cur.right !== null) {
      q.push(cur.right)
    }
  }
  return res
}

//https://leetcode.cn/problems/binary-tree-level-order-traversal/solution/er-cha-shu-ceng-xu-bian-li-deng-chang-wo-yao-da-sh/

var levelOrder = function (root) {
  let res = []
  if (root === null) return res
  let list = []
  list.push(root)
  while (list.length) {
    let curLen = list.length //上一轮剩下的节点，全属于下一层
    let newLevel = []
    for (let i = 0; i < curLen; i++) {
      //同层所有节点
      let node = list.shift() //出列
      newLevel.push(node.val) //push进newLevel数组
      //左右子节点push进队列
      if (node.left) list.push(node.left)
      if (node.right) list.push(node.right)
    }
    res.push(newLevel) //push到res数组
  }
  return res
}

var levelOrder = function (root) {
  const ret = []
  if (!root) {
    return ret
  }

  const q = []
  q.push(root)
  while (q.length !== 0) {
    const currentLevelSize = q.length
    ret.push([])
    for (let i = 1; i <= currentLevelSize; ++i) {
      const node = q.shift()
      ret[ret.length - 1].push(node.val)
      if (node.left) q.push(node.left)
      if (node.right) q.push(node.right)
    }
  }

  return ret
}

var levelOrder = function (root) {
  const res = []
  let q = []
  if (!root) {
    return res
  }
  q.push(root)

  while (q.length !== 0) {
    const inner = []
    const curlength = q.length
    for (let i = 1; i <= curlength; ++i) {
      let node = q.shift()
      if (node.left !== null) {
        q.push(node.left)
      }
      if (node.right !== null) {
        q.push(node.right)
      }
      inner.push(node.val)
    }
    res.push(inner)
  }
  return res
}
