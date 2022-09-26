var pairSum = function (head) {
  // 快慢指针找到链表中间位置
  let slow = head,
    fast = head.next
  while (fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  // 反转后半部分链表
  let cur = slow

  while (cur) {
    const tmp = cur.next
    cur.next = pre
    pre = cur
    cur = tmp
  }
  // function reverse(node) {
  //   let pre = null
  //   let next = node.next
  //   node.next = pre
  //   pre = cur
  //   cur = next
  //   return pre
  // }
  reverse(cur)
  // 从两端向中间遍历 找最大值
  let p1 = pre,
    p2 = head,
    ans = 0
  while (p1 && p2) {
    ans = Math.max(ans, p1.val + p2.val)
    p1 = p1.next
    p2 = p2.next
  }
  return ans
}

var pairSum = function (head) {
  if (!head) return 0
  let slow = head
  let fast = head
  while (fast !== null) {
    slow = slow.next
    fast = fast.next.next
  }
  let pre = null
  let cur = slow
  function reverse(node) {
    let temp = node.next
    node.next = pre
    pre = cur
    cur = temp
    return pre
  }
  fast = head

  let max = -Infinity
  reverse(slow)
  slow = pre
  while (fast !== null) {
    max = Math.max(max, slow.val + fast.val)
    slow = slow.next
    fast = fast.next
  }
  return max
}

var pairSum = function (head) {
  if (!head) return 0
  let slow = head
  let fast = head
  while (fast !== null) {
    slow = slow.next
    fast = fast.next.next
  }
  let pre = null
  let cur = slow
  while (cur !== null) {
    let temp = cur.next
    cur.next = pre
    pre = cur
    cur = temp
  }
  fast = head

  let max = -Infinity

  slow = pre
  while (fast !== null && slow !== null) {
    max = Math.max(max, slow.val + fast.val)
    slow = slow.next
    fast = fast.next
  }
  return max
}
