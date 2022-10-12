//  // 排除异常的边界情况，也限定了模式串的长度
//  if(s1.size() > s2.size()) return false;

//  // 匹配采用的窗口大小为模式串大小
//  int windowSize = s1.size();

//  // 模式串的字典：可以看做一种频率分布
//  vector<int> hashmap1(26, 0);
//  // 动态更新的匹配窗口字典
//  vector<int> hashmap2(26, 0);

//  // 构建字典
//  for(int i = 0; i < windowSize; i++) {
//      hashmap1[s1[i] - 'a']++;
//      hashmap2[s2[i] - 'a']++;
//  }
let pathSum = function (root, targetSum) {
  if (root === null) return []
  let nodeArr = [root]
  let resArr = [] // 记录符合目标和的返回路径
  let tempArr = [[]] // 对应路径
  let countArr = [0] //对应和
  while (nodeArr.length) {
    let curNode = nodeArr.shift()
    let curVal = countArr.shift()
    let curNodeArr = tempArr.shift()
    curVal += curNode.val
    curNodeArr.push(curNode.val)
    // 为叶子结点，且和等于目标数，将此次结果数组push进返回数组中
    if (
      curNode.left === null &&
      curNode.right === null &&
      curVal === targetSum
    ) {
      resArr.push(curNodeArr)
    }
    // 左节点，将当前的和及对应路径也对应记录下来
    if (curNode.left) {
      nodeArr.push(curNode.left)
      countArr.push(curVal)
      tempArr.push([...curNodeArr])
    }
    // 右节点，将当前的和及对应路径也对应记录下来
    if (curNode.right) {
      nodeArr.push(curNode.right)
      countArr.push(curVal)
      tempArr.push([...curNodeArr])
    }
  }
  return resArr
}
//  // 对于每一轮滑窗查询，如果两个字典相等(频率分布一致)，则命中
//  for(int i = windowSize; i < s2.size(); i++) {
//      // 两个字典相等(频率分布一致)，则命中
//      if(hashmap1 == hashmap2) return true;

//      // 否则，向右滑窗：滑窗对于 hash 表的操作变为对应频率的增减
//      hashmap2[s2[i - windowSize] - 'a']--;
//      hashmap2[s2[i] - 'a']++;
//  }

//  // 整个算法采用左闭右开区间，因此最后还有一个窗口没有判断
//  return hashmap1 == hashmap2;
var isEqual = function (arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      return false
    }
  }
  return true
}
var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false

  let windowSize = s1.length

  let hashmap1 = new Array(26).fill(0)
  let hashmap2 = new Array(26).fill(0)

  for (let i = 0; i < windowSize; i++) {
    hashmap1[s1[i].charCodeAt() - "a".charCodeAt()]++
    hashmap2[s2[i].charCodeAt() - "a".charCodeAt()]++
  }
  console.log(s1[1] - "a")
  for (let i = windowSize - 1; i < s2.length; i++) {
    if (isEqual(hashmap1, hashmap2)) return true
    hashmap2[s2[i - windowSize].charCodeAt() - "a".charCodeAt()]--
    hashmap2[s2[i].charCodeAt() - "a".charCodeAt()]++
  }

  return isEqual(hashmap1, hashmap2)
}

let s1 = "ab",
  s2 = "eidboaoo"
console.log(checkInclusion(s1, s2))
