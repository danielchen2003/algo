var middleNode = function (head) {
  if (head === null || head.next === null) return head
  let slow = head.next
  let fast = head
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next
    slow = slow.next
  }
  return slow
}
