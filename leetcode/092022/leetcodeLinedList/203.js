var removeElements = function (head, val) {
  //   while(head !==null && head.val ===val){
  //       head = head.next
  //   }
  let cur = head
  let dummy = new ListNode(-1, head)
  let pre = dummy

  while (cur !== null && cur.next !== null) {
    if (cur.val === val) {
      pre.next = pre.next.next
    } else {
      cur = cur.next
      pre = pre.next
    }
  }
  return dummy.next
}
