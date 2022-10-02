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

  while (slow !== fast) {
    slow = slow.next
    fast = fast.next
  }
  return slow
}

var detectCycle = function (head) {
  //先用快慢判断是否环形
  let fast = head
  let slow = head
  let iscycle = false
  while (fast !== null && fast.next !== null) {
    if (fast === slow) {
      iscycle = true
      break
    }
    fast = fast.next.next
    slow = slow.next
  }
  if (!iscycle) return null
  slow = head

  while (slow) {
    if (slow === fast) {
      return slow
    }

    slow = slow.next
    fast = fast.next
  }
  return slow
  //同时出发找rukou
}

var detectCycle = function (head) {
  if (!head || !head.next) return null
  let slow = head.next,
    fast = head.next.next
  while (fast && fast.next && fast !== slow) {
    slow = slow.next
    fast = fast.next.next
  }
  if (!fast || !fast.next) return null
  slow = head
  while (fast !== slow) {
    slow = slow.next
    fast = fast.next
  }
  return slow
}

var detectCycle = function (head) {
  if (!head || !head.next) return null
  let slow = head.next,
    fast = head.next.next
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (fast == slow) {
      slow = head
      while (fast !== slow) {
        slow = slow.next
        fast = fast.next
      }
      return slow
    }
  }
  return null
}
