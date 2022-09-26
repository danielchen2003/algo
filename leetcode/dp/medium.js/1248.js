var numberOfSubarrays = function (nums, k) {
  if (nums.length == 0) return 0

  let count = 0
  let map = new Map()
  let oddnum = 0
  map.put(0, 1)
  for (let i = 0; i < nums.length; i++) {
    oddnum += oddnum % 2 === 1 ? 1 : 0
    if (map.has(oddnum - k)) {
      count += map.get(odnum - k)
    }
    map.set(oddnum, map.has(oddnum) ? 0 : map.get(oddnum + 1))
  }
  return count
}

// k
// const numberOfSubarrays = (nums, k) => {
//   let n = nums.length,
//     counts = new Array(n + 1).fill(0).fill(1, 0, 1),
//     oddCount = 0,
//     result = 0
//   for (let i = 0; i < n; i++) {
//     oddCount += nums[i] & 1
//     result += oddCount >= k ? counts[oddCount - k] : 0
//     counts[oddCount] += 1
//   }
//   console.log(counts)
//   return result
// }

// class Solution {
//   public int numberOfSubarrays(int[] nums, int k) {

//       if (nums.length == 0) {
//           return 0;
//       }
//       HashMap<Integer,Integer> map = new HashMap<>();
//       //统计奇数个数，相当于我们的 presum
//       int oddnum = 0;
//       int count = 0;
//       map.put(0,1);
//       for (int x : nums) {
//           // 统计奇数个数
//           oddnum += x & 1;
//           // 发现存在，则 count增加
//           if (map.containsKey(oddnum - k)) {
//            count += map.get(oddnum - k);
//           }
//           //存入
//           map.put(oddnum,map.getOrDefault(oddnum,0)+1);
//       }
//       return count;
//   }
// }

class Solution {
  public int numberOfSubarrays(int[] nums, int k) {
      int len = nums.length;
      int[] map = new int[len + 1];
      map[0] = 1;
      int oddnum = 0;
      int count = 0;
      for (int i = 0; i < len; ++i) {
          //如果是奇数则加一，偶数加0，相当于没加
          oddnum += nums[i] & 1;
          if (oddnum - k >= 0) {
              count += map[oddnum-k];
          }
          map[oddnum]++;
      }
      return count;
  }
}
var numberOfSubarrays = function (nums, k) {
  let count = 0 //数有几个奇数
  let map = new Map()
  map.set(0, 1)
  let preOdd = 0
  for (var i = 0; i < nums.length; i++) {
    //判断是不是奇数 统计所有奇数个数
    preOdd += nums[i] & 1
    //oushu +0  jishu +1
    if (map.has(preOdd - k)) {
      count += map.get(preOdd - k)
    }
    if (!map.has(preOdd)) {
      map.set(preOdd, 1)
    } else {
      map.set(preOdd, map.get(preOdd) + 1)
    }
  }
  return count
}
//            1   2  2  3  4

// nums = [1,1,2,1,1], k = 3
//   (1, 1, 2, 1)
// ][(1, 2, 1, 1)]
// int n = nums.length;
// int[] cnt = new int[n + 1];
// int odd = 0, ans = 0;
// cnt[0] = 1;
// for (int i = 0; i < n; ++i) {
//     odd += nums[i] & 1;
//     ans += odd >= k ? cnt[odd - k] : 0;
//     cnt[odd] += 1;
// }
// return ans;
// }

var numberOfSubarrays4 = function (nums, k) {
  let count = 0 //数有几个奇数
  let map = new Map()
  map.set(0, 1)
  //01 表示 0个奇数已经出现了一次
  let preOdd = 0
  for (var i = 0; i < nums.length; i++) {
    //判断是不是奇数 统计所有奇数个数
    preOdd += nums[i] & 1
    console.log(preOdd)
    //oushu +0  jishu +1
    //如果前面已经出现过奇数数量-k 的记录的话那么说明后面的奇数一定达标了

    if (map.get(preOdd - k) >= 0) {
      count += map.get(preOdd - k)
    }
    if (!map.has(preOdd)) {
      map.set(preOdd, 1)
    } else {
      map.set(preOdd, map.get(preOdd) + 1)
    }
  }
  console.log(map)
  return count
}
//  1  2   2  3  4

var numberOfSubarrays5 = function (nums, k) {
  let count = 0
  let map = new Map()
  let preOdd = 0
  map.set(0, 1) //
  nums.forEach((num, i) => {
    preOdd += num & 1
    if (map.has(preOdd - k) && map.get(preOdd - k) >= 0) {
      //如果有足够的odd
      count += map(preOdd - k)
    }
    //添加odd数量
    map.set(preOdd, !map.has(preOdd) ? 1 : map.get(preOdd) + 1)
  })
  return count
}

var numberOfSubarrays6 = function (nums, k) {
  let len = nums.length
  let map = new Array(nums.length + 1)
  map[0] = 1
  let oddnum = 0
  let count = 0
  for (var i = 0; i < len; ++i) {
    oddnum += nums[i] & 1
    if (oddnum - k >= 0) {
      count += map[oddnum - k]
    }
    map[oddnum]++
  }
  return count
}

let nums = [1, 1, 2, 1, 1],
  // [0 1   1 1  2 2  3 1  4 1 ]
  // [3-3==0]
  // [4-3==1]
  // 2
  k = 3
console.log(numberOfSubarrays6(nums, k))
