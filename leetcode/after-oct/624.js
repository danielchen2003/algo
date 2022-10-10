var maxDistance = function (arrays) {
  let min = arrays[0][0]
  let max = arrays[0][arrays[0].length - 1]
  let res = 0
  for (let i = 1; i < arrays.length; i++) {
    let start = arrays[i][0]
    let end = arrays[i][arrays[i].length - 1]

    let res1 = Math.max(Math.abs(max - start))
    let res2 = Math.max(Math.abs(min - end))
    res = Math.max(res1, res2)

    min = Math.min(min, arrays[i][0])
    max = Math.max(max, arrays[i][arrays[i].length - 1])
  }
  return res
}
