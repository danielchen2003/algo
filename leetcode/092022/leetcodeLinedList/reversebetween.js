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
 if(head ===null)
  
  let dummy = new ListNode(-1)
  dummy.next = head;
  let pre = dummy
  //! 第一个for loop  遍历找到起点
  for(let i =1; i<m ;i++){
    pre =  pre.next
  }
  let cur = pre.next
  //! 第2个for loop  遍历中间点并且换尖头
  for(let i =m; i<n ;i++){
    let next = cur.next 
    cur.next = next.next
    next.next = prev.next
    prev.next = next
    // let next = cur.next 
    // cur.next = pre 
    // pre = cur.next
    // cur = next
    
    
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



var reverseBetween = function(head, left, right) {
  let dummy_node = new ListNode(-1);
   dummy_node.next =head
  let leftprev = dummy_node
  let cur = pre.next
  for(let i=0 ;i < left-1;i++){
    leftprev= leftprev.next
    cur =cur.next
  }
  let pre = null 
  for(let i =0;  i< right-left+1  ;i++){
    let next = cur.next
    cur.next = pre
    
    pre = cur
    cur = next
  }
  leftprev.next.next = cur
  leftprev.next = pre 
  return dummy_node.next
}


var reverseBetween = function(head, left, right) {
  let dummy = new ListNode(-1)
  let pre = dummy
  dummy.next =head
 for(let i=0; i<left ;i++){
     pre= pre.next
 }
  let cur =pre.next
  
  for(let i=0;i<right-left;i++){
      let next = cur.next
      cur.next = pre.next
      pre.next = cur
      cur = next
  }
  pre.next = cur
  
  
  return dummy.next
};


var isPalindrome = function (head) {
  let fast = head
  let slow = head
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }

    if (fast) {
    slow = slow.next
  }
  //翻转列表
  slow = reverse(slow)
  fast = head
  while (slow) {
    if (slow.val !== fast.val) {
      return false
    }
    slow = slow.next
    fast = fast.next
  }
  return true
}