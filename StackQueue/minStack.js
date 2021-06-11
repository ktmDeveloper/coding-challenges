// https://leetcode.com/problems/min-stack/
class MinStack {
    constructor() {
        this._storage = {};
        this.position = 0;

    }

    push(val) {
        this._storage[this.position] = {
            val: val,
            min: this.position === 0 ? val : Math.min(val, this.getMin())
        };
        this.position++;
    }

    pop() {
        let lastVal = this._storage[this.position - 1];
        delete this._storage[this.position - 1];
        this.position--;
        return lastVal;
    }

    top() {
        return this._storage[this.position - 1].val
    }

    getMin() {
        return this._storage[this.position - 1].min;
    }
}


