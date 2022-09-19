var widthOfBinaryTree = function (head) {
  if (!head) {
    return 0
  }
  const q = []
  q.push(head)
  const map = new Map()
  map.set(head, 1)
  let curLevel = 1 // 手动统计当前1层以后记录当前层数
  let curLevelWidth = 0
  // 手动初始化当前为0宽
  let max = 1
  while (q.length !== 0) {
    //可以说是bfs宽度搜索的travelsal 标准 格式yong queue
    let cur = q.shift()
    //! 第一层是手动输入过的head 和0  第8行
    let curNodeLevel = map.get(cur)
    //! 记录当前左边的节点的map
    if (cur.left !== null) {
      map.set(cur.left, curNodeLevel + 1)
      q.push(cur.left)
    }
    if (cur.right !== null) {
      map.set(cur.right, curNodeLevel + 1)
      q.push(cur.right)
    }
    if (curLevel == curNodeLevel) {
      curLevelWidth++
    } else {
      //?最后一层的时候呢 else 没有执行因为跳过了没有下一层了 最后手动补一次比大小

      curLevel++

      curLevelWidth = 1
    }
    max = Math.max(max, curLevelWidth)
  }
  max = Math.max(max, curLevelWidth)
  return max
}
