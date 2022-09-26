// int subarraySum(vector<int>& nums, int k) {
//   unordered_map<int,int> mp={{0,1}};  //初始值， 如果是求个数， 代表个数就是1， 如果是求长度， 代表index 为-1
//   int ans=0;
//   int sum=0;

//   for(auto& a:nums){
//       sum+=a;             //根据题意有变化，比如奇数个数的1248题。
//       int cur=sum-k;    //cur值根据题意进行改变， 求和是sum-k，求倍数就是 sum % k
//       if(mp.count(cur)){
//           ans+=mp[cur];
//       }
//       mp[sum]++;  //mp[cur或者sum]根据题意改变， 求长度就是sum的index， 求个数，一般要变化为cur的old个数++。
//   }
//   return ans;
// }

// function subarraySum(nums, k) {
//   let res = 0
//   let sum = 0
//   let map = new Map()
//   map.set(0, 1)

//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i]
//     console.log(map)
//     let cur = sum - k
//     if (map.has(cur)) {
//       res += map.get(cur)
//     }
//     // map.get(sum)
//     // map.set(sum, )
//     map.set(sum, map.get(sum) === undefined ? 0 : map.get(sum) + 1)
//   }
//   return res
// }

var subarraySum = function (nums, k) {
  //法一：暴力,先确定起始值再确定终点值，用时3960ms
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    let sum = 0
    for (let j = i; j < nums.length; j++) {
      sum += nums[j]
      if (sum === k) {
        count++
      }
    }
  }
  return res
}
let nums = [1, 2, 3]
let k = 3
console.log(subarraySum(nums, k))
var subarraySum = function (nums, k) {
  let res = 0

  for (let i = 0; i < nums.length; i++) {
    let sum = 0
    for (let j = i; j < nums.length; j++) {
      if (sum + nums[j] === k) {
        res++
      }
      sum = sum + nums[j]
    }
  }
  return res
}

var subarraySum = function (nums, k) {
  let res = 0

  for (let i = 0; i < nums.length; i++) {
    let sum = 0
    for (let j = i; j < nums.length; j++) {
      if (sum + nums[j] === k) {
        res++
      }
      sum = sum + nums[j]
    }
  }
  return res
}
