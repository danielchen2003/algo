function removeDuplicates(head) {
  // Your code goes here.
  // Remember to return the head of the list.
  let seen = new Set()
  let node = head
  while (node && node.next) {
    if (!set.has(node.data)) {
      set.add(node.data)
    } else {
      node.next = node.next.next
    }
    node = node.next
  }
}
function removeDuplicates(head) {
  const cache = {}
  for (let node = head, prev = null; node; node = node.next) {
    if (cache.hasOwnProperty(node.data)) {
      prev.next = node.next
    } else {
      cache[node.data] = 1
      prev = node
    }
  }
  return head
}

function Node(data) {
  this.data = data
  this.next = null
}

function removeDuplicates(head) {
  for (var node = head; node != null; node = node.next) {
    while (node.next && node.data == node.next.data) {
      node.next = node.next.next
    }
  }
  return head
}
