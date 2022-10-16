let a = new Map()
a.set(1, 4)
a.set(2, 5)
a.set(3, 6)

// map.keys().next().value
let b = a.keys().next().value
let value
// console.log(b)
for (let key in a) {
  console.log("key" + key)
  value = key
  break
}

for (const [key, value] of a.entries()) {
  console.log(key, value)
}

// a.delete(2)

// console.log(a.delete(b))
a.delete(1)
a.set(1, 3)
console.log(a)
