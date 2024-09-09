function removeNthFromEnd(head, n) {
  let dummyHead = { next: head };
  let slow = dummyHead;
  let fast = dummyHead;

  // Move fast N nodes ahead of slow
  for (let i = 1; i <= n; i++) {
    fast = fast.next;
  }

  // Move slow and fast up one node at a time until fast reaches the end
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  // Remove the nth node from the end
  slow.next = slow.next.next;

  return dummyHead.next; // Return the new head (next of dummy head)
}

module.exports = removeNthFromEnd;
