function mergeTwoLists(list1: ListNode | null, list2: ListNode | null) {
    const mergedHead = new ListNode(-1, null);
    let node = mergedHead;

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            node.next = list1;
            list1 = list1.next;
        } else {
            node.next = list2;
            list2 = list2.next;
        }

        node = node.next;
    }

    node.next = list1 ? list1 : list2;

    return mergedHead.next;
}
