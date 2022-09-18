var isPalindrome = function (s) {
  var str = s.toLocaleLowerCase().replace(/[^a-z0-9]/g, "")
  var len = str.length
  var j = len - 1
  if (str === "") {
    return true
  }
  for (var i = 0; i < len; i++) {
    if (str[i] !== str[j]) {
      return false
    }
    if (i >= j) {
      return true
    }
    j--
  }
}

var isPalindrome = function (s) {
  let regex = /^[a-z0-9]/g
  s.replace(regex, "")
  let j = s.length - 1
  let i = 0
  while (i < j) {
    if (s[i] !== s[j]) {
      return false
    }
  }
  return true
}
