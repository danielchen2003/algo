var binaryTreePaths = function (root) {
  let stack = []
  function dfs(root, path) {
    if (!root) return

    let left = dfs(root.left)
    let right = dfs(root.right)

    left && (path += left.val)
    right && (path += right.val)

    if (left || right) {
      path += "->"
    } else {
      stack.push(path)
    }
  }
  dfs(root, path)
  return stack
}

var binaryTreePaths = function (root) {
  const paths = []
  const construct_paths = (root, path) => {
    if (root) {
      path += root.val.toString()
      if (root.left === null && root.right === null) {
        // 当前节点是叶子节点
        paths.push(path) // 把路径加入到答案中
      } else {
        path += "->" // 当前节点不是叶子节点，继续递归遍历
        construct_paths(root.left, path)
        construct_paths(root.right, path)
      }
    }
  }
  construct_paths(root, "")
  return paths
}

var binaryTreePaths = function (root) {
  let paths = []
  let path = ""
  const helper = (root, path) => {
    if (root) {
      path += root.val.toString()
      if (root.left === null && root.right === null) {
        paths.push(path)
      } else {
        path += "->"
        construct_paths(root.left, path)
        construct_paths(root.right, path)
      }
    }
  }
  helper(root, path)
  return paths
}

var binaryTreePaths = function (root) {
  //递归遍历+递归三部曲
  let res = []
  //1. 确定递归函数 函数参数
  const getPath = function (node, curPath) {
    //2. 确定终止条件，到叶子节点就终止
    if (node.left === null && node.right === null) {
      curPath += node.val
      res.push(curPath)
      return
    }
    //3. 确定单层递归逻辑
    curPath += node.val + "->"
    node.left && getPath(node.left, curPath)
    node.right && getPath(node.right, curPath)
  }
  getPath(root, "")
  return res
}

var binaryTreePaths = function (root) {
  //递归遍历+递归三部曲
  if (!root) return []
  let res = []
  function helper(root, curpath) {
    //什么都没有了就返回
    if (root.left === null && root.right === null) {
      res.push(curpath)
      return
    }
    curpath += root.val + "->"
    root.left && helper(root.left, curpath)
    root.right && helper(root.right, curpath)
  }
  helper(root, "")
  return res
}

var binaryTreePaths = function (root) {
  if (!root) return []
  const stack = [root],
    paths = [""],
    res = []
  while (stack.length) {
    const node = stack.pop()
    let path = paths.pop()
    if (!node.left && !node.right) {
      // 到叶子节点终止, 添加路径到结果中
      res.push(path + node.val)
      continue
    }
    path += node.val + "->"
    if (node.right) {
      // 右节点存在
      stack.push(node.right)
      paths.push(path)
    }
    if (node.left) {
      // 左节点存在
      stack.push(node.left)
      paths.push(path)
    }
  }
  return res
}

var binaryTreePaths = function (root) {
  if (!root) return []
  let res = []
  let stack = [root]
  let paths = [""]
  while (stack.length !== null) {
    let node = stack.pop()
    let path = paths.pop()
    if (!node.left && !node.right) {
      res.push(path + node.val)
      continue
    }
    path += node.val + "->"
    if (node.right) {
      stack.push(node.right)
      paths.push(path)
    }
    if (node.left) {
      stack.push(node.left)
      paths.push(path)
    }
  }

  return res
}

var sumOfLeftLeaves = function (root) {
  //采用层序遍历
  if (root === null) {
    return null
  }
  let queue = []
  let sum = 0
  queue.push(root)
  while (queue.length !== 0) {
    let level = queue.length

    let node = queue.shift()
    if (
      node.left !== null &&
      node.left.left === null &&
      node.left.right === null
    ) {
      //左不为空  左边的左边为空 左边的右边为空
      //   1
      // 1
      sum += node.left.val
    }
    node.left && queue.push(node.left)
    node.right && queue.push(node.right)
  }
  return sum
}
