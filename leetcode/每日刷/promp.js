Arrays.sort(arr); // O(N*LogN)
int n = arr.length;
double cap = newBudget/n;
for(int i = 0; i < n; i++) { // O(N)
  if(arr[i] < cap) {
    newBudget -= arr[i];
    cap = (newBudget/(n-(1+i)));
  }else {
    arr[i] = cap;
  }
}

return cap;

[51,50,49,1] 200
