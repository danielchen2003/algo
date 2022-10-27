var replaceSpace = function (s) {
  // 字符串转为数组
  const strArr = Array.from(s)
  let count = 0
  console.log(strArr.length)
  // 计算空格数量
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === " ") {
      count++
    }
  }

  let left = strArr.length - 1
  let right = strArr.length + count * 2 - 1
  console.log(left, right)
  while (left >= 0) {
    if (strArr[left] === " ") {
      strArr[right--] = "0"
      strArr[right--] = "2"
      strArr[right--] = "%"
      left--
    } else {
      strArr[right--] = strArr[left--]
    }
  }

  // 数组转字符串
  return strArr.join("")
}

var replaceSpace = function (s) {
  let need_space = 0
  for (let char of s) {
    if (char === " ") {
      need_space++
    }
  }
  let str_arr = Array.from(s)
  let left_pointer = s.length - 1
  let right_pointer = s.length + 2 * need_space - 1
  console.log(right_pointer)
  for (; left_pointer >= 0; left_pointer--) {
    if (str_arr[left_pointer] === " ") {
      str_arr[right_pointer--] = "0"
      str_arr[right_pointer--] = "2"
      str_arr[right_pointer--] = "%"
    } else {
      str_arr[right_pointer--] = str_arr[left_pointer]
    }
  }
  return str_arr.join("")
}
let s = "ap ple"
let b = ["a", "b", "c"]
// console.log(replaceSpace(s))
console.log(b.reverse())

let d = "ababab"
console.log(d.repeat(1))
