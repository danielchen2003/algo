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

var sortedListToBST = function (head) {
  //找到终点
  //helper function
  //逆转前半部分
  let node = head
  let arr = []
  while (node !== null) {
    arr.push(node.val)
    node = node.next
  }
  function helper(arr) {
    if (!arr.length) return null
    let headIndex = Math.floor(arr.length / 2)
    let head = new TreeNode(arr[headIndex])
    let right = headIndex + 1
    head.left = helper(arr.slice(0, headIndex))
    head.right = helper(arr.slice(right))
    return head
  }
  let root = helper(arr)
  return root
}
