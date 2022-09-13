// function helper(nci, deep, node) {
//   if (deep > nci) {
//     return
//   }
//   helper(deep + 1, nci, node)
// }

// function zhezhi(node, nci) {
//   let deep = nci
//   helper(nci, deep, node.next)
// }

// function getPath(i, n, down) {
//   if (i > n) {
//     return
//   }
//   getPath(i + 1, n, true)
//   console.log(down ? "凹" : "凸")
//   getPath(i + 1, n, false)
// }
// //i是当前遍历的层数，n为次数
// getPath(1, 3, true)

function foldpaper(curLevel, deep, isFold = true) {
  if (curLevel > deep) return
  foldpaper(curLevel + 1, deep, "ture")
  if (isFold) console.log(`凹`)
  else console.log("突")
  foldpaper(curLevel + 1, deep, "flase")
}
