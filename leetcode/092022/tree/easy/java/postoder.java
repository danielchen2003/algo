class Solution {
public static void post_order2(Node head){
  System.out.print('pos-order')
  if(h!= null){
    Stack<Node> stack = new Stack<Node>();
    stack.push(head);
    Node cur = null;
    while (!stack.isEmpty){
      c=stack.peak();
      // ! 左边树没处理完 推进去  stack 先进后出所以要反向操作 右侧先推进去
      if(c.left!= null && h != c.left && h!=c.right){
        stack.push(c.right);
        //! 右侧没处理完
      }else if(c.right!= null && h != c.right){
        stack.push(c.left);
      }else{
        //! 如果都处理完了打印并且 记录一下tamp 节点
        System.out.println(stack.pop().value + " ");
        h = c;
      }
    }
  }
}
}