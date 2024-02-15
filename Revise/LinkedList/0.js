class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }

    addFirst(data) {
        const newnode = new Node(data)
        newnode.next = this.head;
        this.head = newnode;
    }

    addlast(data) {
        const newnode = new Node(data)
        if (!this.head) {
            this.head = newnode;
            return;
        }
        let current = this.head
        while (current.next) {
            current = current.next
        }
        current.next = newnode
    }

    size() {
        let count = 0
        let current = this.head
        while (current) {
            count++;
            current = current.next
        }
        return count
    }

    addAt(index, data) {
        if (index < 0 || index > this.size()) {
            console.error("invalid Index!!")
            return
        }

        const newnode = new Node();
        if (index === 0) {
            newnode.next = this.head
            this.head = newnode
            return;
        }
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;


        }
        newnode.next = current.next
        current.next = newnode;

    }

    removeTop() {
        if (!this.head) {
            console.log("No head found")
        }
        this.head = this.head.next
    }

    removeLast() {
        if (!this.head) {
            return;
        }

        let current = this.head
        while (current.next.next) {
            current = current.next
        }
        current.next = null;
    }
    removeAt(index) {
        if (index < 0 || index > this.size()) {
            console.error("invalid Index!!")
        }


        if (index === 0) {
            this.head = this.head.next
            return;
        }
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;


        }
        if (current.next) {
            current.next = current.next.next
        }

    }
    print() {
        let current = this.head
        while (current) {
            console.log(current.data)
            current = current.next
        }
    }

}

const linkedlist = new LinkedList();

linkedlist.addFirst(4)
linkedlist.addFirst(5)
linkedlist.addFirst(6)
linkedlist.addlast(7)
linkedlist.print()
console.log(`the size of linkedlist is ${linkedlist.size()}`)
linkedlist.addAt(2, 9)
linkedlist.print()

