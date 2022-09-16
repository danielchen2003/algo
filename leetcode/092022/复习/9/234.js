var isPalindrome = function (head) {
  let slow = head
  let fast = head
  //find the middle point
  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }

  slow = reverse(slow)
  fast = head
  while (slow !== null) {
    if (fast.val !== slow.val) return false
    fast = fast.next
    slow = slow.next
  }
  return true
}

// function reverse(head) {
//   let node = head
//   let pre = null
//   while (node !== null) {
//     const next = node.next
//     node.next = pre
//     pre = node
//     node = next
//   }
//   return pre
// }

function reverse(head) {
  let prev = null
  let cur = head
  while (cur !== null) {
    let next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  return prev
}
