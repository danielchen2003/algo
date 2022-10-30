// function reverseWords(arr):
//     # reverse all characters:
//     n = arr.length
//     mirrorReverse(arr, 0, n-1)

//     # reverse each word:
//     wordStart = null
//     for i from 0 to n-1:
//         if (arr[i] == ' '):
//             if (wordStart != null):
//                 mirrorReverse(arr, wordStart, i-1)
//                 wordStart = null
//         else if (i == n-1):
//             if (wordStart != null):
//                 mirrorReverse(arr, wordStart, i)
//         else:
//             if (wordStart == null):
//                 wordStart = i

//     return arr

// # helper function - reverses the order of items in arr
// # please note that this is language dependent:
// # if are arrays sent by value, reversing should be done in place

// function mirrorReverse(arr, start, end):
//     tmp = null
//     while (start < end):
//         tmp = arr[start]
//         arr[start] = arr[end]
//         arr[end] = tmp
//         start++
//         end--

//
// 是空格
// 起始位是不是 null

var reverseWords3 = function (arr) {
  let n = arr.length
  reverse(arr, 0, n - 1)
  let wordStart = null
  for (let i = 0; i < n; i++) {
    if (arr[i] === " ") {
      //[ab_b] => [ba_]
      reverse(arr, wordStart, i - 1)
      wordStart = null
    } else if (i == n - 1) {
      if (wordStart !== null) {
        reverse(arr, wordStart, i)
      }
    } else {
      if (wordStart == null) {
        wordStart = i
      }
    }
  }
  console.log(arr)
  return arr
  function reverse(arr, start, end) {
    while (start < end) {
      let temp = arr[start]
      arr[start] = arr[end]
      arr[end] = temp
      start++
      end--
    }
    return arr
  }
}

public void reverseWords(char[] s) {
  // Three step to reverse
  // 1, reverse the whole sentence
  reverse(s, 0, s.length - 1);
  // 2, reverse each word
  int start = 0;
  int end = -1;
  for (int i = 0; i < s.length; i++) {
      if (s[i] == ' ') {
          reverse(s, start, i - 1);
          start = i + 1;
      }
  }
  // 3, reverse the last word, if there is only one word this will solve the corner case
  reverse(s, start, s.length - 1);
}

public void reverse(char[] s, int start, int end) {
  while (start < end) {
      char temp = s[start];
      s[start] = s[end];
      s[end] = temp;
      start++;
      end--;
  }
}

function reverseWords(arr) {
  console.log(s);
  reverse(arr, 0, arr.length - 1)
  let start = 0
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] == " ") {
      reverseWords(arr, start, i - 1)
      start = i + 1
    }
  }
  reverseWords(arr, start, arr.length - 1)

  function reverse(arr, start, end) {
    while (start < end) {
      let temp = arr[start]
      arr[start] = arr[end]
      arr[end] = temp
      start++
      end--
    }
  }
  return arr
}

let s = [
  "t",
  "h",
  "e",
  " ",
  "s",
  "k",
  "y",
  " ",
  "i",
  "s",
  " ",
  "b",
  "l",
  "u",
  "e",
  " ",
  " ",
]
reverseWords(s)
