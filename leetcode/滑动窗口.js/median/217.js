var containsDuplicate = function (nums) {
  let set1 = new Set([...nums])
  console.log(set1.size)
  if (set1.size === nums.length) return false
  else return true
}
let nums = [1, 2, 3, 4]
containsDuplicate(nums)
