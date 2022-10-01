

var detectCycle = function(head) {
  let fast = head;
let slow = head;
let isCycle = false;

while (fast && fast.next) {
fast = fast.next.next;
slow = slow.next;

if (fast === slow) {
  isCycle = true;
  break;
}
}

if (!isCycle) {
return null;
}

slow指针从head，fast节点从相遇节点开始向前移动，直到在入环节点处相遇
slow = head;

while (slow) {
if (slow === fast) {
  return slow;
}

slow = slow.next;
fast = fast.next;
}
};




var detectCycle = function(head) {