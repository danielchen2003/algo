countDown = (n) => {
  n = n + 2
  let res = ""
  for (let i = 2; i >= 0; i--) {
    res += n--
    if (i !== 0) {
      res += "!"
    }
  }
  return res
}

console.log(countDown(10)) //12 11 10
