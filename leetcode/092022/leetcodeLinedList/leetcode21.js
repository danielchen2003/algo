//! https://leetcode.cn/problems/merge-two-sorted-lists/solution/yi-kan-jiu-hui-yi-xie-jiu-fei-xiang-jie-di-gui-by-/

// class Node {
//   constructor(value) {
//     this.value = value
//     this.next = null
//   }
// }

// class SinglyLinkedList {
//   constructor() {
//     this.length = 0
//     this.head = null
//     this.tail = null
//   }
// }

class Node{
  constructor(value){
    this.value = value
    this.next = null
  }
}

// function ListNode(val) {
//        this.val = val;
//        this.next = null;
//    }

class SingleLinkedList{
  constructor(){
    this.length= 0;
    this.head=null;
    this.tail =null;
  }
  push(value){
    const newNode = new Node(value);
    if(!this.head){
    this.head = newNode
    this.tail = newNode
  }else{
    this.tail.next = newNode
    this.tail = newNode
  }
  this.length++;
  return true;
 }
}

const L1 = new SingleLinkedList
L1.push('1')

L1.push('3')
console.log(L1);

const L2 = new SingleLinkedList
L2.push('2')
L2.push('4')
console.log(L2);

const combline =(LL1,LL2)=>{
  if (LL1==null) return LL2
  else if (LL2 ==null) return LL1
  else if (LL1.value < LL2.value){
      LL1.next = combline(LL1.next,LL2)
    return LL1
  }
  
  
  else {
    LL2.next = combline(LL1,LL2.next)
    return LL2
  }
  }
  
  
  
  // var mergeTwoLists = function(L1, L2) {
  //     if(L1 === null){
  //         return L2;
  //     }
  //     if(L2 === null){
  //         return L1;
  //     }
  //     if(L1.value < L2.value){
  //         L1.next = mergeTwoLists(L1.next, L2);
  //         return L1;
  //     }else{
  //         L2.next = mergeTwoLists(L1, L2.next);
  //         return L2;
  //     }
  // };
  
  console.log(combline(L1,L2));
 
