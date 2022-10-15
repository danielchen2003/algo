var MyHashMap = function () {
  this.base = 5
  this.data = new Array(this.base).fill(0).map((i) => new Array())
}

MyHashMap.prototype.put = function (key, value) {
  let hash = key % this.base
  for (let i of this.data[hash]) {
    if (i[0] === key) return (i[1] = value)
  }
  this.data[hash].push([key, value])
}

MyHashMap.prototype.get = function (key) {
  let hash = key % this.base
  for (let i of this.data[hash]) {
    if (i[0] === key) return i[1]
  }
  return -1
}

MyHashMap.prototype.remove = function (key) {
  let hash = key % this.base
  for (let i of this.data[hash]) {
    if (i[0] === key) {
      let index = this.data[hash].indexOf(i)
      this.data[hash].splice(index, 1)
    }
  }
}

let myHashMap = new MyHashMap()
myHashMap.put(1, 1) // The map is now [[1,1]]
myHashMap.put(2, 2) // The map is now [[1,1], [2,2]]
myHashMap.get(1) // return 1, The map is now [[1,1], [2,2]]
myHashMap.get(3) // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
myHashMap.put(2, 1) // The map is now [[1,1], [2,1]] (i.e., update the existing value)
myHashMap.get(2) // return 1, The map is now [[1,1], [2,1]]
// myHashMap.remove(2) // remove the mapping for 2, The map is now [[1,1]]
myHashMap.get(2) // return -1 (i.e., not found), The map is now [[1,1]]
myHashMap.put(5, 1)
console.log(myHashMap.get(2))
