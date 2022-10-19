let strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
function groupAnagrams(strs) {
  let arr = []
  let map = new Map()
  for (let x of strs) {
    arr.push(x.split("").sort().join(""))
  }
  for (let i = 0; i < strs.length; i++) {
    if (map.get(arr[i]) === undefined) {
      map.set(arr[i], [])
    }
    map.get(arr[i]).push(strs[i])
  }
  console.log([...map.values()])
  return map.values()
}

groupAnagrams(strs)
