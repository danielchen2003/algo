function reverseWords(arr) {
  
  const arrStr = arr.join('').split(' ')

  console.log(arrStr)
  
  let reversArr = []
  for (let i = arrStr.length-1; i >= 0; i--) {
    reversArr.push(arrStr[i])
  }
  console.log(reversArr)
  // [ 'practice', '', 'makes', '', 'perfect' ]
  
  let chars = []
    console.log(reversArr)

  for (const el of reversArr.join(' ')) {
    chars.push(el)
  }
  return chars
  
}

console.log(reverseWords([ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ',
                'm', 'a', 'k', 'e', 's', '  ',
                'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]))

