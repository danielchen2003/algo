var romanToInt = function (s) {
  const symbolValues = new Map()
  symbolValues.set("I", 1)
  symbolValues.set("V", 5)
  symbolValues.set("X", 10)
  symbolValues.set("L", 50)
  symbolValues.set("C", 100)
  symbolValues.set("D", 500)
  symbolValues.set("M", 1000)
  let ans = 0
  const n = s.length
  for (let i = 0; i < n; ++i) {
    const value = symbolValues.get(s[i])
    if (i < n - 1 && value < symbolValues.get(s[i + 1])) {
      ans -= value
    } else {
      ans += value
    }
  }
  return ans
}

var romanToInt = function (s) {
  function getValue(ch) {
    switch (ch) {
      case "I":
        return 1
      case "V":
        return 5
      case "X":
        return 10
      case "L":
        return 50
      case "C":
        return 100
      case "D":
        return 500
      case "M":
        return 1000
      default:
        return 0
    }
  }

  // const symbolValues = new Map()
  // symbolValues.set("I", 1)
  // symbolValues.set("V", 5)
  // symbolValues.set("X", 10)
  // symbolValues.set("L", 50)
  // symbolValues.set("C", 100)
  // symbolValues.set("D", 500)
  // symbolValues.set("M", 1000)
  let res = 0
  let n = s.length
  for (let i = 0; i < n; ++i) {
    let val = getValue(s[i])
    if (i < n - 1 && val < getValue(s[i + 1])) {
      res -= val
    } else {
      res += val
    }
  }
  return res
}
