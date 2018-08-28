class Node {
    constructor(a) {
        this.val = a, this.next = null
    }
}
class linkedL {
    constructor() {
        this.head = null
    }
    add(a) {
        let b = new Node(a);
        if (this.head) {
            let c = this.head;
            for (; c.next;) c = c.next;
            c.next = b
        } else this.head = b
    }
    exist(a) {
        if (!this.head) return !1;
        for (let b = this.head; b;) {
            if (b.val == a) return !0;
            b = b.next
        }
        return !1
    }
    deleteVal(a) {
        if (!this.head) return 'no value initated';
        if (this.exist(a)) {
            let c, b = this.head;
            if (b.val == a) this.head = b.next;
            else {
                for (; b.val !== a;) c = b, b = b.next;
                return c.next = b.next, b
            }
        } else return 'no value found to delete'
    }
}
let link = new linkedL;
link.add(44) 
link.add(443) 
link.add(444)
console.log(link)
 console.log(link.deleteVal(1))
 console.log(link.deleteVal(443)) 
 console.log(link);