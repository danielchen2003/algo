var sumZero = function (n) {
  let res = []
  let sum = 0
  for (let i = 0; i <= n - 2; i++) {
    res.push(i)
    sum += i
  }
  res.push(-sum)
  // console.log(res)
  return res
}
console.log(sumZero(2))

var reverseWords = function (s) {
  let arr = s.split(" ")
  arr.forEach((x, i) => {
    let word = x.split("")
    word.reverse()
    // arr[i] = word.join("")
    return (x = "t")
  })
  return arr.join(" ")
}

var reverseWords = function (s) {
  let arr = s.split("")

  let l = 0,
    r = l
  while (l < arr.length) {
    console.log(arr)
    //找到结尾的空格
    while (arr[r] && arr[r] !== " ") {
      r++
    }

    //反转单词
    for (let i = l, j = r - 1; i < j; i++, j--) {
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }

    //跳到下一个单词
    l = r + 1
    r = l
  }
  // console.log(arr)
  return arr.join("")
}

console.log(reverseWords("Let's take LeetCode contest"))
