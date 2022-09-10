var isPalindrome = function (head) {
  let seen = []
  let cur_node = head
  while (head) {
    seen.push(head.val)
    head = head.next
  }

  const len = seen.length
  for (let i = 0, j = len - 1; i < j; i++, j--) {
    if (seen[i] !== seen[j]) {
      return false
    }
  }
  return true
}

function reverse(head) {
  let node = head
  let pre = null
  while (node !== null) {
    const next = node.next
    node.next = pre
    pre = node
    node = next
  }
  return pre
}

var isPalindrome = function (head) {
  let fast = head
  let slow = head
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }
  //翻转列表
  slow = reverse(slow)
  fast = head
  while (fast) {
    if (slow.val !== fast.val) {
      return false
    }
    slow = slow.next
    fast = fast.next
  }
  return true
}

var isPalindrome = function (head) {
  if (head === null || head.next == null) return true
  let slow = head
  let fast = head

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next
    slow = slow.next
  }
  // if list length is odd, move slow over one to start
  // the second half of the list
  if (fast) {
    slow = slow.next
  }

  // reverse the second half of the list
  slow = reverse(slow)
  fast = head

  // check for palindromicity
  while (slow) {
    if (slow.val !== fast.val) {
      return false
    }
    slow = slow.next
    fast = fast.next
  }
  return true
}

function reverse(head) {
  let prev = null
  let next
  while (head) {
    next = head.next
    head.next = prev
    prev = head
    head = next
  }
  return prev
}
