/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverse(head) {
  let prev = null
  let cur = head
  while (cur) {
    let next = cur.next
    cur.next = prev

    prev = cur
    cur = next
  }
  // 返回反转后的头节点
  return prev
}

var reverseList = function (head) {
  if (!head) {
    return null
  }
  let newList = null
  let cur = head
  while (cur) {
    // newList = cur
    var curNext = cur.next
    cur.next = newList
    newList = cur
    cur = curNext
  }
  return newList
}
