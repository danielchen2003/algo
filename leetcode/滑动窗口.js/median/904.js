function ttt(tree) {
  let last_fruit = -1
  let second_last_fruit = -1
  let last_count = 0
  let cur_max = 0
  let max = 0

  for (let fruit of tree) {
    if (fruit == last_fruit || fruit == second_last_fruit) {
      cur_max += 1
    } else {
      cur_max = last_count + 1
    }
    if (fruit == last_fruit) {
      last_count += 1
    } else {
      last_count = 1
    }
    if (fruit !== last_fruit) {
      second_last_fruit = last_fruit
      last_fruit = fruit
    }
    console.log([last_fruit, second_last_fruit])
    max = Math.max(cur_max, max)
  }

  return max
}
let fruits = [3, 1]
ttt(fruits)
fruits = [3,3,3,1,2,1,1,2,3,3,4]
4
[333,1,2,1,1,1,1,2,3]
     1 2 1 1 1 1 2 3
4 7 2
只需要记录最后出现过的元素
和最后出现过元素的连续数值 last_countinue_fruit_count
一旦出现新蔬果把last 放入second last
新水果放入last 记录连续数值
一旦出现新水果
就要更新当前最大


如果当前水果是最后两个出现的最大值+1 
如果不是 就是新水果 lastcount +1 
如果水果是最后出现过的水果 lastcount ++ 
如果不是 最后一个水果count  =1   //可能是second friunt 也有可能是新水果
如果不是最后水果
换位置w
维持的变量时最后出现水果 和他的连续个数
最后第二次出现水果的名字 
当前最大
全局最大

function ff (fruits){
  let last_fruit = -1 
  let second_last = -1 
  let res = 0 
  let curmax = 0 
  let last_fruit_continue_count = 0
  for(let fruit of fruits){
    if(fruit == last_fruit || fruit == second_last){
      curmax ++
    }else{
      curmax = last_fruit_continue_count +1//碰到新水果了最后连续的数字+1
    }
    if(fruit ===last_fruit){
      last_fruit_continue_count ++
    }else{
      last_fruit_continue_count =1
    }
    if(fruit !==last_fruit){
      second_last_fruit = last_fruit
      last_fruit = fruit
      
    }
    res= Math.max(res,curmax)
  }
  return res
}
