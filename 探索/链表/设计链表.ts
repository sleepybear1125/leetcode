class MyLinkedNode {
    constructor(val?:number) {
        val && (this.val = val);
    }
    val:number = 0;
    next:MyLinkedNode|null = null;
}

class MyLinkedList {
    private head:MyLinkedNode|null = null;
    constructor() {
    }

    /**
     * 获取链表中第 index 个节点的值。如果索引无效，则返回-1
     * @param index 
     */
    get(index: number): number {
        let i = 0;
        let cur = this.head;
        while(cur && i < index) {
            cur = cur.next;
            i++;
        }
        return cur ? cur.val : -1;
    }

    /**
     * 在链表的第一个元素之前添加一个值为 val 的节点。插入后，新节点将成为链表的第一个节点。
     * @param val 
     */
    addAtHead(val: number): void {
        const newNode = new MyLinkedNode(val);
        if(!this.head) {
            this.head = newNode;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
    }

    /**
     * 将值为 val 的节点追加到链表的最后一个元素。
     * @param val 
     */
    addAtTail(val: number): void {
        const newNode = new MyLinkedNode(val);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let cur = this.head;
        while(cur.next) {
            cur = cur.next;
        }
        cur.next = newNode;
    }

    /**
     * 在链表中的第 index 个节点之前添加值为 val  的节点。如果 index 等于链表的长度，则该节点将附加到链表的末尾。
     * 如果 index 大于链表长度，则不会插入节点。如果index小于0，则在头部插入节点。
     * @param index 
     * @param val 
     */
    addAtIndex(index: number, val: number): void {
        if (index <= 0 || !this.head) {
            this.addAtHead(val);
            return;
        }
        const newNode = new MyLinkedNode(val);
        let cur:MyLinkedNode|null = this.head;
        let i = 0;
        while(cur && i < index-1) {
            cur = cur.next;
            i++
        }
        if (!cur) {
            return;
        }
        newNode.next = cur.next;
        cur.next = newNode;
    }

    /**
     * 如果索引 index 有效，则删除链表中的第 index 个节点。
     * @param index 
     */
    deleteAtIndex(index: number): void {
        if (index == 0) {
            this.deleteAtHead();
            return;
        }
        let pre = this.head;
        let i = 0;
        while(pre && i < index - 1) {
            pre = pre.next;
            i++
        }
        if (!pre) {
            return
        }
        const deleteNode = pre.next;
        const nextNode = deleteNode ? deleteNode.next : null;
        pre.next = nextNode;
    }

    /**
     * 删除链表中的第一个节点。
     */
    deleteAtHead(): void {
        if(!this.head) {
            return;
        }
        const next = this.head.next;
        this.head = next;
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */