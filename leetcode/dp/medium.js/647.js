function countSubstrings(s) {
  const length = s.length
  const dp = new Array(length).fill(0).map((x) => new Array(length).fill(false))
  let resCount = 0
  // 自下而上，自左向右遍历
  for (let i = length - 1; i >= 0; i--) {
    for (let j = i; j < length; j++) {
      if (s[i] === s[j] && (j - i <= 1 || dp[i + 1][j - 1] === true)) {
        dp[i][j] = true
        resCount++
      }
    }
  }
  return resCount
}


function countSubstrings(s) {
  const length = s.length
  const dp = new Array(length).fill(0).map((x) => new Array(length).fill(false))
  let res = 0
  for(let i = length -1 ; i >= 0 ; i--){
    for(let j = i; j<length; j++){
      if(s[i] !== s[j]) continue
      dp[i][j] = j - i <=2 || dp[i+1][j-1]
      if(dp[i][j]){
        res++
      } 
    }
  }
  return res
}

1public int countSubstrings(String s) {
  2    int length = s.length();
  3    boolean[][] dp = new boolean[length][length];
  4    int count = 0;//回文串的数量
  5    //字符串从后往前判断
  6    for (int i = length - 1; i >= 0; i--) {
  7        for (int j = i; j < length; j++) {
  8            //如果i和j指向的字符不一样，那么dp[i][j]就
  9            //不能构成回文字符串
 10            if (s.charAt(i) != s.charAt(j))
 11                continue;
 12            dp[i][j] = j - i <= 2 || dp[i + 1][j - 1];
 13            //如果从i到j能构成回文串，count就加1
 14            if (dp[i][j])
 15                count++;
 16        }
 17    }
 18    return count;
 19}
 
 
 
 function countSubstrings(s){
   let count =0 
   if(s==null || s.length==1) return 0
   for(let i=0 ; i<s.length ; i++){
     helper(s,i,i)
     helper(s,i,i+1)
   }
   return count
 }
 function helper(s,l,r){
   while(l>=0 && r< s.length && s.chartAt(l--)=== s.chartAt(r++)){
     count ++
   }
 }
 
 
 
 int count = 0;
3
4 public int countSubstrings(String s) {
5 //边界条件判断
6 if (s == null || s.length() == 0)
7 return 0;
8
9 for (int i = 0; i < s.length(); i++) {
10 //回文的长度是奇数
11 extendPalindrome(s, i, i);
12 //回文是长度是偶数
13 extendPalindrome(s, i, i + 1);
14 }
15 return count;
16 }
17
18 //以left和right为中心点，求回文字符串的数量
19 private void extendPalindrome(String s, int left, int right) {
20 while (left >= 0 && right < s.length() && s.charAt(left--) == s.charAt(right++)) {
21 count++;
22 }
23 }