var findDisappearedNumbers = function(nums) {
  let set = new Set(nums)
  for(let i =0 ; i<nums.length ;i++){
    if(set.)
  }
};
var findDisappearedNumbers = function(nums) {
  //哈希表
  let res = [];
  let set = new Set(nums);//Set存储
  let n = nums.length;
  for(let i = 1; i <= n; i++) {
      if(!set.has(i)) {//Set中不存在的即是数组中消失的数字
          res.push(i);
      }
  }
  return res;
};
