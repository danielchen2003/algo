function sumTwoSmallestNumbers(numbers) {
  //Code here
  return numbers
    .sort((a, b) => b - a) //[22,19,12,8,5]
    .slice(-2) //[8,5]
    .reduce((acc, cur) => acc + cur) //8+5
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))
