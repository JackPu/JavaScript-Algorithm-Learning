// https://leetcode.com/problems/merge-two-sorted-lists/

// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

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

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var mergeTwoLists = function(l1, l2) {
    var startList;
    var minVal;
    var currentNode;
    var linkNode = function (node, node1, node2) {
      if (!node1 && !node2) {
        return;
      }
      if (!node1) {
        node.next = node2;
      }
      if (!node2) {
        node.next = node1;
      }
      if (node1.val < node2.val) {
        node.next = node1;
        linkNode(node1, node1.next, node2);
      } else {
        node.next = node2;
        linkNode(node2, node1, node2.next)
      }
    }
    if (l1.val < l2.val) {
      startList = l1;
      linkNode(startList, l1.next, l2); 
    } else {
      startList = l2;
      linkNode(startList, l1, l2.next);
    }
    return startList;
};