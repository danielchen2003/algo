var getDecimalValue = function (head) {
  let arr = []

  for (let node = head; node !== null; node = node.next) {
    arr.push(node.val)
  }
  //   const str = arr.join("")
  //   return parseInt(str * 1, 2)

  arr.reverse().forEach((item, i) => {
    sum += item * Math.pow(2, i++)
  })
}

console.log(parseInt(101, 2))

var middleNode = function (head) {
  let slow = head
  let fast = head
  while (fast.next && fast) {
    fast = fast.next.next
    slow = slow.next
  }
  return slow
}

var getDecimalValue = function (head) {
  let node = head
  let sum
  let i = 0
  while (node) {
    sum = 2 ** i++ + node.val
    node = node.next
  }
}
