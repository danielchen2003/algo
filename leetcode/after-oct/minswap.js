function minSteps1(str) {
  if (str == null || str == "") {
    return 0
  }
  // let str = s.toCharArray()
  let step1 = 0
  let gi = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "G") {
      step1 += i - gi++
    }
  }
  let step2 = 0
  let bi = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "B") {
      step2 += i - bi++
    }
  }
  return Math.min(step1, step2)
}

function minSteps2(str) {
  let res = 0
  let gi = 0
  let res2 = 0
  let bi = 0

  for (let x = 0; x < str.length; x++) {
    console.log(str[x])
    if (str[x] == "G") {
      res += x - gi
      gi++
    } else {
      res += x - bi
      bi++
    }
  }
  console.log(res, res2)
  min = Math.min(res, res2)
  return min
}

let s = ["G", "G", "B", "G", "B"]
console.log(minSteps2(s))

// public static int minSteps2(String s) {
//   if (s == null || s.equals("")) {
//     return 0;
//   }
//   char[] str = s.toCharArray();
//   int step1 = 0;
//   int step2 = 0;
//   int gi = 0;
//   int bi = 0;
//   for (int i = 0; i < str.length; i++) {
//     if (str[i] == 'G') { // 当前的G，去左边   方案1
//       step1 += i - (gi++);
//     } else {// 当前的B，去左边   方案2
//       step2 += i - (bi++);
//     }
//   }
//   return Math.min(step1, step2);
// }
