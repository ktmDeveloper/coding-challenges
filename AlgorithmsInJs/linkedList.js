class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class linkedList {
    constructor() {
        this.root = null
        this.length = 0
    }

    add(val) {
        if (this.root) {
            let curr = this.root
            while (curr.next) {
                curr = curr.next
            }
            curr.next = new Node(val)
            this.length++
        } else {
            this.root = new Node(val)
            this.length++
        }
    }

    exist(k) {
        if (!this.root) return null

        let curr = this.root
        while (curr) {
            if (curr.val == k) {
                return true
            }
            curr = curr.next
        }
        return false
    }

    delete(k) {
        if (!this.root) return null

        let curr = this.root

        if (curr.val == k) {
            this.root = curr.next
            this.length--
            return curr
        }

        let prev = null
        while (curr) {
            if (curr.val == k) {
                prev.next = curr.next
                this.length--
                return curr
            }
            prev = curr
            curr = curr.next
        }
        return false
    }
    
  reverse(){
    if(!this.root) return null
    let prev = null
    let next = null
    let curr = this.root
    while(curr){
      let next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    }
    
    this.root = prev
    return this.root
    
  }
}

let ll = new linkedList()

ll.add(1)
ll.add(2)
ll.add(3)
ll.add(4)
ll.add(40)

console.log(ll)
console.log(ll.delete(40))
console.log(ll.delete(2))
console.log(ll)
