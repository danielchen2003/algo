// var lengthOfLongestSubstring = function (s) {}

// let a = new Set([1, 2, 3])
//先用array index -1  再用set

// var lengthOfLongestSubstring = function (s) {
//   let max = 0
//   let seen = []
//   for (var i = 0; i < s.length; i++) {
//     if (seen.indexOf(s[i]) == -1) {
//       seen.push(s[i])
//     } else {
//       seen.shift()
//       i--
//       continue
//     }
//     max = Math.max(seen.length, max)
//   }
//   return max
// }
// x +y = z

// x= 2
// y =3
//求z=？
var yuanbaosuanshu = function (s) {
  let max = 0
  let memory = [] // [a ,b ,c,d, a, b,c]  
  // [a, b ,c, a] indexOf = 0
  [b]
  for (var i = 0; i < s.length; i++) {
    let currentLetter =s[i]
    if (memory.indexOf(currentLetter) !==-1)  { 
      //帮你找array 里面有没有这个元素出现过  
      //如果memory能找到当前元素就会返回该元素出现第一次的index
      memory.shift();
    }
    if (memory.indexOf(currentLetter) ===-1){
      //如果memory找不到当前元素就会返回-1
      memory.push(currentLetter);
    }  3             1          3            
    max = Math.max(memory.length,max)
  }
  return max
}
let s3 = ""
        s[0] . s[1] 2 3 4       -1
let s = "a      b   c a b c b b"
let s2 = "abcdabcbbabcd"
console.log(yuanbaosuanshu(s))
yuanbaosuanshu(s)
yuanbaosuanshu(s2)

// var lengthOfLongestSubstring = function (s) {
//   let res = 0,
//     temp = []
//   for (let i = 0; i < s.length; i++) {
//     if (temp.indexOf(s[i]) == -1) {
//       //数组中无被遍历的值
//       temp.push(s[i]) //将不重复的值去除
//     } else {
//       temp.shift() //因为有重复值出现，去除第一个元素
//       i-- //控制i的值，将刚才重复的值重新压入数组
//       continue //不再进行res的赋值
//     }
//     res = Math.max(res, temp.length) //Math.max(a, b)选出两个值中较大的那个值
//   }
//   return res
// }
