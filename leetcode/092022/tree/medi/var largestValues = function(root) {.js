var largestValues = function(root) {
  if (!root) {return []}
  let q =[];
  let res =[]
  q.push(root)
  while(q.length !== 0){
    let curLenth = q.length
    let levelMax = -Infinity
    for(let i=0; i < curLenth; i++){
      let cur = q.shift()
      levelMax = Math.max(levelMax,cur.val)
      cur.left && q.push(cur.left)
      cur.right && q.push(cur.right)
    }
    res.push(levelMax)
  }
  return res 
};