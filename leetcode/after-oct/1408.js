var stringMatching = function (words) {
  var s = words.join("/")
  console.log(s)
  var res = []
  for (i in words) {
    if (s.indexOf(words[i]) != s.lastIndexOf(words[i])) {
      console.log("diyici" + s.indexOf(words[i]))
      console.log("zui" + s.lastIndexOf(words[i]))
      res.push(words[i])
    }
  }
  return res
}
let words = ["mass", "as", "hero", "superhero"]
console.log(stringMatching(words))
