// movePlant(A.size(), A, B, C)

// public void movePlant(int size,List<Integer> start,List<Integer> auxiliary,List<Integer> target){
//   //当只剩一个盘子时，直接将它从第一个柱子移动到第三个柱子
//   if(size == 1){
//       target.add(start.remove(start.size()-1));
//       return;
//   }
//   //首先将 n-1 个盘子，从第一个柱子移动到第二个柱子
//   movePlant(size - 1,start,target,auxiliary);
//   //然后将最后一个盘子移动到第三个柱子上
//   target.add(start.remove(start.size()-1));
//   //最后将第二个柱子上的 n-1 个盘子，移动到第三个柱子上
//   movePlant(size - 1,auxiliary,start,target);

// }

// function move (size,start,aux,target){
//   if(size===1){
//     target.push(start.pop())
//     return
//   }
//   move(size - 1,start,target,aux);
//   target.push(start.pop())
//   movePlant(size - 1,auxiliary,start,target);
// }

function move(size, a, b, c) {
  if (size === 1) {
    c.push(a.pop())
    return
  }
  // a -> b
  move(size - 1, a, c, b)
  c.push(a.pop())
  // b->c
  move(n - 1, b, a, c)
}

let A = []
let B = []
let C = [0, 1, 2]
move(n, A, B, C)
