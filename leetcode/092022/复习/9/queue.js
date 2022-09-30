// var MyStack = function () {
//   this.queue1 = []
//   this.queue2 = []
// }

// /**
//  * Push element x onto stack.
//  * @param {number} x
//  * @return {void}
//  */
// MyStack.prototype.push = function (x) {
//   this.queue1.push(x)
// }

// /**
//  * Removes the element on top of the stack and returns that element.
//  * @return {number}
//  */
// MyStack.prototype.pop = function () {
//   // 减少两个队列交换的次数， 只有当queue1为空时，交换两个队列
//   //没有元素的时候换回来。
//   //有元素的时候q1 加入q2的队列
//   //只有一个的时候换回来
//   if (!this.queue1.length) {
//     ;[this.queue1, this.queue2] = [this.queue2, this.queue1]
//   }
//   while (this.queue1.length > 1) {
//     this.queue2.push(this.queue1.shift())
//   }
//   return this.queue1.shift()
// }

// /**
//  * Get the top element.
//  * @return {number}
//  */
// MyStack.prototype.top = function () {
//   const x = this.pop()
//   this.queue1.push(x)
//   return x
// }

// /**
//  * Returns whether the stack is empty.
//  * @return {boolean}
//  */
// MyStack.prototype.empty = function () {
//   return !this.queue1.length && !this.queue2.length
// }

let a = [1, 2, 3, 4, 5, 6]
console.log(a.shift())
console.log(a)
b = 1
console.log(a.unshift(b))
console.log(a)
console.log(a.pop())
console.log(a.push(6))
console.log(a)

var MyStack = function () {
  this.queue = []
}

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue.push(x)
}

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
  let size = this.queue.length
  while (size-- > 1) {
    this.queue.push(this.queue.shift())
  }
  return this.queue.shift()
}

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
  const x = this.pop()
  this.queue.push(x)
  return x
}

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return !this.queue.length
}

var isFlipedString = function (s1, s2) {
  if (s1.length !== s2.length) return false
  if (s1 === s2) return true // ''和''也是旋转
  let s = ""
  for (let i = 0, len = s1.length; i < len; i++) {
    console.log(s)
    s = s1.slice(i) + s1.slice(0, i)
    if (s === s2) return true
  }
  return false
}
let s1 = "bottlewater"
let s2 = "erbottlewat"
isFlipedString(s1, s2)
