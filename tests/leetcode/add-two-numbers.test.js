/**
 * https://leetcode.com/problems/add-two-numbers/description/
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 */
const add = require('../../src/leetcode/add-two-numbers.js');


function ListNode(val) {
    this.val = val;
    this.next = null;
}

it('two sum', function () {
    const l1 = new ListNode(2);
    l1.next = new ListNode(4);
    l1.next.next = new ListNode(3);
    const l2 = new ListNode(5);
    l2.next = new ListNode(6);
    l2.next.next = new ListNode(4);
    const result = add(l1, l2)
    expect(result.val).toEqual(7);
    expect(result.next.val).toEqual(0);
    expect(result.next.next.val).toEqual(8);
    const l3 = new ListNode(1)
    l3.next = new ListNode(8)
    const l4 = new ListNode(0)
    const result2 = add(l3, l4);
    expect(result2.val).toEqual(1);
    expect(result2.next.val).toEqual(8);
});
