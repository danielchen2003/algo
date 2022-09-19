function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

var sortedArrayToBST = function (nums) {
  // base case
  if (!nums.length) return null

  // 左树，右树
  //中间节点 作为head
  let middle = Math.floor(nums.length / 2)
  let root = new TreeNode(nums[middle])
  root.left = sortedArrayToBST(nums.slice(0, middle))
  root.right = sortedArrayToBST(nums.slice(middle))
  return root
}

var sortedArrayToBST = function (nums) {
  // 因为涉及到递归，所以必然会有数组为空的情况
  if (!nums.length) {
    return null
  }

  // 找到序列中点：
  const headIndex = Math.floor(nums.length / 2)

  // 实例化节点头部
  const head = new TreeNode(nums[headIndex])
  let temp = head
  let left = headIndex - 1
  let right = headIndex + 1
  // 因为是有序升序列表，则当前头部索引的左侧应该都在树的左子树，同理右子树
  if (left >= 0) {
    // 左侧有节点，对左侧节点递归，形成左子树
    head.left = sortedArrayToBST(nums.slice(0, headIndex))
  }
  if (right < nums.length) {
    // 右侧有节点，对右侧节点递归，形成右子树
    head.right = sortedArrayToBST(nums.slice(right))
  }
  // 返回节点
  return head
}

const tree = sortedArrayToBST([1, 2, 3, 4])

var indent = 1
function walk(tree) {
  tree.forEach(function (node) {
    console.log("--" + Array(indent).join("--"), node.key)
    if (node.children) {
      indent++
      walk(node.children)
    }
    if (tree.indexOf(node) === tree.length - 1) {
      indent--
    }
  })
}
console.log(walk(tree))

const sortedListToBST = (head) => {
  if (head == null) return null
  let len = 0
  let h = head // h初始指向头结点
  while (head) {
    // 计算链表节点个数
    len++
    head = head.next
  }

  const buildBST = (start, end) => {
    if (start > end) return null // 递归出口，返回null节点
    const mid = (start + end) >>> 1 // 求mid，只是为了分治，不是用它断开链表
    const left = buildBST(start, mid - 1) // 先递归构建左子树

    const root = new TreeNode(h.val) // 根据 h.val 构建节点
    h = h.next // h指针步进
    root.left = left // root接上构建好的左子树

    root.right = buildBST(mid + 1, end) // 构建当前root的右子树，接上
    return root
  }

  return buildBST(0, len - 1)
}
