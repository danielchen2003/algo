var insertionSortList = function (head) {
  if (!head || !head.next) return head
  let dummy = new ListNode(-1)
  dummy.next = head
  let prev = null
  let cur = head
  while (cur.next !== null && cur !== null) {
    if (cur.next.val >= cur.val) {
      cur = cur.next
    } else {
      let temp = cur.next
      cur.next = cur.next.next
      prev = dummy
      while (prev.next.val <= temp.val) {
        prev = prev.next
      }
      temp.next = prev.next
      prev.next = temp
    }
  }
  return dummy.next
}

var insertionSortList = function (head) {
  let dummy = new ListNode(-1)
  dummy.next = head
  let pre = null
  let cur = head
  while (cur !== null && cur.next !== null) {
    if (cur.val <= cur.next.val) {
      //当前节点小于下一个节点 不动
      //只动指针
      cur = cur.next
    } else {
      // [dumy,4,1,3]   [dummy - 4 -1 -3]  dummy -1 -4 -3]
      let temp = cur.next
      cur.next = pre
      pre = cur
      cur.next = temp
    }
  }
}


class Solution {
  public ListNode insertionSortList(ListNode head) {
      // 1. 首先判断给定的链表是否为空，若为空，则不需要进行排序，直接返回。
      if(head == null){
          return head;
      }

      // 2. 链表初始化操作
      ListNode dummyHead = new ListNode(0); // 引入哑节点
      dummyHead.next = head;                // 目的是在head之前插入节点
      ListNode lastSorted = head;           // 维护lastSorted为链表已经排好序的最后一个节点并初始化
      ListNode curr = head.next;            // 维护curr 为待插入的元素并初始化

      // 3. 插入排序
      while(curr != null){
          if(lastSorted.val <= curr.val){     // 说明curr应该位于lastSorted之后
              lastSorted = lastSorted.next;   // 将lastSorted后移一位,curr变成新的lastSorted
          }else{                              // 否则,从链表头结点开始向后遍历链表中的节点
              ListNode prev = dummyHead;      // 从链表头开始遍历 prev是插入节点curr位置的前一个节点
              while(prev.next.val <= curr.val){ // 循环退出的条件是找到curr应该插入的位置
                  prev = prev.next;
              }
              // 以下三行是为了完成对curr的插入（配合题解动图可以直观看出）
              lastSorted.next = curr.next;
              curr.next = prev.next;
              prev.next = curr;
          }
          curr = lastSorted.next; // 此时 curr 为下一个待插入的元素
      }
      // 返回排好序的链表
      return dummyHead.next;
  }
}

https://leetcode.cn/problems/insertion-sort-list/solution/wei-tu-jie-147dui-lian-biao-jin-xing-cha-ru-pai-xu/


function insertionSortList(head) {
  const dummyHead = new ListNode(0);
  dummyHead.next = head;
  let cur = head;
  let prev = null;
  let temp = null;

  while (cur && cur.next) {
      if (cur.val <= cur.next.val) {
          cur = cur.next;
      } else {
          temp = cur.next;
          cur.next = cur.next.next;

          prev = dummyHead;
          while (prev.next.val <= temp.val) {
              prev = prev.next;
          }
          temp.next = prev.next;
          prev.next = temp;
      }
  }

  return dummyHead.next;
}



var insertionSortList = function(head) {
  if(!head || !head.next) return head
  let dummy = new ListNode(-1);
  dummy.next = head;
  let pre = null 
  let cur =head;
  while(cur.next !== null && cur!==null){
      if(cur.next.val >= cur.val){
          cur=cur.next
      }
      else{
          let temp = cur.next  //不对的节点 删除前保存
          cur.next = cur.next.next
          pre= dummy
          while( temp.val >= pre.next.val ){
              pre = pre.next
          }
          temp.next = pre.next
          pre.next = temp;
          
      }
  }
  return dummy.next
}