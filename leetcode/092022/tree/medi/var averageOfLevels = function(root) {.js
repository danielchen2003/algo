var averageOfLevels = function(root) {
  let res =[]
  let q = []
  q.push(root)
  while(q.length!==0){
      let curSize = q.length
      let curLevelArr= 0
      for(let i =curSize; i>=0; i--){
          let cur = q.shift()
          curLevelArr += cur.val 
          cur.left && q.push(cur.left)
          cur.right && q.push(cur.right)
      }
  
  res.push(curLevelArr/curSize)

  }
  return res
};


var averageOfLevels = function(root) {
  //层级平均值
  let res=[],queue=[];
  queue.push(root);
  while(queue.length&&root!==null){
      //每一层节点个数
      let length=queue.length;
      //sum记录每一层的和
      let sum=0;
      for(let i=0;i<length;i++){
          let node=queue.shift();
          sum+=node.val;
          node.left&&queue.push(node.left);
          node.right&&queue.push(node.right);
      }
      //每一层的平均值存入数组res
      res.push(sum/length);
  }
  return res;
};


var averageOfLevels = function(root) {
  let res =[]
  let q = []
  q.push(root)
  while(q.length!==0){
      let curSize = q.length
      let curLevelArr= []
      for(let i=0;i<curSize;i++){
          let cur = q.shift()
          curLevelArr.push(cur.val)
          cur.left && q.push(cur.left)
          cur.right && q.push(cur.right)
      }
  let sum =curLevelArr.reduce((prev,cur)=>prev+cur,0)
  res.push(sum/(curSize))

  }
  return res
};



