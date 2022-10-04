
const minDistance = (word1, word2) => {
  let m = word1.length
  let n = word2.length
  let dp = new Array(word1.length+1).fill(0).map(x=>new Array(word2.length+1).fill(0))
      for(let i = 0; i <=m; i++) {
        dp[i][0] = i; 
    }
  for(let i=0; i<=n ; i++){
    dp[0][i]= i 
  }
  
  for(let i=1; i<= m; i++){
    for(let j=1; j<= n; j++){
      if(word1[i-1]===word2[j-1]){
        dp[i][j]= dp[i-1][j-1]
      }else{
        dp[i][j] = Math.min(dp[i][j-1]+1, dp[i-1][j]+1, dp[i-1][j-1]+2)
      }
    }
  }
  return dp[m][n]
}
int minDistance(char * word1, char * word2){
  int len1 = strlen(word1);
  int len2 = strlen(word2);
  int dp[len1+1][len2+1];
  for(int i = 0; i <= len1; i++) dp[i][0] = i;
  for(int i = 0; i <= len2; i++) dp[0][i] = i;//定义并初始化
  for(int i = 1; i <= len1; i++)
  {
      for(int j = 1; j <= len2; j++)//枚举字符串中每一个元素
      {
          if(word1[i-1] == word2[j-1])//相同，不需要任意操作
          {
              dp[i][j] = dp[i-1][j-1];
          }
          else//不相同时，可以删除自己或者word2或者都删了
          {
              dp[i][j] = MIN(dp[i][j-1] + 1, MIN(dp[i-1][j-1] + 2, dp[i-1][j] + 1));
          }
      }
  }
  return dp[len1][len2];
}



const minDistance = (word1, word2) => {
  let m = word1.length
  let n = word2.length
  let dp = new Array(word1.length+1).fill(0).map(x=>new Array(word2.length+1).fill(0))
  for(let i=0; i<dp.length; i++){
    dp[i][0]= i 
  }
  for(let i=0; i<dp.length; i++){
    dp[0][i]= i 
  }
  
  for(let i=1; i<= m; i++){
    for(let j=1; j<= n; j++){
      if(word1[i-1]===word2[j-1]){
        dp[i][j]= dp[i-1][j-1]
      }else{
        dp[i][j] = Math.min(dp[i][j-1]+1, dp[i-1][j]+1, dp[i-1][j-1]+2)
      }
    }
  }
  return dp[m][n]
}