var simplifyPath = function (path) {
  let arr = path.split("/").filter((c) => c !== "") // 将字符串分割为数组，并过滤掉空格
  let stack = [] // 用数组模拟栈
  console.log(arr)
  for (let c of arr) {
    if (c === "." || c === "") continue
    else if (c === "..") stack.pop()
    else stack.push(c)
  }
  console.log(stack)
  return `/${stack.join("/")}`
}

path = "/home//foo/../"
simplifyPath(path)
