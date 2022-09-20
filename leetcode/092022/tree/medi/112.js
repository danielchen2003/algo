let hasPathSum = function (root, targetsum) {
  // 递归法
  const traversal = (node, cnt) => {
    // 遇到叶子节点，并且计数为0
    if (cnt === 0 && !node.left && !node.right) return true
    // 遇到叶子节点而没有找到合适的边(计数不为0)，直接返回
    if (!node.left && !node.right) return false

    //  左（空节点不遍历）.遇到叶子节点返回true，则直接返回true
    if (node.left && traversal(node.left, cnt - node.left.val)) return true
    //  右（空节点不遍历）
    if (node.right && traversal(node.right, cnt - node.right.val)) return true
    return false
  }
  if (!root) return false
  return traversal(root, targetsum - root.val)
}



class solution {
  public boolean haspathsum(treenode root, int targetsum) {
      if(root==null)return false;
      stack<treenode> stack1 = new stack<>();
      stack<integer> stack2 = new stack<>();
      stack1.push(root);stack2.push(root.val);
      while(!stack1.isempty()){
          int size = stack1.size();
          for(int i=0;i<size;i++){
              treenode node = stack1.pop();int sum=stack2.pop();
              // 如果该节点是叶子节点了，同时该节点的路径数值等于sum，那么就返回true
              if(node.left==null && node.right==null && sum==targetsum)return true;
              // 右节点，压进去一个节点的时候，将该节点的路径数值也记录下来
              if(node.right!=null){
                  stack1.push(node.right);stack2.push(sum+node.right.val);
              }
              // 左节点，压进去一个节点的时候，将该节点的路径数值也记录下来
              if(node.left!=null){
                  stack1.push(node.left);stack2.push(sum+node.left.val);
              }
          }
      }
      return false;
  }   
  
}

function hasPathSum(root,tar){
  if(root==null) return false
  let nodeStack =[root]
  let valueStack = [root.val]
  
  while(nodeStack.length !== 0){
      let size = stack.length
    for(let i = 0; i < size; i++){
    let curNode = nodeStack.pop()
    let curValue = valueStack.pop()
    if(!curNode.left && !curNode.right= && tar - curValue===0){
      return true
    }
         if(curNode.right){
      nodeStack.push(curNode.right)
      valueStack.push(curValue + curNode.right.val)
  }
    if(curNode.left) {
      nodeStack.push(curNode.left)
      valueStack.push(curValue + curNode.left.val)
    } 
   
    }
}
return false
}


var hasPathSum = function(root, sum) {
	if(!root) return false;
	const stack = [root];
	const temps = [0];
	let i = stack.length;
	while(i) {
		while(i--) {
			const front = stack.pop();
			let temp = temps.pop();
			if(!front) continue;
			temp += front.val;
			if(!front.left && !front.right && temp === sum) return true;
			stack.push(front.left, front.right);
			temps.push(temp, temp);
		}
		i = stack.length;
	}
	return false;
}
