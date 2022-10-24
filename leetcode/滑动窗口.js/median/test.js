let arr = [3, 4, 34, 12, 5, 2]
//能不能拼出n个数12 13 11 ？
function rec(arr, i, s) {
  if (s == 0) {
    // taget
    return true
  } else if (i == 0) {
    return arr[0] == s
  } else if (arr[i] > s) {
    return rec(arr, i - 1, s)
  } else {
    A = rec(arr, i - 1, s - arr[i])
    B = rec(arr, i - 1, s)
    return A || B
  }
}
console.log(rec(arr, arr.length - 1, 12))
