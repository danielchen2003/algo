class LinkedList {
  constructor() {
      this.head = null;
      this.tail =null;
      this.length =0;
  }
  push(val){
    
  }
}

class ListNode {
  constructor(data) {
      this.data = data
      this.next = null                
  }
}


let node1 = new ListNode(2)
let node2 = new ListNode(5)
let node3= new ListNode(19)
node1.next = node2

let list = new LinkedList(node1,node2)

console.log(list.head.data)
console.log(list);

const size =()=>{
  let count =0;
  let node =list.head
  while (node){
    count++
    node = node.next
  }
  return count
}
size(list)
console.log(size(list));


// size() {
//   let count = 0; 
//   let node = this.head;
//   while (node) {
//       count++;
//       node = node.next
//   }
//   return count;
// }


function Node(data) {
  this.data = data;
  this.next = null;
}

function getNth(node, index) {
  // Your code goes here.
  if(node&&!index) return "Invalid index"
  return getNth(node.next,index-1)
}
