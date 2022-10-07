#尝试用python实现
def maxSalary(task,val):
    prev=[0]*(len(val)+1)
    for i in range(len(val),1,-1):
        for j in range(i,0,-1):
            if task【j-1】[1]<=task【i-1】[0]:
                prev[i]=j
                break
    taskDo=[【] for i in range(len(val)+1)】
    taskDo[1].append(1)
    opt=[0]*(len(val)+1)
    opt[0]=0
    opt[1]=val[0]
    for i in range(2,len(val)+1):
        if val【i-1】+opt【prev[i】]>opt【i-1】:
            opt[i]=val【i-1】+opt【prev[i】]
            taskDo[i]=taskDo【prev[i】]
            taskDo[i].append(i)
        else:
            opt[i]=opt【i-1】
            taskDo[i]=taskDo【i-1】
    return opt【-1】,taskDo【-1】
    
    
    public class Main {
      public static void main(String【】 args) {
        int【】 value = new int【】 {5,1,8,4,6,3,2,4};
        int【】【】 section = new int【】【】 {{1,4},{3,5},{0,6},{4,7},{3,8},{5,9},{6,10},{8,11}};
        int【】 pre = new int【value.length】;
        int【】 opt = new int【value.length】;
        // 计算前缀数组
        for(int i=value.length-1;i>=0;i--) {
          // 因为数组初始化为0，前缀为0的话，会索引到0,0是有数据，所以修改成-1，表示前缀无数据
          pre【i】 = -1;
          for(int j=i-1;j>=0;j--) {
            // 判断i开头是否在j结束前面
            if(section【j】【1】 <= section【i】【0】) {
              pre【i】 = j;
              break;
            }
          }
        }
        // 给第一个数据直接使用本身数据
        opt【0】 = value【0】;
        // 循环进行迭代
        for(int i=1;i<value.length;i++) {
          int val;
          if(pre【i】 == -1) {
            val = 0 + value【i】;
          } else {
            val = opt[pre【i】] + value【i】;
        }
          opt【i】 = Math.max(val, opt【i-1】);
        }
        // 打印最后一个数据即可
        System.out.println(opt【value.length-1】);
      }
  }