//反转链表


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  
//   push(val){
//     let newNode = new Node(val);
//     if(!this.head){
//     this.head = newNode;
//     this.tail = this.head
//   }else{
//     this.tail.next = newNode;
//     this.tail = newNode;
//   }
//   this.length++;
//   return this;
// }
// push(val){
//   let newNode = new Node(val)
//   if(this.length>0){
//     this.tail.next = newNode;
//     this.tail = newNode;
//   }else{
//     this.head = newNode;
//     this.tail = this.head;
//   }
//   this.length++;
//   return this;
// }
push(val){
  let newNode = new Node(val);
  if(this.length>0){
    this.tail.next = newNode;
    this.tail = newNode;
    
  }else{
    this.head = newNode;
    this.tail = this.head
  }
  this.length++;
  return this;
}
  
pop(){
  if(this.length===0)  return undefined;
  let current =this.head
  let newTail = current;
  while(current.next){
    newTail = current
    current = current.next
  }
  console.log(current.val);
  this.tail = newTail;
  this.tail.next =null;
  this.length--;
  if(this.length===0){
    this.head=null;
    this.tail=null;
  }
  return current;
}

pop(){


  
  push2(value) {
    /*
     * 1. If there is already at least one other node in the Singly Linked List
     */
    if (this.length > 0) {
      // create a new node with an input value
      const newNode = new Node(value);
      // point the current tails `next` property to the new node
      this.tail.next = newNode;
      // set the Singly Linked List's `tail` to the new node
      this.tail = newNode;
      // increase the Singly Linked List's length by 1
      this.length += 1;
      // return the new node
      return newNode;
    } else {
      /*
       * 2. If there is currently NO other node in the Singly Linked List (so it is currently empty):
       */
      // create a new node with an input value
      const newNode = new Node(value);
      // set the Singly Linked List's `head` to the new node
      this.head = newNode;
      // set the Singly Linked List's `tail` to the new node
      this.tail = newNode;
      // increase the Singly Linked List's length by 1
      this.length += 1;
      // return the new node (so that we knew what we added)
      return newNode;
    }
  }
  
  
  reverse(){
    let node =this.head;
    this.head= this.tail;
    this.tail= node;
    // !  结尾的tail 是null
    let prev =null;
    let next; 
    for(let i=0;i<this.length;i++){
      next = node.next;
      node.next =prev;
      prev =node;
      cur =next;
    }
    return this
    //[100,201,250,250,999]
      // Prev node next
      // next = node.next =201
      // 100 -> null
      
  }
}


const newSLL = new SinglyLinkedList();
console.log(newSLL);

newSLL.push("A");
console.log(newSLL);


newSLL.push("B");
console.log(newSLL);

newSLL.pop()
console.log(newSLL);

newSLL.pop()
console.log(newSLL);
newSLL.pop()
console.log(newSLL);