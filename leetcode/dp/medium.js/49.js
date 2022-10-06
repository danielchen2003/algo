// var groupAnagrams = function (strs) {
//   const n = strs.length
//   const ans = new Map()
//   const prime = [
//     2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 41, 43, 47, 53, 59, 61, 67, 71, 73,
//     79, 83, 89, 97, 101, 103,
//   ]
//   const mod = 1e9 + 7
//   for (let i = 0; i < n; i++) {
//     let hash = 1
//     for (let j = 0; j < strs[i].length; j++) {
//       let num = strs[i].charCodeAt(j) - 97
//       hash = ((hash % mod) * (prime[num] % mod)) % mod
//       console.log(hash)
//     }
//     if (!ans.get(hash)) ans.set(hash, [])
//     ans.get(hash).push(strs[i])
//   }
//   console.log(ans)
//   return [...ans.values()]
// }

// var groupAnagrams = function (strs) {
//   const map = new Object()
//   for (let s of strs) {
//     const count = new Array(26).fill(0)
//     for (let c of s) {
//       count[c.charCodeAt() - "a".charCodeAt()]++
//     }
//     console.log(map[count])
//     map[count] ? map[count].push(s) : (map[count] = [s])
//   }
//   // console.log(map)
//   return Object.values(map)
// }

// let strs = ["aeat", "tea", "tan", "ate", "nat", "bat"]
// console.log(groupAnagrams(strs))

// var groupAnagrams = function (strs, h = {}) {
//   for (var str of strs) {
//     for (var i = str.length, p = new Array(26).fill(0); i--; )
//       p[str[i].charCodeAt() - 97]++
//     key = p.toString()
//     h[key] ? h[key].push(str) : (h[key] = [str])
//   }
//   return Object.values(h)
// }

let map1 = new Map()
map1.set("1", 1)
map1.set("2", 5)
let map2 = new Map()
map2.set("1", 1)

function compareMaps(map1, map2) {
  let testVal
  if (map1.size !== map2.size) {
    return false
  }
  for (var [key, val] of map1) {
    testVal = map2.get(key)
    // in cases of an undefined value, make sure the key
    // actually exists on the object so there are no false positives
    if (testVal !== val || (testVal === undefined && !map2.has(key))) {
      return false
    }
  }
  return true
}
let obj1 = { 1: 3, 2: 3 }
let obj2 = { 1: 3, 2: 4 }
console.log(JSON.stringify(obj1))
console.log(JSON.stringify(obj1) == JSON.stringify(obj2))

function groupAnagrams(strs) {
  let obj = {}
  for (let x of strs) {
    let temp = x.split("").sort().join("")
    if (obj[temp] === undefined) obj[temp] = [x]
    else {
      obj[temp].push(x)
    }
  }
  return Object.values(obj)
}

strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
