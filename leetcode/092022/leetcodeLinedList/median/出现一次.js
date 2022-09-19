var singleNumber = function (nums) {
  let seen = new Map()
  for (let x of nums) {
    if (!seen.has(x)) seen.set(x, 1)
    else {
      let fre = seen.get(x)
      fre += 1
      seen.set(x, fre)
    }
  }
  for (let x of seen.keys()) {
    if (seen.get(x) === 1) {
      return x
    }
  }
  return -1
}

var singleNumber = function (nums) {
  // for (let x of nums) {
  //   console.log(x)
  // }
  for (let x in nums) {
    console.log(nums[x])
  }
}

let aa = {
  a: 2,
  b: 3,
  c: 4,
}
console.log(singleNumber(aa))

var singleNumber = function (nums) {
  // for (let x of nums) {
  //   console.log(x)
  // }
  for (let x in nums) {
    console.log(nums[x])
  }
}
