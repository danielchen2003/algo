// ListNode successor = null; // 后驱节点

// // 反转以 head 为起点的 n 个节点，返回新的头结点
ListNode reverseN(ListNode head, int n) {
    if (n == 1) {
        // 记录第 n + 1 个节点
        successor = head.next;
        return head;
    }
    // 以 head.next 为起点，需要反转前 n - 1 个节点
    ListNode last = reverseN(head.next, n - 1);

    head.next.next = head;
    // 让反转之后的 head 节点和后面的节点连起来
    head.next = successor;
    return last;
}


var reverseBetween = function(head, left, right) {
  let node = head 
  
  let dummy = new ListNode(-1)
  dummy.next = head;
  //! 第一个for loop  遍历找到起点
  for(let i =1; i<m ;i++){
    pre =  pre.next
  }
  let cur = pre.next
  //! 第2个for loop  遍历中间点并且换尖头
  for(let i =m; i<n ;i++){
    // let next = cur.next 
    // cur.next = next.next
    // next.next = prev.next
    // prev.next = next
    let next = cur.next 
    cur.next = pre 
    pre = cur.next
    cur = next
    
    
  }
  
}


var reverseBetween = function(head, left, right) {
  // 设置 dummyNode 是这一类问题的一般做法
  const dummy_node = new ListNode(-1);
  dummy_node.next = head;
  let pre = dummy_node;
  for (let i = 0; i < left - 1; ++i) {
      pre = pre.next;
  }

  let cur = pre.next;
  for (let i = 0; i < right - left; ++i) {
      const next = cur.next;
      cur.next = next.next;
      next.next = pre.next;
      pre.next = next;
  }
  return dummy_node.next;
};
