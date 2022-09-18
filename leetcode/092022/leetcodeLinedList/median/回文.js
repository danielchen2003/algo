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
  let regex = 
}