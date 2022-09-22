var TwoSum = function () {
  this.sum = new Set()
  this.num = []
}

/**
 * Add the number to an internal data structure..
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function (number) {
  // let newsum = 0
  for (let i of this.num) {
    this.sum.add(number + i)
  }

  // this.num.forEach((i) => this.sum.add(i + number))
  this.num.push(number)
}

/**
 * Find if there exists any pair of numbers which sum is equal to the value.
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function (value) {
  return this.sum.has(value)
}

let sum = new TwoSum()
sum.add(5)
sum.add(10)
sum.add(1)
sum.add(2)
console.log(sum)
console.log(sum.find(12))
