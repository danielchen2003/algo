// var partition = function (head, x) {
//   let SLnode = new Node(-1)
//   let shead = SLnode
//   let BLode = new Node(-1)
//   let bhead = BLnode
//   let curNode = head
//   while (curNode !== null) {
//     const temp = curNode.next
//     if (curNode.val < x) {
//       SLnode.next = curNode
//       SLnode = SLnode.next
//     } else {
//       BLnode.next = curNode
//       BLnode = BLnode.next
//     }
//     curNode = temp
//   }
//   BLnode.next = null
//   SLnode.next = bhead.next
//   return smallHead.next
// }

// var partition = function (head, x) {
//   let small = new ListNode(0)
//   const smallHead = small
//   let large = new ListNode(0)
//   const largeHead = large
//   while (head !== null) {
//     if (head.val < x) {
//       small.next = head
//       small = small.next
//     } else {
//       large.next = head
//       large = large.next
//     }
//     head = head.next
//   }
//   large.next = null
//   small.next = largeHead.next
//   return smallHead.next
// }
{
  /* <script/> */
}
class Node {
  constructor(val) {
    this.data = val
    this.next = null
  }
}

// A utility function to create a new node
function newNode(data) {
  var new_node = new Node()
  new_node.data = data
  new_node.next = null
  return new_node
}

// Function to make a new list
// (using the existing nodes) and
// return head of new list.
function partition(head, x) {
  /*
   * Let us initialize start and tail nodes of new list
   */
  var tail = head

  // Now iterate original list and connect nodes
  var curr = head
  while (curr != null) {
    var next = curr.next
    if (curr.data < x) {
      /* Insert node at head. */
      curr.next = head
      head = curr
    } // Append to the list of greater values
    else {
      /* Insert node at tail. */
      tail.next = curr
      tail = curr
    }
    curr = next
  }
  tail.next = null

  // The head has changed, so we need
  // to return it to the user.
  return head
}

/* Function to print linked list */
function printList(head) {
  var temp = head
  while (temp != null) {
    document.write(temp.data + " ")
    temp = temp.next
  }
}

// Driver code

/* Start with the empty list */
var head = newNode(3)
head.next = newNode(5)
head.next.next = newNode(8)
head.next.next.next = newNode(2)
head.next.next.next.next = newNode(10)
head.next.next.next.next.next = newNode(2)
head.next.next.next.next.next.next = newNode(1)

var x = 5
head = partition(head, x)
printList(head)

// This code contributed by Rajput-Ji
