// public int numDecodings(String s) {
//   return helper(s.toCharArray(), s.length(), 0);
// }

// private int helper(char[] chars, int length, int index) {
//   //递归的终止条件，找到了一种解码的方法
//   if (index >= length)
//       return 1;
//   //遇到0跳过
//   if (chars[index] == '0')
//       return 0;
//   //截取一个数字只要不是0肯定是符合条件的
//   int res = helper(chars, length, index + 1);
//   //判断截取两个的时候是否符合条件，如果也符合条件，就截取两个
//   if (index < length - 1 && (chars[index] == '1' || chars[index] == '2' && chars[index + 1] <= '6'))
//       res += helper(chars, length, index + 2);
//   return res;
// }

function numDecodings(s) {
  let arr = s.split("")

  function helper(arr, len, i) {
    if (i >= len) {
      return 1
    }
    if (arr[i] == "0") {
      return 0
    }
    if (arr[i] == "1") {
      let res = helper(arr, len, i + 1)
      if (i + 1 < len) {
        res += helper(arr, len, i + 2)
      }
      return res
    }
    if (arr[i] === "2") {
      let res = helper(arr, len, i + 1)
      if (i + 1 < len && arr[i + 1] <= 6) {
        res += helper(arr, len, i + 2)
      }
      return res
    }

    let res = helper(arr, len, i + 1)
    console.log(res)
    return res
  }

  return helper(arr, s.length, 0)
}

console.log(numDecodings("1231604"))
