function gcd(a, b) {
  if (b == 0) return a
  console.log(b, a % b)
  return gcd(b, a % b)
}

console.log(gcd(111, 1000))
