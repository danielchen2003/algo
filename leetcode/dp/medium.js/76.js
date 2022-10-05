function minWindow(s,  t) {
  2    //把t中的字符全部放到map中
  3    let map = new Map();
  4    for (let ch of t.toCharArray()){
    map.put(ch, map.getOrDefault(ch, 0) + 1);
      }
  5       
  6
  7    int left = 0;//窗口的左边界
  8    int right = 0;//窗口的右边界
  9
 10    //满足条件的窗口开始位置
 11    int strStart = 0;
 12    //满足条件的窗口的长度
 13    int windowLength = Integer.MAX_VALUE;
 14
 15    while (right < s.length()) {
 16        //记录右指针扫描过的字符
 17        char rightChar = s.charAt(right);
 18        //如果右指针扫描的字符存在于map中，就减1
 19        if (map.containsKey(rightChar))
 20            map.put(rightChar, map.getOrDefault(rightChar, 0) - 1);
 21        //记录之后右指针要往右移
 22        right++;
 23
 24        //检查窗口是否把t中字符全部覆盖了，如果覆盖了，要移动窗口的左边界
 25        //找到最小的能全部覆盖的窗口
 26        while (check(map)) {
 27            //如果现在窗口比之前保存的还要小，就更新窗口的长度
 28            //以及窗口的起始位置
 29            if (right - left < windowLength) {
 30                windowLength = right - left;
 31                strStart = left;
 32            }
 33            //移除窗口最左边的元素，也就是缩小窗口
 34            char leftChar = s.charAt(left);
 35            if (map.containsKey(leftChar))
 36                map.put(leftChar, map.getOrDefault(leftChar, 0) + 1);
 37            //左指针往右移
 38            left++;
 39        }
 40    }
 41    //如果找到合适的窗口就截取，否则就返回空
 42    if (windowLength != Integer.MAX_VALUE)
 43        return s.substring(strStart, strStart + windowLength);
 44    return "";
 45}
 46
 47//检查窗口是否把字符串t中的所有字符都覆盖了，如果map中所有
 48// value的值都不大于0，则表示全部覆盖
 49private boolean check(Map<Character, Integer> map) {
 50    for (int value : map.values()) {
 51        //注意这里的value是可以为负数的，为负数的情况就是，相同的字符右
 52        // 指针扫描的要比t中的多，比如t是"ABC"，窗口中的字符是"ABBC"
 53        if (value > 0)
 54            return false;
 55    }
 56    return true;
 57}