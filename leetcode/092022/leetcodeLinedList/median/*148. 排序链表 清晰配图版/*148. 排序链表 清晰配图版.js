var sortList = function (head) {
  return mergeList(head, null) // 左闭右开区间，即右边界是最后一个元素的右边，即 null
}

function mergeList(start, end) {
  if (!start) return null
  // 左闭右开区间
  if (start.next === end) {
    start.next = null // 由于 end 属于右边那部分的，不关左边事，所以断开连接再返回
    return start
  }
  let slow = start,
    fast = start
  // 找中点
  while (fast !== end) {
    slow = slow.next
    fast = fast.next
    if (fast !== end) {
      fast = fast.next
    }
  }
  let mid = slow
  return merge(mergeList(start, mid), mergeList(mid, end)) // 对中点的左右两部分继续递归，然后对递归返回的结果 执行合并两个有序链表的算法
}

// 合并两个有序链表
function merge(head1, head2) {
  let newHead = new ListNode(0),
    now = newHead
  while (head1 && head2) {
    if (head1.val <= head2.val) {
      now.next = head1
      head1 = head1.next
    } else {
      now.next = head2
      head2 = head2.next
    }
    now = now.next
  }
  now.next = head1 ? head1 : head2
  return newHead.next
}

//? 官方
const merge = (head1, head2) => {
  const dummyHead = new ListNode(0)
  let temp = dummyHead,
    temp1 = head1,
    temp2 = head2
  while (temp1 !== null && temp2 !== null) {
    if (temp1.val <= temp2.val) {
      temp.next = temp1
      temp1 = temp1.next
    } else {
      temp.next = temp2
      temp2 = temp2.next
    }
    temp = temp.next
  }
  if (temp1 !== null) {
    temp.next = temp1
  } else if (temp2 !== null) {
    temp.next = temp2
  }
  return dummyHead.next
}

var sortList = function (head) {
  if (head === null) {
    return head
  }
  let length = 0
  let node = head
  while (node !== null) {
    length++
    node = node.next
  }
  const dummyHead = new ListNode(0, head)
  for (let subLength = 1; subLength < length; subLength <<= 1) {
    let prev = dummyHead,
      curr = dummyHead.next
    while (curr !== null) {
      let head1 = curr
      for (let i = 1; i < subLength && curr.next !== null; i++) {
        curr = curr.next
      }
      let head2 = curr.next
      curr.next = null
      curr = head2
      for (
        let i = 1;
        i < subLength && curr != null && curr.next !== null;
        i++
      ) {
        curr = curr.next
      }
      let next = null
      if (curr !== null) {
        next = curr.next
        curr.next = null
      }
      const merged = merge(head1, head2)
      prev.next = merged
      while (prev.next !== null) {
        prev = prev.next
      }
      curr = next
    }
  }
  return dummyHead.next
}

// ？ 官方2

const merge = (head1, head2) => {
  const dummyHead = new ListNode(0)
  let temp = dummyHead,
    temp1 = head1,
    temp2 = head2
  while (temp1 !== null && temp2 !== null) {
    if (temp1.val <= temp2.val) {
      temp.next = temp1
      temp1 = temp1.next
    } else {
      temp.next = temp2
      temp2 = temp2.next
    }
    temp = temp.next
  }
  if (temp1 !== null) {
    temp.next = temp1
  } else if (temp2 !== null) {
    temp.next = temp2
  }
  return dummyHead.next
}

const toSortList = (head, tail) => {
  if (head === null) {
    return head
  }
  if (head.next === tail) {
    head.next = null
    return head
  }
  let slow = head,
    fast = head
  while (fast !== tail) {
    slow = slow.next
    fast = fast.next
    if (fast !== tail) {
      fast = fast.next
    }
  }
  const mid = slow
  return merge(toSortList(head, mid), toSortList(mid, tail))
}

var sortList = function (head) {
  return toSortList(head, null)
}

// leet code 21
//合并 两个有序链表 从小到大
var mergeTwoLists = function (l1, l2) {
  if (l1 === null) {
    return l2
  }
  if (l2 === null) {
    return l1
  }
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
}
