//! https://leetcode.cn/problems/linked-list-cycle/solution/yi-wen-gao-ding-chang-jian-de-lian-biao-wen-ti-h-2/

var hasCycle = function (head) {
  if (head === null) return false
  let node = head
  let fastnode = head.next
  while (fastnode !== null && fastnode.next !== null) {
    if (node.next === fastnode.next.next) {
      return true
    }
    node = node.next
    fastnode = fastnode.next.next
  }
  return false
}

var hasCycle = function (head) {
  let fast = head
  let slow = head
  while (fast) {
    if (!fast.next) return false
    if (fast.next.next == slow.next) {
      return true
    }
    fast = fast.next.next
    slow = slow.next
  }
  return false
}

var hasCycle = function (head) {
  if (!head) return false
  let fast = head.next
  let slow = head
  while (fast !== slow) {
    if (fast == null || fast.next == null) {
      return false
    }
    fast = fast.next.next
    slow = slow.next
  }
  return true
}
