var copyRandomList = function (head) {
  let map = new Map(),
    clone = (node) => {
      if (!node) return null
      let newNode = new Node(node.val)
      map.set(node, newNode)
      newNode.next = clone(node.next)
      newNode.random = map.get(node.random) || null
      return newNode
    }

  return clone(head)
}

var copyRandomList = function (head) {
  const map = new Map()
  clone = (node) => {
    if (!node) return null
    let newNode = new Node(node.val)
    map.set(node, newNode) //A, A'
    newNode.next = clone(node.next) //下一个节点克隆
    newNode.random = map.get(node.random) || null
    return newNode
  }
  return clone(head)
}
//左程云

var copyRandomList = function (head) {
  const map = new Map()
  let node = head
  while (node !== null) {
    let newNode = new Node(node.val)
    map.set(node, newNode)
    node = node.next
  }
  node = head
  while (node !== null) {
    map.get(node).next = map.get(node.next)
    map.get(node).random = map.get(node.random)
    node = node.next
  }
  return map.get(head)
  // for(node =head; node !==null ;node=node.next)
}

const a = new Set()
a.add("a")
a.add("a")
a.add("b")
console.log(a.add("a"))
