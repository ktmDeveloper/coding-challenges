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

// A slightly different way

function Node(val) {
    this.val = val;
    this.next = null;
  }
  
  function LList(){
    this.head = null;
    this.length = 0;
    this.addNode = addNode;
    this.findNode = find;
    this.insertAfter = insertAfter;
    this.deleteNode = deleteNode;
    this.midPoint = midPoint;
  }
  
  function addNode(val){
    if(!val){
      return null
    }
    let newNode = new Node(val);
    if(this.length === 0){
      this.head = newNode;
    } else {
      let currNode = this.head
      while(currNode.next != null){
        currNode = currNode.next
      }
      currNode.next = newNode;
    } 
    this.length++;
  }
  
  function find(val){
    if(this.length == 0){
      return 'list is empty';
    } else {
      let currNode = this.head;
      while(currNode.val != val) {
        if(currNode.next){
          currNode = currNode.next;
        } else {
          return null
        }
        
      }
      return currNode;
    }
  }
  
  function insertAfter(val, node){
    let nodeVal = this.findNode(node);
    if(!nodeVal){
      return null
    }
    let newNode = new Node(val);
    newNode.next = nodeVal.next;
    nodeVal.next = newNode;
    this.length++;
  }
  
  function deleteNode(val){
    if(!this.findNode(val)){
      return null
    }
    let currNode = this.head;
    if(currNode.val == val){
      this.head = currNode.next;
      this.length--;
    } else {
      while(currNode.next.val !== val){
        currNode = currNode.next;
      }
      currNode.next = currNode.next.next;
      this.length--;
    }
  }
  
  function midPoint(){
    let moveByOne = this.head;
    let moveByTwo = this.head;
    
    while(moveByTwo.next && moveByTwo.next.next){
      moveByOne = moveByOne.next;
      moveByTwo = moveByTwo.next.next;
    }
    return moveByOne.val;
  }
  
  let ll = new LList();
  
  ll.addNode(1);
  ll.addNode(2);
  ll.addNode(3);
  ll.addNode(4);
  ll.addNode(5);
  ll.addNode(6);
  ll.addNode(7);
  console.log(ll.midPoint());
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  