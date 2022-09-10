function split(head) {
  const node = head
  while (node.next !== null && node.next.next !== null) {
    node.next = node.next.next
    node = node.next
  }
  node.next = null
  return node
}

const split = (head) => {
  if (head == null) return null
  const result = new Node(head.data)
  result.next = head.next == null ? null : split(head.next.next)
  return result
}

function split(head) {
  if (head === null) return null

  const newNode = new Node(head.data)
  if (head.next == null) {
    newNode.next = null
  } else {
    newNode.next = split(head.next.next)
  }

  return newNode
}
