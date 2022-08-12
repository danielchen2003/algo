//https://www.codewars.com/kata/596d34df24a04ee1e3000a25/solutions
function countOnesSingle(n) {
  let result = 0
  while (n > 0) {
    //不停在取一个区间 2一次  2的二次 3的三次累加到result
    let k = Math.log2(n) | 0
    result += 2 ** (k - 1) * k + 1
    n = n - 2 ** k
    result += n
  }
  return result
}

function countOnes(left, right) {
  return countOnesSingle(right) - countOnesSingle(left - 1)
}

//00 + 01+ 10+11+100++ curentright
//00+ 01+ 10 +11+100 ++++ currentleft
// countOnes(4, 7)

console.log(`qq` + countOnes(4, 7))
// // 00 01 10 11  =4
//01 =1

// console.log(Math.log2(10) | 0)

// function countOnesSingle(n) {
//   let result = 0

//   let k = Math.log2(n) | 0
//   result += 2 ** (k - 1) * k + 1
//   n = n - 2 ** k //5-2*2 = 1    6-2*2= 2   9-2*3=1

//   return n
// }

// 在2的p次方内(不包括2**p这个数)， sum = p*(2**(p-1))
// 因此还得加上2**p这个数的1的个数，为1
// 则有 sum = p*(2**(p-1))+1
// 又因为 2**p区间距离n的距离为 n-2**p
// 所以每个区间的累计值为 sum = p*(2**(p-1))+1 + (n-2**p)
// ————————————————

console.log(countOnesSingle(9))
function cacaulatOneSingle(n) {
  let result = 0
  while (n > 0) {
    let nCiFang = Math.log2(n) | 0
    result += nCiFang * 2 ** (nCiFang - 1) + 1
    n = n - 2 ** nCiFang

    result += n
  }
  return result
}

function caculateRange(x, y) {
  return cacaulatOneSingle(y) - cacaulatOneSingle(x - 1)
}
console.log(`daanshi:` + caculateRange(4, 7))
// 01 10 11
