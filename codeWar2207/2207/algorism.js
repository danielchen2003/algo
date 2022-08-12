function josephus(items, k) {
  //your code here
  let res = []
  index = 0
  while (items.length > 0) {
    index = (index + k - 1) % items.length
    res = [...res, ...items.splice(index, 1)]

    // for(let j =k;j>=0 ;k--){
    //   if (i===items.length){
    //     i=0
    //   }else {
    //     res.push(items[k])
    //     items.s
    //   }
  }
  return res
}

//内层指针不停在里面转 【01234567】 每一次到k就要删东西

// function josephus(items, k) {
//   var result = [],
//     index = 0
//   while (items.length > 0) {
//     index = (index + k - 1) % items.length
//     result = result.concat(items.splice(index, 1))
//   }
//   return result
// }
console.log(josephus([1, 2, 3, 4, 5, 6, 7], 3))

function josephusSurvivor(n, k) {
  //your code here
  let res = []
  // let arr = []
  // for (i = 1; i <= n; i++) {
  //   arr.push(i)
  // }
  // let arr = [...Array(n).keys()].map((x) => x + 1)
  let arr = Array.from({ length: n + 1 }, (_, i) => i + 1)
  console.log(`arr is:${arr}`)
  // console.log(arr)
  let index = 0
  while (arr.length > 0) {
    index = (index + k - 1) % arr.length
    res = [...res, ...arr.splice(index, 1)]
  }
  return res.pop()
  // console.log(res)
}

console.log(josephusSurvivor(7, 3))

// function josephusSurvivor(n, k) {
//   if (n < 1) return 1
//   else {
//     return (josephusSurvivor(n - 1, k) + --k) % n
//   }
// }

// console.log([...Array(10).keys()])

let ys = [91, 74, 73, 85, 73, 81, 87]

console.log(chooseBestSum(230, 3, ys))

function chooseBestSum(t, k, ls) {
  let arr = []
  //   function tryMap(sum, ls, k) {
  //     for (i = 0; i < ls.length; i++) {
  //       if (k === 0) arr.push(sum)
  //       else {
  //         tryMap(sum + ls[i], ls.slice(i + 1), k - 1)
  //       }
  //     }
  //   }

  function tryMap(sum, listArr, num) {
    //尝试
    if (num == 0) {
      arr.push(sum)
    } else {
      for (let i = 0; i < listArr.length; i++) {
        tryMap(sum + listArr[i], listArr.slice(i + 1), num - 1)
      }
    }
  }

  tryMap(0, ls, k)
  console.log(`arrasd` + arr)
}

// function rec(sum, ar, n) {
//   if (n == 0) {
//     arr.push(sum)
//   } else {
//     for (let i = 0; i < ar.length; i++) {
//       rec(sum + ar[i], ar.slice(i + 1), n - 1)
//     }
// //   }
// }

// let ys = [91, 74, 73, 85, 73, 81, 87]
//slice 这行解释
// 第一次 rec (0+ ys[0], listArr.slice[i+1]  [74, 73, 85, 73, 81, 87], 3-1=2)

function rec(sum, listArr, num) {
  //尝试
  if (num == 0) {
    arr.push(sum)
  } else {
    for (let i = 0; i < listArr.length; i++) {
      rec(sum + listArr[i], listArr.slice(i + 1), num - 1)
    }
  }
}

//   rec(0, ls, k)
//   console.log(`arrissss:` + arr.sort((a, b) => b - a))

//   var sol = arr.sort((a, b) => b - a).find((a) => a <= t)
//   // console.log(sol)
//   return typeof sol === "undefined" ? null : sol
// }

const arr1 = [1, 2, 3]
const arr2 = [1, 2, 3]
function shallowCompare(newObj, prevObj) {
  for (key in newObj) {
    if (newObj[key] !== prevObj[key]) return true
  }
  return false
}
//
var game_item = {
  game: "football",
  first_world_cup: "1930",
  teams: {
    North_America: 1,
    South_America: 4,
    Europe: 8,
  },
}
// Case 1:
// if this be the object passed to setState
var updated_game_item1 = {
  game: "football",
  first_world_cup: "1930",
  teams: {
    North_America: 1,
    South_America: 4,
    Europe: 8,
  },
}
shallowCompare(updated_game_item1, game_item)
