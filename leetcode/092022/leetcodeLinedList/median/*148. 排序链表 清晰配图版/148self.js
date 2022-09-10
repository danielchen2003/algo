let sortList = function (head) {
  return mergeList(head, null)
}

function mergeList(start, end) {
  if (!start) return null // ? base case
  if (start.next === end) {
    start.next = null //?  断开链接  1-> 2 ->3 ->4   1->2  2->3
    return start
  }
  let slow = start,
    fast = start
  //找重点
  const midPoint = findMiddlePoint(fast, slow)
  return merge(mergeList(start, midPoint), mergeList(midPoint, end))
}

function findMiddlePoint(fast, slow) {
  while (fast !== end) {
    slow = slow.next
    fast = fast.next
    if (fast !== end) {
      fast = fast.next
    }
  }
  return slow
}

function merge(head1, head2) {
  //?插入新假节点new head
  let newHead = new ListNode(0)
  let now = newHead
  while (head1 && head2) {
    if (head1.val <= head2.val) {
      //? 1-> 2 ->3 ->4   1->2  3->4
      //?      l1  1->2     l2 3->4
      //?      l1  0->   1   ->2     l2 3->4
      //?      l1  0-> head1 ->2     l2 3->4
      //?      l1   0->  now-> head1     l2 3->4
      now.next = head1
      head1 = head1.next
    } else {
      now.next = head2
      head2 = head2.next
    }
    now = now.ext
  }
  // 连接最后一个手动
  now.next = head1 ? head2 : head2
  return newHead.next
}
