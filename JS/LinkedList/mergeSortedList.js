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
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }

const mergeTwoLists = (list1, list2) => {
  let head = new ListNode();
  let node = head;
  while(list1 && list2) {
    if(list1.val < list2.val) {
      node.next = new ListNode(list1.val);
      node = node.next;
      list1 = list1.next;
    } else if(list2.val < list1.val) {
      node.next = new ListNode(list2.val);
      node = node.next;
      list2 = list2.next;
    } else {
      node.next = new ListNode(list1.val);
      node = node.next;
      list1 = list1.next;
      node.next = new ListNode(list2.val);
      node = node.next;
      list2 = list2.next;
    } 
  }
  if(list1) {
    node.next = list1;
  }

  if(list2) {
    node.next = list2;
  }

  return head.next;
}

mergeTwoLists({
  val:1,
  next:{
    val:2,
    next: {
      val: 4,
      next: null
    }
  }
}, {
  val:1,
  next:{
    val:3,
    next: {
      val: 4,
      next: null
    }
  }
})