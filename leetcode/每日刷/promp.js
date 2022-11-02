// Arrays.sort(arr); // O(N*LogN)
// int n = arr.length;
// double cap = newBudget/n;
// for(int i = 0; i < n; i++) { // O(N)
//   if(arr[i] < cap) {
//     newBudget -= arr[i];
//     cap = (newBudget/(n-(1+i)));
//   }else {
//     arr[i] = cap;
//   }
// }

// return cap;

function findGrantsCap(grantsArray, newBudget) {
  // your code goes here
  let num = grantsArray.length
  grantsArray.sort((a, b) => a - b)
  let average_of_newbudge = Math.floor(newBudget / num)
  for (let i = 0; i < grantsArray.length; i++) {
    let grant = grantsArray[i]
    if (grant < average_of_newbudge) {
      newBudget = newBudget - grantsArray[i]
      average_of_newbudge = Math.floor(newBudget / (num - (i + 1)))
    } else {
      grantsArray[i] = average_of_newbudge
    }
  }
  console.log(grantsArray)
  return grantsArray
}

let grantsArray = [2, 100, 45, 120, 1000],
  newBudget = 190
findGrantsCap(grantsArray, newBudget)
