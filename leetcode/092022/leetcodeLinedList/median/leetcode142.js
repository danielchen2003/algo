function getLoopNode(head) {
  if (head == null || head.next == null || head.next.next == null) return null
  let slow = head.next
  let fast = head.next.next
  while (fast !== slow) {
    if (fast.next == null && fast.next.next == null) {
      return false
    }

    fast = fast.next.next
    slow = slow.next
  }
  fast = head
  while (fast !== slow) {
    fast = fast.next
    slow = slow.next
  }
  return slow
}

var detectCycle = function (head) {
  let fast = head
  let slow = head
  let isCycle = false

  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next

    if (fast === slow) {
      isCycle = true
      break
    }
  }

  if (!isCycle) {
    return null
  }

  // slow指针从head，fast节点从相遇节点开始向前移动，直到在入环节点处相遇
  slow = head

  while (slow) {
    if (slow === fast) {
      return slow
    }

    slow = slow.next
    fast = fast.next
  }
}
