/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let i = 0
  let root = new ListNode()
  let cur = root
  let plus = false

  let traverse = (node1, node2) => {
    let isDouble = !!node2
    while (isDouble ? node1 && node2 : node1) {
      cur.next = new ListNode()
      cur = cur.next

      let sum = node1.val + (plus ? 1 : 0)
      if (isDouble) {
        sum += node2.val
      }

      if (sum >= 10) {
        sum %= 10
        plus = true
      } else {
        plus = false
      }
      cur.val = sum

      node1 = node1.next
      if (isDouble) {
        node2 = node2.next
      }
    }

    if (node1) {
      traverse(node1)
    }
    if (node2) {
      traverse(node2)
    }
  }

  traverse(l1, l2)

  if (plus) {
    cur.next = new ListNode(1)
  }

  return root.next
}

var addTwoNumbers = function (l1, l2) {
  let i = 0
  let root = new ListNode()
  let cur = root
  let plus = false

  let traverse = (node1, node2, isPlus) => {
    if (!node1 && !node2) {
      return
    }

    if (node1.val && node2.val) {
      let sum = node1.val + node2.val + (isPlus ? 1 : 0)
      if (sum >= 10) {
        sum %= 10
        isPlus = true
      } else {
        isPlus = false
      }
      cur.val = sum
      cur.next = new ListNode()
    }

    traverse(node1.next, node2.next, isPlus)
  }

  traverse(l1, l2, false)

  if (plus) {
    cur.next = new ListNode(1)
  }

  return root
}
