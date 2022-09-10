const reverseList = (head) => {
  let prev = null
  let curr = head
  while (curr !== null) {
    let nextTemp = curr.next
    curr.next = prev
    prev = curr
    curr = nextTemp
  }
  return prev
}

const endOfFirstHalf = (head) => {
  let fast = head
  let slow = head
  while (fast.next !== null && fast.next.next !== null) {
    fast = fast.next.next
    slow = slow.next
  }
  return slow
}

var isPalindrome = function (head) {
  if (head == null) return true

  // 找到前半部分链表的尾节点并反转后半部分链表
  const firstHalfEnd = endOfFirstHalf(head)
  const secondHalfStart = reverseList(firstHalfEnd.next)

  // 判断是否回文
  let p1 = head
  let p2 = secondHalfStart
  let result = true
  while (result && p2 != null) {
    if (p1.val != p2.val) result = false
    p1 = p1.next
    p2 = p2.next
  }

  // 还原链表并返回结果
  firstHalfEnd.next = reverseList(secondHalfStart)
  return result
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
