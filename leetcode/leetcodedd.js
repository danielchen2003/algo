var longestSubstring = function (s, k) {
  const helper = (start, end) => { // 从start到end的区间的最长T长度
      if (end - start + 1 < k) { 	// 区间的长度小于k，不存在满足条件的T串
          return 0;
      }
      const freq = {};  // 统计当前区间的字符的出现次数
      for (let i = start; i <= end; i++) { // 遍历当前区间的字符 统计频次
          if (freq[s[i]] === undefined) {
              freq[s[i]] = 1;
          } else {
              freq[s[i]]++;
          }
      }
      // 在区间长度>=k的前提下，如果start位置上的字符出现的次数小于k
      while (end - start + 1 >= k && freq[s[start]] < k) {
          start++;   // 则T子串肯定不包含这个start字符，start指针右移
      }
      // 在区间长度>=k的前提下，如果end位置上的字符出现的次数小于k
      while (end - start + 1 >= k && freq[s[end]] < k) {
          end--;   // 则T子串肯定不包含这个end字符，end指针左移
      }
      if (end - start + 1 < k) { // 如果区间长度因此而 < k，直接返回0
          return 0;
      }
      for (let i = start; i <= end; i++) { // 遍历当前区间的字符
          if (freq[s[i]] < k) { // 如果在区间内的出现次数 < k，递归考察两侧的区间
              return Math.max(helper(start, i - 1), helper(i + 1, end));
          }
      }
      return end - start + 1; // 当前区间的字符出现次数都 >= k，当前区间满足要求，返回该长度
  };

  return helper(0, s.l

作者：xiao_ben_zhu
链接：https://leetcode.cn/problems/longest-substring-with-at-least-k-repeating-characters/solution/shou-hua-tu-jie-tong-guo-fen-zhi-suo-xia-cnn1/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。