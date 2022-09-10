var inorderTraversal = function (root) {
  const res = []
  const stk = []
  //能往下走并且stack有东西就继续
  while (root || stk.length) {
    //有root 就push 进stack
    while (root) {
      stk.push(root)
      root = root.left
    }
    //root到下一个点

    root = stk.pop()
    //推出来
    res.push(root.val)
    //到右边去
    root = root.right
  }
  return res
}


        4
      2    6
    1  3    5  7
    
  stack = []
  res = []
  
  先序 
  stack = []
  res = [4,2,1,3,6,5,7]
  //？ 这个打印走的路径
  
  var preorderTraversal = function(root) {
    /*//递归
    var res = [];
    dfs(root);
    return res;
    function dfs(root){
        if(!root) return;
        res.push(root.val);
        dfs(root.left);
        dfs(root.right);
    }*/
    var res = [];
    if(!root) return res;
    //手动把root推进去
    var stack = [root];
    while(stack.length !== 0){
        var node = stack.pop();
        res.push(node.val);
        if(node.right){
            stack.push(node.right);
        }
        if(node.left){
            stack.push(node.left);
        }
    }
    return res;
};


  
  中序
  左边没有完就推进去
  stack = []
  res = [1,2,3,4,5,6,7]
    //？ 这个打印binary tree 从小到大递增
    
    var inorderTraversal = function(root) {
      const res = [];
      const stk = [];
      while (root || stk.length) {
          while (root) {
              stk.push(root);
              root = root.left;
          }
          root = stk.pop();
          res.push(root.val);
          root = root.right;
      }
      return res;
  };
  

  
  hou序
  左边没有完就推进去
  stack = [4,2,3,null,null]
  res = [1,3,2,5,7,6,4]
  
  
  var postorderTraversal = function(root) {
    if(!root) return []
    const stack = [root]
    const res = []
    while(stack.length){
        p = stack.pop()
        res.push(p.val)
        if(p.left) stack.push(p.left)
        if(p.right) stack.push(p.right)

    }
    return res.reverse()
};




var postorderTraversal = function(root) {
  if(!root) return []
  let ans = []
  let stack = []
  // 当前遍历节点
  let cur = root
  while(stack.length!==0  || cur!== null){
      // 遍历左子树，压入栈中
      while(cur){  
          stack.push([cur,0])
          cur = cur.left
      }
      let [node, flag] = stack.pop()
      if(!flag){
          // 如果当前没有遍历过右子树
          // 重新压回栈中，并遍历右子树
          stack.push([node, 1])
          cur = node.right
      }else{
          // flag 为 1，则第三次访问到该节点，后序遍历输出
          ans.push(node.val)
      }
  } 
  return ans
};



  
  
  
     //？ 这个打印tre的底部优先
     
     //！ 退出参数
     //？传参数
     //单层逻辑
     /输入跟节点  输出路径
     
     
     // 时间复杂度O(n),n为节点个树，空间复杂度O(n)，显示栈的空间开销

// 前序遍历：中左右
// 压栈顺序：右左中
var preorderTraversal = function(root, res = []) {
  const stack = [];
  if (root) stack.push(root);
  while(stack.length) {
      const node = stack.pop();
      if(!node) {
          res.push(stack.pop().val);
          continue;
      }
      if (node.right) stack.push(node.right); // 右
      if (node.left) stack.push(node.left); // 左
      stack.push(node); // 中
      stack.push(null);
  }; 
  return res;
};


//  中序遍历：左中右
//  压栈顺序：右中左
var inorderTraversal = function(root, res = []) {
  const stack = [];
  if (root) stack.push(root);
  while(stack.length) {
      const node = stack.pop();
      if(!node) {
          res.push(stack.pop().val);
          continue;
      }
      if (node.right) stack.push(node.right); // 右
      stack.push(node); // 中
      stack.push(null);
      if (node.left) stack.push(node.left); // 左
  };
  return res;
};

// 后续遍历：左右中
// 压栈顺序：中右左
var postorderTraversal = function(root, res = []) {
  const stack = [];
  if (root) stack.push(root);
  while(stack.length) {
      const node = stack.pop();
      if(!node) {
          res.push(stack.pop().val);
          continue;
      }
      stack.push(node); // 中
      stack.push(null);
      if (node.right) stack.push(node.right); // 右
      if (node.left) stack.push(node.left); // 左
  };
  return res;
};

res mlr 
stack  rlm

let treeDFS =(root,res=[])=>{
  if(!root) return res;
  const stack=[];
  if(root) stack.push(root);
  while(stack.length){
    let node = stack.pop();
    if(!node){
      res.push(stack.pop().val)
      continue;
    }
    if(node.left) stack.push(node.right)
    if(node.right) stack.push(node.left)
    stack.push(node);
    // stack.push(null)
  }
  return res
}

let treeDFS2 =(root,res=[])=>{
  if(!root)return res
  const stack=[]
  if(root) stack.push(root);
  while(stack.length){
    let node = stack.pop();
    if(node!==null){
      res.push(node.val)
      if(node.right){
        stack.push(node.right)
      }
      if(node.left){
        stack.push(node.left)
      }
      
    }
  }
  return res
  
}
//https://leetcode.cn/problems/binary-tree-preorder-traversal/solution/tu-jie-er-cha-shu-de-si-chong-bian-li-by-z1m/