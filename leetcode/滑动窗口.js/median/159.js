function longstring(s){
  
  let lookup= {}
  start = 0
        end = 0
        max_len = 0
        counter = 0
        while (end < s.length){
          if (lookup[s[end]]) == 0{
            counter += 1
            lookup[s[end]] += 1
            end +=1
            while counter > 2:
                if lookup[s[start]] == 1:
                    counter -= 1
                lookup[s[start]] -= 1
                start += 1
            max_len = max(max_len, end - start)
          }
                
        }
            
        return max_len

}


先让右指针往后走，所以外层for循环右指针
 var map = [Character:Int]() // 统计滑框内的数据,
var vaildNum = 0 //有效个数
var left = 0 ,

//右指针移动
for right in 0..<nums.count{
    
    //初始化记录所有的值，这个地方根据题目意思变化。
    if map[list[right],default: 0] == 0{
        validCount += 1
    }
    //统计结果代码
    ？？？？？？？

    //左指针右移动条件，和，统计数满足要求等。
    while(validCount满足条件 && left <= right){
        //如果统计最小值在这里统计。
        ？？？？？？？
    }
}

class Solution:
    def problemName(self, s: str) -> int:
        # Step 1: 定义需要维护的变量们 (对于滑动窗口类题目，这些变量通常是最小长度，最大长度，或者哈希表)
        x, y = ..., ...

        # Step 2: 定义窗口的首尾端 (start, end)， 然后滑动窗口
        start = 0
        for end in range(len(s)):
            # Step 3: 更新需要维护的变量, 有的变量需要一个if语句来维护 (比如最大最小长度)
            x = new_x
            if condition:
                y = new_y

            '''
            ------------- 下面是两种情况，读者请根据题意二选1 -------------
            '''
            # Step 4 - 情况1
            # 如果题目的窗口长度固定：用一个if语句判断一下当前窗口长度是否超过限定长度 
            # 如果超过了，窗口左指针前移一个单位保证窗口长度固定, 在那之前, 先更新Step 1定义的(部分或所有)维护变量 
            if 窗口长度大于限定值:
                # 更新 (部分或所有) 维护变量 
                # 窗口左指针前移一个单位保证窗口长度固定

            # Step 4 - 情况2
            # 如果题目的窗口长度可变: 这个时候一般涉及到窗口是否合法的问题
            # 如果当前窗口不合法时, 用一个while去不断移动窗口左指针, 从而剔除非法元素直到窗口再次合法
            # 在左指针移动之前更新Step 1定义的(部分或所有)维护变量 
            while 不合法:
                # 更新 (部分或所有) 维护变量 
                # 不断移动窗口左指针直到窗口再次合法

        # Step 5: 返回答案
        return ...
