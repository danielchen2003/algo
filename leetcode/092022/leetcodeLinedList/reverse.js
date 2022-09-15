var reverseList = function (head) {
  if (!head) return null

  let next = reverseList(head.next)
  head.next.next = head
  head.next = null
  return next
}
