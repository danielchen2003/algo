const fib = (n) => {
  const map = {}
  const F = (n) => {
    if (n === 1 || n === 0) {
      return n
    }

    let res = F(n - 1) + F(n - 2)
    if (!map[n]) map[n] = res
    if (map[n]) return map[n]
    console.log(map)
    return res % 1000000007
  }
  return F(n)
}

console.log(fib(8))
