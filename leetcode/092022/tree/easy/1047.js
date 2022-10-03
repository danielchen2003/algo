var removeDuplicates = function (s) {
  const stack = []
  for (const x of s) {
    let c = null
    console.log(stack)

    if (stack.length && x === (c = stack.pop())) continue
    c && stack.push(c)
    stack.push(x)
  }

  return stack.join("")
}

let s = "abbaca"
console.log(removeDuplicates(s))

var removeDuplicates = function (s) {
  let stack = []

  for (let x of s) {
    let c = null

    if (stack.length && c === stack[length - 1]) stack.pop()
    c && stack.push(c)
    stack.push(x)
  }
  return stack.join("")
}
