// https://leetcode.com/problems/sort-list/
// merge sort - > n logn
var sortList = function (head) {
  if (!head || !head.next) return head;

  // find the mid point to merge sort.
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  const mid = slow.next;
  slow.next = null; // point the slow to null so that we dont traverse it again.
  let left = sortList(head);
  let right = sortList(mid);
  const dummy = new ListNode(0);
  let h = dummy;
  while (left && right) {
    if (left.val < right.val) {
      h.next = left;
      left = left.next;
    } else {
      h.next = right;
      right = right.next;
    }
    h = h.next;
  }
  if (left) {
    h.next = left;
  }
  if (right) {
    h.next = right;
  }
  return dummy.next;
};
