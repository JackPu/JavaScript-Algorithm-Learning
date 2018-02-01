// https://leetcode.com/problems/add-two-numbers/description/

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

const addTwoNumbers = function (l1, l2) {
    const getVal = function (l1, l2, plus = 0) {
        const val1 = l1 && l1.val;
        const val2 = l2 && l2.val;
        const total = val1 + val2 + plus;
        return {
            val:total % 10,
            next: parseInt(total / 10),
        }
    }
    let l = null;
    let plus = 0;
    let i = 0;

    function setNode(vm, l1, l2) {
        if(!l1 && !l2 && !plus) {
            return vm;
        }
        const totalObj = getVal(l1, l2, plus)
        if (totalObj.next) {
            plus = totalObj.next;
        } else {
            plus = 0
        }
        if(!l) {
            l = new ListNode(totalObj.val);
            vm = l;
        } else {
            vm.next = new ListNode(totalObj.val);
            vm = vm.next;
        }
        if( (l1 && l1.next) || (l2 && l2.next) || plus) {
            return setNode(vm, l1 && l1.next, l2 && l2.next)
        }
    }
    setNode(l, l1, l2)
    return l;
};

module.exports = addTwoNumbers;
