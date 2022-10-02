// int maxLen = 0;//用于记录最大不重复子串的长度
//         int left = 0;//滑动窗口左指针
//         for (int i = 0; i < s.length() ; i++)
//         {
//             /**
//             1、首先，判断当前字符是否包含在map中，如果不包含，将该字符添加到map（字符，字符在数组下标）,
//              此时没有出现重复的字符，左指针不需要变化。此时不重复子串的长度为：i-left+1，与原来的maxLen比较，取最大值；

//             2、如果当前字符 ch 包含在 map中，此时有2类情况：
//              1）当前字符包含在当前有效的子段中，如：abca，当我们遍历到第二个a，当前有效最长子段是 abc，我们又遍历到a，
//              那么此时更新 left 为 map.get(a)+1=1，当前有效子段更新为 bca；
//              2）当前字符不包含在当前最长有效子段中，如：abba，我们先添加a,b进map，此时left=0，我们再添加b，发现map中包含b，
//              而且b包含在最长有效子段中，就是1）的情况，我们更新 left=map.get(b)+1=2，此时子段更新为 b，而且map中仍然包含a，map.get(a)=0；
//              随后，我们遍历到a，发现a包含在map中，且map.get(a)=0，如果我们像1）一样处理，就会发现 left=map.get(a)+1=1，实际上，left此时
//              应该不变，left始终为2，子段变成 ba才对。

//              为了处理以上2类情况，我们每次更新left，left=Math.max(left , map.get(ch)+1).
//              另外，更新left后，不管原来的 s.charAt(i) 是否在最长子段中，我们都要将 s.charAt(i) 的位置更新为当前的i，
//              因此此时新的 s.charAt(i) 已经进入到 当前最长的子段中！
//              */
//             if(map.containsKey(s.charAt(i)))
//             {
//                 left = Math.max(left , map.get(s.charAt(i))+1);
//             }
//             //不管是否更新left，都要更新 s.charAt(i) 的位置！
//             map.put(s.charAt(i) , i);
//             maxLen = Math.max(maxLen , i-left+1);
//         }

//         return maxLen;
//       }

var lengthOfLongestSubstring3 = function (s) {
  let map = {}
  let l = 0
  let maxLen = 0
  for (let j = 0; j < s.length; j++) {
    if (map[s[j]]) {
      l = Math.max(l, map[s.charAt(j)] + 1)
    }
    console.log(map)
    map[s[j]] = j
    maxLen = Math.max(maxLen, j - l + 1)
  }
  return maxLen
}

var lengthOfLongestSubstring = function (s) {
  const set = new Set() //判断滑动窗口内是否有重复元素
  let right = 0, //滑动窗口右边界
    j = 0, //滑动窗口左边界
    maxLength = 0
  if (s.length === 0) {
    //极端情况
    return 0
  }
  for (right; right < s.length; right++) {
    if (!set.has(s[right])) {
      //当前元素不在set中 就加入set 然后更新最大长度，right++继续下一轮循环
      set.add(s[right])
      console.log(set)
      maxLength = Math.max(maxLength, set.size)
    } else {
      //set中有重复元素不断让j++ 并删除窗口之外的元素 直到滑动窗口内没有重复的元素
      while (set.has(s[right])) {
        set.delete(s[j])
        j++
      }
      set.add(s[right]) //放心将s[i]加入set中
    }
  }
  return maxLength
}

var lengthOfLongestSubstring = function (s) {
  let set = new Set()
  let left = 0
  let res = 0
  if (s.length === 0) {
    //极端情况
    return 0
  }
  for (let right = 0; right < s.length; right++) {
    if (!set.has(s[right])) {
      set.add(s[right])
      res = Math.max(res, set.size)
    }
    console.log(set)
    while (set.has(s[right])) {
      set.delete(s[left++])
    }
    set.add(s[right])
  }
  return res
}
let s = "abcabcbbdac"

console.log(lengthOfLongestSubstring3(s))
