function minBages1(apple) {
  if (apple < 0) {
      return -1
  }
  let bag8 = apple / 8
  let rest = apple - bag8*8
  for (bag8 >= 0) {
      // rest 个
      if (rest%6 == 0) {
          return bag8 + (rest / 6)
      } else {
          bag8--
          rest += 8
      }
  }
  return -1
}


func minBages2(apple int) int {
  if (apple & 1) != 0 { // 如果是奇数，返回-1
      return -1
  }
  if apple < 18 {
      if apple == 0 {
          return 0
      }
      if apple == 6 || apple == 8 {
          return 1
      }
      if apple == 12 || apple == 14 || apple == 16 {
          return 2
      }
      return -1
  }
  return (apple-18)/8 + 3
}
