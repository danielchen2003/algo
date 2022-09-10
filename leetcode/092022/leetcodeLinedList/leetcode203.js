var removeElements = function(head, val) {
  while(head !==null && head.val == val) {
    head=head.next
  }
  let node = head;
  while(node !== null && node.next !==null){
    if(node.next.val== val){
      node.next = node.next.next
    }else{
      node= node.next
    }
  }
  return head
}


var removeElements = function(head, val) {
  while(head !==null && head.val ===val){
      head = head.next
  }
  let cur_node = head

  while(cur_node !== null && cur_node.next !== null){
      if(cur_node.next.val === val){
          cur_node.next = cur_node.next.next
      }else{
          cur_node = cur_node.next
      }
  } 
  return head;
}