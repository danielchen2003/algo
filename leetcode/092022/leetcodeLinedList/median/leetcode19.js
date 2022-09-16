var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(-1)
  dummy.next = head
  let fast = head
  let slow = head
  for (let i = 0; i < n; i++) {
    fast = fast.next
  }
  while (fast !== null){
    fast = fast.next
    slow = slow.next
  }
  let delete = slow.next 
  slow.next = delete.next 
  delete.next =null
  return dummy.next 
}


var removeNthFromEnd = function (head, n) {
  //  if(!head ) return head
  let dummy = new ListNode(-1)
  let slow =head 
  let fast =head
  for(let i=0; i < n ;i++){
      fast = fast.next
  }
  while (fast!=null){
          fast = fast.next;
          slow = slow.next;
      }

  // 慢指针的下一个节点即待删除节点
  let deleteNode = slow.next;
  // 慢指针的后继指针指向待删除节点的下一个节点
  // 这样就将待删除节点删除了
  slow.next = deleteNode.next;
  deleteNode.next = null;
  return dummy.next;
}