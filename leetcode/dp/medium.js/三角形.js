// let  point()= new Object(){
//   let x;
//   let y;

// }

function point(a, b, c, d) {
  let ABC = tri(a, b, c)
  let ABD = tri(a, b, d)
  let BCD = tri(b, c, d)
  let ACD = tri(a, c, d)
  let sumOther = ABD + BCD + ABD
  if (sumOther === ABC) {
    return true
  } else {
    return false
  }
  function tri(A, B, C) {
    let ab = [B.x - A.x, B.y - A.y]
    let bc = [B.x - C.x, B.y - C.y]
    return Math.abs((ab.x * bc.y - ab.y * bc.x) / 2.0)
  }
} //底成高/2
function tri(A, B, C) {
  let ab = [B[0] - A[0], B[1] - A[1]]
  let bc = [B[0] - C[0], B[1] - C[1]]
  return Math.abs((ab[0] * bc[1] - ab[1] * bc[0]) / 2.0)
}
let a = [2, 2]
let b = [0, 0]
let c = [4, 0]
console.log(tri(a, b, c))
//     A(2,2)

// B(0,0)    C(4,0)

//4 2   4*2 /2=4
