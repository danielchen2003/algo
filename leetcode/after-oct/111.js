function reorderSpaces(text) {
  let sumSpace = 0,
    wordCount = 0

  // 计算空格总数
  var reg = RegExp(/\s/g)
  //空格的总数量
  sumSpace = text.split("").filter((x) => x === " ")
  console.log(text.match(sumSpace))
  // sumSpace = text.match(/ /g) || [].length
  let res = text.trim().replace(/\s+/g, " ").split(" ")
  // 计算单词总数
  // for(let item of words){
  //     if(item !== ''){
  //         wordCount++
  //         res.push(item)
  //     }
  wordCount = res.length
  console.log(sumSpace)
  // 长度为1，直接处理返回
  if (wordCount === 1) {
    return res.join("") + " ".repeat(sumSpace)
  }

  // 计算最大空格间距 avaSpace 以及剩余空个数 mod
  let avaSpace = Math.floor(sumSpace / (wordCount - 1)),
    mod = sumSpace % (wordCount - 1)

  // 空格加入字符串
  for (let i = 0; i < res.length - 1; i++) {
    res[i] = res[i] + " ".repeat(avaSpace)
  }

  // 多余的空格加到最后
  return res.join("") + " ".repeat(mod)
}

let text = "  this   is  a sentence "
reorderSpaces(text)
