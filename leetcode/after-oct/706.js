var MyHashMap = function () {
  this.arr = new Array(93)
  for (let i = 0; i < this.arr.length; ++i) {
    this.arr[i] = new Array()
  }
}

MyHashMap.prototype.put = function (key, value) {
  let index = hash(key)
  let list = this.arr[index]
  if (this.get(key) == -1) list.push(new node(key, value))
  else {
    for (let node of list) {
      if (node.key == key) node.value = value
    }
  }
}

MyHashMap.prototype.get = function (key) {
  let index = hash(key)
  let list = this.arr[index]
  for (let node of list) {
    if (node.key == key) return node.value
  }
  return -1
}

MyHashMap.prototype.remove = function (key) {
  let index = hash(key)
  let list = this.arr[index]
  for (let i = 0; i < list.length; ++i) {
    if (list[i].key == key) list.splice(i, 1)
  }
}

//hash函数
var hash = function (key) {
  return key % 93
}
//存储的node
var node = function (key, value) {
  this.key = key
  this.value = value
}

let myHashMap = new MyHashMap()
myHashMap.put(1, 1) // The map is now [[1,1]]
myHashMap.put(2, 2) // The map is now [[1,1], [2,2]]
myHashMap.get(1) // return 1, The map is now [[1,1], [2,2]]
myHashMap.get(3) // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
myHashMap.put(2, 1) // The map is now [[1,1], [2,1]] (i.e., update the existing value)
myHashMap.get(2) // return 1, The map is now [[1,1], [2,1]]
myHashMap.remove(2) // remove the mapping for 2, The map is now [[1,1]]
myHashMap.get(2) // return -1 (i.e., not found), The map is now [[1,1]]
