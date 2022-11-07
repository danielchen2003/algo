function wordCountEngine4(document) {
  const wordMap = {}
  const wordList = document.split(" ")
  let maxCount = 0
  for (let i = 0; i < wordList.length; i++) {
    let word = wordList[i].toLowerCase()
    const charArray = []
    for (let j = 0; j < word.length; j++) {
      if (word[j] >= "a" && word[j] <= "z") {
        charArray.push(word[j])
      }
    }

    let cleanWord = charArray.join("")
    if (cleanWord.length < 1) {
      continue
    }

    let count = 0
    if (cleanWord in wordMap) {
      count = wordMap[cleanWord]
      count++
    } else {
      count = 1
    }
    if (count > maxCount) {
      maxCount = count
    }
    wordMap[cleanWord] = count
  }
  const resultBucket = new Array(maxCount)
  for (let i = 0; i < maxCount; i++) {
    resultBucket[i] = null
  }
  console.log(wordMap)
  for (const word in wordMap) {
    count = wordMap[word]
    let wordCountList = resultBucket[count - 1]
    if (wordCountList == null) {
      wordCountList = []
    }
    wordCountList.push(word)
    resultBucket[count - 1] = wordCountList
    console.log(resultBucket)
  }

  const result = []
  for (let i = maxCount - 1; i >= 0; i--) {
    wordCountList = resultBucket[i]
    if (wordCountList === null) {
      result.push(null)
    }
    for (let j = 0; j < wordCountList.length; j++) {
      result.push([wordCountList[j], (i + 1).toString()])
    }
  }
  console.log(result)
  return result
}

function wordCountEngine(doc) {
  let docArr = doc
    .toLowerCase()
    .replace(/[^a-z\s]/g, "")
    .replace(/\s\s+/g, " ")
    .split(" ")

  let len = docArr.length
  let i
  let val
  let map = {} // the occurrence of words
  for (i = 0; i < len; i++) {
    let val = docArr[i]
    if (map[val] === undefined) {
      map[val] = 1
    } else {
      map[val] = map[val] + 1
    }
  }
  // console.log(map);

  let key
  let rtnArray = []
  // the max occurrence is the length of words' array
  for (i = len - 1; i > -1; i--) {
    console.log(i)
    for (key in map) {
      if (map.hasOwnProperty(key)) {
        val = map[key]
        if (val === i) {
          rtnArray.push([key, i])
          delete map.key
        }
      }
    }
  }
  console.log(rtnArray)
  return rtnArray
}

wordCountEngine(
  "Practice makes perfect. you'll only get Perfect by practice. just practice!"
)

// const myMap = new Map()
// myMap.set("a", 3)
// myMap.set("c", 4)
// myMap.set("b", 1)
// myMap.set("d", 2)

// // sort by value
// const mapSort1 = [...myMap.entries()].sort((a, b) => b[1] - a[1])
// console.log(mapSort1)
// let res = []
// for (let [key, value] of mapSort1) {
//   res.push([key, value])
// }
// console.log(res)

function wordcount(str) {
  str = str.replace(/[^\w\s]/g, "").replace(/\s+/g, " ")
  console.log(str)
}

let document =
  "Practice makes perfect. you'll only get Perfect by practice. just practice!"
// wordcount4(document)

// let message = "Learning is fun!"
// let onlyLettersArray = message
//   .split(" ")
//   .filter((char) => /[a-zA-Z]/.test(char))
// console.log(onlyLettersArray)

// let message = "Learning is fun!"
// let letterMessage = message.replace(/[^a-zA-Z]/gm, "")
// console.log(letterMessage)

// for (let i = 0; i < wordList.length; i++) {
//   let word = wordList[i].toLowerCase()
//   const charArray = []
//   for (let j = 0; j < word.length; j++) {
//     if (word[j] >= "a" && word[j] <= "z") {
//       charArray.push(word[j])
//     }
//   }
// }

function wordCountEngine(doc) {
  let docArr = doc
    .toLowerCase()
    .replace(/[^a-z\s]/g, "")
    .replace(/\s\s+/g, " ")
    .split(" ")

  let maxCount = 0
  let seen = new Map()

  for (let x of docArr) {
    seen.set(x, (seen.get(x) || 0) + 1)
    maxCount = Math.max(maxCount, seen.get(x))
  }
  console.log(seen)
  console.log(maxCount)
  for (let i = maxCount; i >= 0; i--) {
    for (let [key, value] of seen) {
      if (seen.hasOwnProperty(value)) {
        if (value === i) {
          res.push([key, value])
        }
      }
    }
  }
}

let document2 =
  "Practice makes perfect. you'll only get Perfect by practice. just practice!"
wordCountEngine4(document2)

let set = new Set()
set.add([1, 2])

set.add([1, 2])
console.log(set)

var numUniqueEmails = function (emails) {
  let emailSet = new Set()
  for (let e of emails) {
    let [local, domain] = e.split("@")
    console.log(local)
    local = local.split("+")[0]
    local.replace(".", "")
    emailSet.add(local + domain)
  }
  return emailSet.length
}

let emails = [
  "test.email+alex@leetcode.com",
  "test.e.mail+bob.cathy@leetcode.com",
  "testemail+david@lee.tcode.com",
]
numUniqueEmails(emails)
