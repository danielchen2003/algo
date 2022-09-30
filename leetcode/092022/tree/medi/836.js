var isRectangleOverlap = function (rec1, rec2) {
  function helper(rec1, rec2) {
    if (rec1[0] >= rec2[2] || rec1[1] >= rec2[3]) return false
    if (rec1[2] <= rec2[0] || rec1[3] <= rec2[1]) return false
    return true
  }

  return helper(rec1, rec2) || helper(rec2, rec1)
}
// 1 0 > 2 2  1 1 >= 23
x1 := rec1[0]
y1 := rec1[1]
x2 := rec1[2]
y2 := rec1[3]

x11 := rec2[0]
y11 := rec2[1]
x22 := rec2[2]
y22 := rec2[3]
x := !(x2 <= x11 || x22 <= x1)
y := !(y2 <= y11 || y22 <= y1)
return x && y
x1 =0 y1 =0 x2 2 y2 =2 
[0,0,2,2]
x1 =0 y1 =1 x2 =3 y2 =3
[1,1,3,3]

来打卡啦~矩形如果不重叠，从x轴和y轴上看两个矩形就变成了两条线段，这两条线段肯定是不相交的，也就是说左边的矩形的最右边小于右边矩形的最左边，也就是rec1[2] < rec2[0] || rec2[2] < rec1[0]；y轴同理，下面的矩形的最上边小于上面矩形的最下边，也就是rec1[3] < rec2[1] || rec2[3] < rec1[1]。因为题目要求重叠算相离，所以加上=，最后取反就行啦~

