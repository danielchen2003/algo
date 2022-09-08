// var isValid = function(s) {
//   const stack = [], 
//       map = {
//           "(":")",
//           "{":"}",
//           "[":"]"
//       };
//   for(const x of s) {
//       if(x in map) {
//           stack.push(x);
//           continue;
//       };
//       if(map[stack.pop()] !== x) return false;
//   }
//   return !stack.length;
// };



let isValid = function(s) {
  let stack = [];
  let map = {
   '(':')',
   '[':']',
   '{':'}',
 }
  for (const c of s){
    //! 如果有 c 那么就 推进去并且继续检查下一个
    if (c in map){
      stack.push(c)   //!推不进去因为它不是key
      continue;
    }
    if (map[stack.pop()] !==c)//这时候是反括号
    return false;
    
      
    
  }
  if (stack.length ===0) return true;
  else return false;
}

console.log(isValid('()()()()()('));

