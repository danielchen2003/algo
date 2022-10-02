function quickSort(arr, left, right) {
  var len = arr.length,
    partitionIndex,
    left = typeof left != "number" ? 0 : left,
    right = typeof right != "number" ? len - 1 : right

  if (left < right) {
    partitionIndex = partition(arr, left, right)
    quickSort(arr, left, partitionIndex - 1)
    quickSort(arr, partitionIndex + 1, right)
  }
  return arr
}

function partition(arr, left, right) {
  //分区操作
  //设定基准值位置（pivot）当然也可以选择最右边的元素为基准 也可以随机选择然后和最左或最右元素交换
  var pivot = left,
    index = pivot + 1
  for (var i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index)
      index++
    }
  }
  swap(arr, pivot, index - 1)
  return index - 1
}

function swap(arr, i, j) {
  var temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

let s = [3, 2, 3, 1, 2, 4, 5, 5, 6],
  k = 4
quickSort(s)

const findKthLargest = (nums, k) => {
  const n = nums.length

  const quick = (l, r) => {
    if (l > r) return //递归终止条件
    let random = Math.floor(Math.random() * (r - l + 1)) + l //随机选取一个索引
    swap(nums, random, r) //将它和位置r的元素交换，让nums[r]作为基准元素

    //对基准元素进行partition
    let pivotIndex = partition(nums, l, r)
    //进行partition之后，基准元素左边的元素都小于它 右边的元素都大于它
    //如果partition之后，这个基准元素的位置pivotIndex正好是n-k 则找大了第k大的数
    //如果n-k<pivotIndex,则在pivotIndex的左边递归查找
    //如果n-k>pivotIndex，则在pivotIndex的右边递归查找
    if (n - k < pivotIndex) {
      quick(l, pivotIndex - 1)
    } else {
      quick(pivotIndex + 1, r)
    }
  }

  quick(0, n - 1) //函数开始传入的left=0，right= n - 1
  return nums[n - k] //最后找到了正确的位置 也就是n-k等于pivotIndex 这个位置的元素就是第k大的数
}

function partition(nums, left, right) {
  let pivot = nums[right] //最右边的元素为基准
  let pivotIndex = left //pivotIndex初始化为left
  for (let i = left; i < right; i++) {
    //遍历left到right-1的元素
    if (nums[i] < pivot) {
      //如果当前元素比基准元素小
      swap(nums, i, pivotIndex) //把它交换到pivotIndex的位置
      pivotIndex++ //pivotIndex往前移动一步
    }
  }
  swap(nums, right, pivotIndex) //最后交换pivotIndex和right
  return pivotIndex //返回pivotIndex
}

function swap(nums, p, q) {
  //交换数组中的两个元素
  const temp = nums[p]
  nums[p] = nums[q]
  nums[q] = temp
}

var sortArray = function (nums) {
  if (nums.length < 2) return nums
  // 切成一半一半
  let midIndex = Math.floor(nums.length / 2)
  //左半边
  let left = nums.slice(0, midIndex)
  //右半边
  let right = nums.slice(midIndex)
  //融合
  return merge(sortArray(left), sortArray(right))
}
const merge = (left, right) => {
  let res = []
  let i = 0
  let j = 0
  let lenL = left.length
  let lenR = right.length
  //当i在左边里面
  //当j在右边里面
  while (i < lenL && j < lenR) {
    //当前指针的值小于右边的
    if (left[i] < right[j]) {
      //那么久推比较小的先 左边
      res.push(left[i])
      //左年指针移动
      i++
    } else {
      //大于等于右边的话，就推右边的值进去
      //右边指针移动
      res.push(right[j])
      j++
    }
  }
  //把没推进去的剩下的全部推进去
  while (i < lenL) res.push(left[i++])
  while (j < lenR) res.push(right[j++])
  console.log(res)
  return res
}

var sortArray = function (nums) {
  if (nums.length < 2) return nums
  let mid = Math.floor(nums.length / 2)
  let left = nums.slice(0, mid)
  let right = nums.slice(mid)
  return merge2(sortArray(left), sortArray(right))
}

function merge2(left, right) {
  let res = []
  let i = 0
  let j = 0
  let lenl = left.length
  let lenr = right.length
  while (i < lenl && j < lenr) {
    if (left[i] < right[j]) {
      res.push(left[i])
      i++
    } else {
      res.push(right[j])
      j++
    }
  }
  while (i < lenl) {
    res.push(left[i++])
  }
  while (j < lenr) {
    res.push(right[j++])
  }
  return res
}
let nums = [5, 1, 1, 2, 0, 0]
console.log(sortArray(nums))
