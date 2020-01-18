// priorityQueue in JS
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class PriorityQueue {
  constructor() {
    this.first = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (!this.first || val < this.first.value) {
      newNode.next = this.first;
      this.first = newNode;
    } else {
      let pointer = this.first;
      while (pointer.next && val > pointer.next.value) {
        pointer = pointer.next;
      }
      newNode.next = pointer.next;
      pointer.next = newNode;
    }
  }

  remove() {
    const { first } = this;
    this.first = this.first.next;
    return first;
  }
}

const q = new PriorityQueue();

q.insert(2);
q.insert(3);
q.insert(1);
q.insert(5);
q.insert(4);


console.log(q);
