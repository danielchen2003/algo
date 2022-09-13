/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

//? leet code 21 . Merge Two Sorted Lists
var mergeTwoLists = function (list1, list2) {
  // if(!l1) return  l2
  // if(!l2) return l1
  // 这里是为了保存一下pre的node 起始点要返回的!!!!
  let pre = new ListNode(-1)
  let prehead = pre

  while (list1 !== null && list2 !== null) {
    // if(!list1) prehead.next = list2
    // if(!list2) prehead.next = list1
    if (list1.val <= list2.val) {
      prehead.next = list1
      list1 = list1.next
    } else {
      prehead.next = list2
      list2 = list2.next
    }
    prehead = prehead.next
  }
  prehead.next = list1 === null ? list2 : list1
  return pre.next
  //       const prehead = new ListNode(-1);

  //     let prev = prehead;
  //     while (l1 != null && l2 != null) {
  //         if (l1.val <= l2.val) {
  //             prev.next = l1;
  //             l1 = l1.next;
  //         } else {
  //             prev.next = l2;
  //             l2 = l2.next;
  //         }
  //         prev = prev.next;
  //     }

  //     // 合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可
  //     prev.next = l1 === null ? l2 : l1;

  //     return prehead.next;
}

递归

var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2
  if (!list2) return list1

  if (list1.val <= list2.val) {
    return (list1.next = mergeTwoLists(list1.next, list2))
  } else {
    return (list2.next = mergeTwoLists(list1, list2.next))
  }
}

var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2
  if (!list2) return list1

  if (list1.val <= list2.val) {
    ;[1, 2, 3][(2, 3, 4)]
    list1.next = mergeTwoLists(list1.next, list2)
    return list1
  } else {
    list2.next = mergeTwoLists(list1, list2.next)
    return list2
  }
}

//(1,1):代表第一次进入递归函数，并且从第一个口进入，并且记录进入前链表的状态
// merge(1,1): 1->4->5->null, 1->2->3->6->null
//     merge(2,2): 4->5->null, 1->2->3->6->null
//     	merge(3,2): 4->5->null, 2->3->6->null
//     		merge(4,2): 4->5->null, 3->6->null
//     			merge(5,1): 4->5->null, 6->null
//     				merge(6,1): 5->null, 6->null
//     					merge(7): null, 6->null
//     					return l2
//     				l1.next --- 5->6->null, return l1
//     			l1.next --- 4->5->6->null, return l1
//     		l2.next --- 3->4->5->6->null, return l2
//     	l2.next --- 2->3->4->5->6->null, return l2
//     l2.next --- 1->2->3->4->5->6->null, return l2
// l1.next --- 1->1->2->3->4->5->6->null, return l1

// 关于return L1的个人理解: 递归的核心在于,我只关注我这一层要干什么,返回什么,至于我的下一层(规模减1),我不管,我就是甩手掌柜.

// 好,现在我要merge L1,L2.我要怎么做?

// 显然,如果L1空或L2空,我直接返回L1或L2就行,这很好理解.
// 如果L1第一个元素小于L2的? 那我得把L1的这个元素放到最前面,至于后面的那串长啥样 ,我不管. 我只要接过下级员工干完活后给我的包裹, 然后把我干的活附上去(令L1->next = 这个包裹)就行
// 这个包裹是下级员工干的活,即merge(L1->next, L2)
// 我该返回啥?

// 现在不管我的下一层干了什么,又返回了什么给我, 我只要知道,假设我的工具人们都完成了任务, 那我的任务也就完成了,可以返回最终结果了
// 最终结果就是
