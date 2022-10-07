// function sort(a, b) {
//   a.sort((x, y) => {
//     return x - y
//   })
//   b.sort((x, y) => {
//     return x - y
//   })
//   console.log(a)
//   console.log(b)
// }
// console.log(sort(a, b))
// ;[1, 2, 5, 6][(2, 4, 7, 8)]
// [a[i]= b [i]]
// =
// < a++
// < a++
// a=2 !==size
// b =0 !==b.size false buxing

let a = [3, 5, 1, 8, 6, 4, 9, 9, 1]
let b = [4, 0, 0, 1, 8, 5, 5, 2, 1]
function canArrange(A, B) {
  let teamA = 0
  let teamB = 0
  A.sort((a, b) => a - b)
  B.sort((a, b) => a - b)
  for (let i = 0; i < A.length; ++i) {
    if (A[i] < B[i]) {
      teamA++
    } else if (A[i] > B[i]) {
      teamB++
    }
  }
  // console.log(teamA, teamB)
  if (teamA == A.length) {
    return true
  }
  return teamB == B.length
}
// console.log(canArrange(a, b))

function kteam(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].sort((a, b) => a - b)
  }
  let k = 1
  arr.sort((a, b) => a[0] - b[0])
  // let res = 1
  let dp = new Array(arr.length).fill(1)
  // console.log(arr)
  // sort数组
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (canArrange(arr[i], arr[j])) {
        dp[i] = Math.max(dp[i - 1], dp[j] + 1)
        // res = Math.max(dp[i], res)
        console.log(dp)
        k = Math.max(dp[i], k)
      }
    }
  }

  console.log(dp[arr.length - 1] == arr.length)

  return k
}
let c = [
  [1, 2, 3],

  [3, 4, 5],
  [3, 4, 5],//前面最多几个足球队可以形成排列 目前是1 个因为第二排不行
  [10, 11, 12],
]
console.log(kteam(c))
// bool canArrange(vector<int> &A, vector<int> &B) {
//   int teamA = 0;
//   int teamB = 0;

//   // First check if two teams can arrange photo
//   for (int i = 0; i < A.size(); ++i) {
//       if (A[i] < B[i]) {
//           teamA++;
//       } else if (B[i] < A[i]) {
//           teamB++;
//       }
//   }

//   // team A is in front
//   if (teamA == A.size()) {
//       return true;
//   }

//   // team B is in front
//   return teamB == B.size();
// }

// int findKTeams(vector<vector<int>> teams) {
//   int k = 1;

//   // sort all teams separately by their player height
//   for (int i = 0; i < teams.size(); ++i) {
//       sort(teams[i].begin(), teams[i].end());
//   }

//   // sort teams based on height in increasing order
//   sort(teams.begin(), teams.end());

//   int n = (int)teams.size();

//   vector<int> dp(n, 1);

//   for (int i = 1; i < n; ++i) {
//     check current team with previous team
//     if they can arrange photo choose both teams
//     then current team is new previous team
//     for (int j = 0; j < i; ++j) {
//         if (canArrange(teams[i], teams[j])) {
//             dp[i] = max(dp[i], dp[j] + 1);
//             k = max(dp[i], k);
//         }
//     }
// }

//   /*
//           step 1
//           ------
//           1 2 3 <- previous
//           2 3 4 <- current CAN ARRANGE
//           2 3 4
//           4 5 6

//           step 2
//           ------
//           1 2 3  <- previous
//           2 3 4
//           2 3 4 <- current CAN ARRANGE
//           4 5 6

//           step 3
//           ------
//           1 2 3 <- previous
//           2 3 4
//           2 3 4
//           4 5 6 <- current CAN ARRANGE

//           step 4
//           ------
//           1 2 3
//           2 3 4  <- previous
//           2 3 4  <- current CAN NOT ARRANGE
//           4 5 6

//           step 5
//           ------
//           1 2 3
//           2 3 4  <- previous
//           2 3 4
//           4 5 6  <- current CAN ARRANGE

//          step 6
//           ------
//           1 2 3
//           2 3 4
//           2 3 4  <- previous
//           4 5 6  <- current CAN ARRANGE

//   */

//   return k;
// }
