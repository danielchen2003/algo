var evalRPN3 = function (tokens) {
  let arr = []
  let num = 0

  for (let token of tokens) {
    console.log(arr)
    if (["+", "-", "*", "/"].includes(token)) {
      let one = parseInt(arr.pop())
      let two = parseInt(arr.pop())
      if (token == "/") {
        arr.push(parseInt(two / one))
      } else if (token == "+") {
        arr.push(two + one)
      } else if (token == "-") {
        arr.push(two - one)
      } else if (token == "*") {
        arr.push(one * two)
      }
    } else {
      arr.push(token)
    }
  }
  console.log(arr[0])
  return arr[0]
}
evalRPN3(["2", "1", "+", "3", "*"])
