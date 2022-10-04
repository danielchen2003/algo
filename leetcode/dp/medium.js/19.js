var removeNthFromEnd = function (head, n) {
  let fast = head.next
  let slow = head
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next
    slow = slow.next
  }
}

var removeNthFromEnd = function (head, n) {
  let fast = head.next
  let slow = head
  while (n >= 0) {
    fast = fast.next
    n--
  }
}
