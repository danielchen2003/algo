var MyHashSet = function () {
  this.arr = []
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  this.arr.push(key)
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  for (let i = 0; i < this.arr.length; i++) {
    if (this.arr[i] == key) {
      this.arr.splice(i, 1)
      i--
    }
  }
}

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  return this.arr.indexOf(key) != -1
}
