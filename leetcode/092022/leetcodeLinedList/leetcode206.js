//反转链表

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
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
  push(val) {
    let newNode = new Node(val)
    if (this.length > 0) {
      this.tail.next = newNode
      this.tail = newNode
    } else {
      this.head = newNode
      this.tail = this.head
    }
    this.length++
    return this
  }

  // pop(){
  //   if(this.length===0)  return undefined;
  //   let current =this.head
  //   let newTail = current;
  //   while(current.next){
  //     newTail = current
  //     current = current.next
  //   }
  //   console.log(current.val);
  //   this.tail = newTail;
  //   this.tail.next =null;
  //   this.length--;
  //   if(this.length===0){
  //     this.head=null;
  //     this.tail=null;
  //   }
  //   return current;
  // }

  pop1() {
    if (this.length == 0) return undefined
    let node = this.head
    let newTail = node
    //!这一步在找second to last item travel the ll
    while (node.next) {
      newTail = node
      node = node.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
  }
  pop() {
    // basecase
    if (this.length == 0) return undefined
    let node = this.head
    let newTail = node
    while (node.next) {
      //如果有下个 节点 那么新的尾巴就是当前节点
      newTail = node
      //然后把node 指针往下一个移动
      //? 这一步 就是要找到最后第二个节点此时node 指向最后一个节点 newtail 指向最后第二
      node = node.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    if (this.length === 0) {
      this.tail = null
      this.head = null
    }
    return node
  }

  push2(value) {
    /*
     * 1. If there is already at least one other node in the Singly Linked List
     */
    if (this.length > 0) {
      // create a new node with an input value
      const newNode = new Node(value)
      // point the current tails `next` property to the new node
      this.tail.next = newNode
      // set the Singly Linked List's `tail` to the new node
      this.tail = newNode
      // increase the Singly Linked List's length by 1
      this.length += 1
      // return the new node
      return newNode
    } else {
      /*
       * 2. If there is currently NO other node in the Singly Linked List (so it is currently empty):
       */
      // create a new node with an input value
      const newNode = new Node(value)
      // set the Singly Linked List's `head` to the new node
      this.head = newNode
      // set the Singly Linked List's `tail` to the new node
      this.tail = newNode
      // increase the Singly Linked List's length by 1
      this.length += 1
      // return the new node (so that we knew what we added)
      return newNode
    }
  }

  shift() {
    if (this.length === 0) return null
    //? 找到head 找到head.next  head.next 设置为head
    let node = this.head
    let newHead = node.next
    this.head = newHead
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return newHead
  }

  unshift(val) {
    let newNode = new Node(val)
    if (this.length == 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }

  get(index) {
    if (index < 0 || index >= this.length) return null
    let count = 0
    let node = this.head

    while (count !== index) {
      node = node.next
      count++
    }
    return node
  }

  set(index, val) {
    let foundNode = this.get(index)
    if (foundNode) {
      foundNode.value = val
      return true
    }
    return false
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false
    if (index == this.length) return this.push(val)
    if (index == 0) return !!this.unshift(val)
    let newNode = new Node(val)
    let prevNode = this.get(index - 1)
    // let nextNode = this.get(index);
    let temp = prevNode.next
    prevNode.next = newNode
    newNode.next = temp

    this.length++
    return true
  }

  // remove(index){
  //   if(index <0 || index > this.length){
  //     return false
  //   }else{
  //     let prevNode = this.get(index-1)
  //     let nextNode = this.get(index+1)
  //     prevNode.next = nextNode
  //     this.length--;
  //   }

  //     return true

  //   }

  remove(index) {
    if (index < 0 || index > this.length) {
      return false
    }
    if (index === 0) this.pop()
    if (index === this.length) this.shift()
    let prev = this.get(index - 1)
    let next = prev.next.next
    prev.next = next
    this.length--
    return true
  }

  reverse() {
    let node = this.head
    //! 第一步交换头尾
    this.head = this.tail
    this.tail = node
    // !  结尾的tail 是null
    let prev = null
    let next
    for (let i = 0; i < this.length; i++) {
      //记录一下node.next
      next = node.next
      node.next = prev
      prev = node
      node = next
    }
    return this
    // [100,201,250,250,999]
    // Prev node next
    // next = node.next =201
    // 201 -> 100 -> null
  }
  
  reverse2() {
    //sawp 
  
    // let node = this.head
    // this.head = this.tail
    // this.tail = node
    // let prev =null;
    // let next;
    
    // for(let i =0 ; i<this.length;i++){
    //   //第一步把原来的尾巴指向null 
    //   //第二部把正常的第二位置指向当年的node的第一位
    //   next = node.next
    // //在转箭头 ➡️
    //   node.next = prev
    //   prev = node
    //   node =next
    // }
  }
  
  reverse3() {
    //第一步换头
    
    const visualize = () =>
		createGraphFromPointers(
			{
				last,
				"list.head": this.head,
				"list.tail": this.tail,
			},
			i => ({
				id: i.id,
				label: i.name,
				color: finished.has(i) ? "lime" : "lightblue",
				edges: [
					{ to: i.next!, label: "next", color: "lightblue" },
					{ to: i.prev!, label: "prev", color: "lightgray" },
				].filter(r => !!r.to),
			})
		);
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev =null;
    for(let i =0;i<this.length;i++) {
      next = node.next // 初始化next 是当前节点的下一个
      node.next = prev;
      prev = node;
      node= next;// node move 到下一个节点
    }
    return this
  }
//   reverse4(){
//   const reverseListRec= ()=> {
//     if (this.head == null || this.head.next == null) {
//         return head;
//     }
//     const newHead = reverseListRec(this.head.next);
//     this.head.next.next = this.head;
//     this.head.next = null;
//     return newHead;
// };
// reverseListRec()
//   }


    print(){
      var arr =[];
      var current =this.head
      while(current!==null){
        arr.push(current.value)
        current= current.next
      }
      console.log(arr);
    }
  
}

const newSLL = new SinglyLinkedList()
console.log(newSLL)

newSLL.push("A")


newSLL.push("B")
newSLL.push("C")
newSLL.push("D")
newSLL.push("E")



// newSLL.shift()
// console.log(newSLL);

// newSLL.unshift("A+")
// console.log(newSLL)
// newSLL.shift()
// console.log(newSLL);
// newSLL.pop()
// console.log(newSLL);
// newSLL.pop()
// console.log(newSLL);

// console.log(newSLL.get(1))

newSLL.set(1, "A-")
console.log(newSLL)
newSLL.print()
console.log(newSLL.reverse3());
// console.log(newSLL.remove(1))
// console.log(newSLL.pop())
console.log(newSLL.print())





 /**
//      * 以链表1->2->3->4->5举例
//      * @param head
//      * @return
//      */
//   public ListNode reverseList(ListNode head) {
//     if (head == null || head.next == null) {
//         /*
//             直到当前节点的下一个节点为空时返回当前节点
//             由于5没有下一个节点了，所以此处返回节点5
//          */
//         return head;
//     }
//     //递归传入下一个节点，目的是为了到达最后一个节点
//     // ListNode newHead = reverseList(head.next);
//             /*
//         第一轮出栈，head为5，head.next为空，返回5
//         第二轮出栈，head为4，head.next为5，执行head.next.next=head也就是5.next=4，
//                   把当前节点的子节点的子节点指向当前节点
//                   此时链表为1->2->3->4<->5，由于4与5互相指向，所以此处要断开4.next=null
//                   此时链表为1->2->3->4<-5
//                   返回节点5
//         第三轮出栈，head为3，head.next为4，执行head.next.next=head也就是4.next=3，
//                   此时链表为1->2->3<->4<-5，由于3与4互相指向，所以此处要断开3.next=null
//                   此时链表为1->2->3<-4<-5
//                   返回节点5
//         第四轮出栈，head为2，head.next为3，执行head.next.next=head也就是3.next=2，
//                   此时链表为1->2<->3<-4<-5，由于2与3互相指向，所以此处要断开2.next=null
//                   此时链表为1->2<-3<-4<-5
//                   返回节点5
//         第五轮出栈，head为1，head.next为2，执行head.next.next=head也就是2.next=1，
//                   此时链表为1<->2<-3<-4<-5，由于1与2互相指向，所以此处要断开1.next=null
//                   此时链表为1<-2<-3<-4<-5
//                   返回节点5
//         出栈完成，最终头节点5->4->3->2->1
//      */
//     head.next.next = head;
//     head.next = null;
//     return newHead;
// }