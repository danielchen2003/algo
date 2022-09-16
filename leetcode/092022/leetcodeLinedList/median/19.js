var removeNthFromEnd = function (head, n) {
  let node = head
  for (let i = n - 1; i >= 0; i--) {
    node = node.next
  }
  node.next = node.next.next
  return head
}

var removeNthFromEnd = function (head, n) {
  if (!head) return head
  let slow = head
  let fast = head
  for (let i = 0; i < n; i++) {
    fast = fast.next
  }
  while (fast.next !== null) {
    fast = fast.next
    slow = slow.next
  }
  if (slow !== null && slow.next !== null) {
    slow.next = slow.next.next
  } else {
    slow.next = null
  }

  return head
}

var removeNthFromEnd = function (head, n) {
  //  if(!head ) return head
  let dummy = new ListNode(-1)
  let slow = head
  let fast = head
  for (let i = 0; i < n; i++) {
    fast = fast.next
  }
  while (fast != null) {
    fast = fast.next
    slow = slow.next
  }

  // 慢指针的下一个节点即待删除节点
  let deleteNode = slow.next
  // 慢指针的后继指针指向待删除节点的下一个节点
  // 这样就将待删除节点删除了
  slow.next = deleteNode.next
  deleteNode.next = null
  return dummy.next
}
