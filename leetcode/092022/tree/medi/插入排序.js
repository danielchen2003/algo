var insertionSortList = function(head) {
  
  let node =head;
  for()
  
};

function swap(){}


var insertionSortList = function(head) {
  if (head === null) {
      return head;
  }
  const dummyHead = new ListNode(0);
  dummyHead.next = head;
  let lastSorted = head, curr = head.next;
  while (curr !== null) {
      if (lastSorted.val <= curr.val) {
          lastSorted = lastSorted.next;
      } else {
          let prev = dummyHead;
          while (prev.next.val <= curr.val) {
              prev = prev.next;
          }
          lastSorted.next = curr.next;
          curr.next = prev.next;
          prev.next = curr;
      }
      curr = lastSorted.next;
  }
  return dummyHead.next;
};



var insertionSortList = function(head) {
  if (head == null) return head;
  let next = head, res = new ListNode();
  while (next != null) {
      let temp = res;
      while (temp.next != null && temp.next.val < next.val) 
      temp = temp.next;
      
          let t = temp.next;
          temp.next = next;
          next = next.next;
          temp.next.next = t;
      
      [next, temp.next, temp.next.next] = [next.next, next, temp.next]
  }
  return res.next;
};


var insertionSortList = function(head) {
  if(head==null) return head;
  let next =head, res = new ListNode();
  while(next !==null){
    let temp = res 
    while(temp.next !==null && temp.next.val > next.val)
    
    
    temp = temp.next;
    temp.next = next;
    next = next.next;
    temp.next.next = temp;
  }
  return res.next
};

var insertionSortList = function(head) {
  if(!head || !head.next) return head;
  let dummy = new ListNode(-1);
  dummy.next =head;
  let prev = null
  let cur =head;
  while(cur.next!==null && cur !==null){
    if(cur.next.val >= cur.val){
      cur=cur.next
    }
     else{
      let temp = cur.next
      cur.next = cur.next.next
      prev =dummy
      while(prev.next.val <= temp.val ){
        prev= prev.next
      }
      temp.next = prev.next
      prev.next = temp
      
     } 
      
    }
    return dummy.next
  
}





