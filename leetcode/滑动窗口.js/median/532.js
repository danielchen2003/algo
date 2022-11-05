function validateIP(ip) {
  let length = ip.length
  let left_pointer = 0

  let count_dot = 0

  for (let right_pointer = 0; right_pointer < length; right_pointer++) {
    if (ip[right_pointer] === ".") {
      count_dot++

      let curNum = ip.substring(left_pointer, right_pointer) //convert substring

      if (!Number.isInteger(+curNum)) {
        //string Number.isInteger(num)
        return false
      }
      if (+curNum > 255 || +curNum < 0) {
        return false
      }

      left_pointer = right_pointer + 1
    }
  }

  return count_dot === 3 ? true : false
  // your code goes here
}

let ip1 = "..1.1"
// console.log(validateIP(ip1))
console.log(isNaN("12s"))
