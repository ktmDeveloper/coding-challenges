class HashTable {
    static stringToIntHash(str, tableSize) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash += str.charCodeAt(i);
        }
        return hash % tableSize;
    }

    constructor() {
        this.table = new Array(4);
        this.numItems = 0;
    }

    resize() {
        const newTable = new Array(this.table.length * 2);
        this.table.forEach(item => {
            if (item) {
                item.forEach(([key, value]) => {
                    const idx = this.constructor.stringToIntHash(key, newTable.length);
                    if (newTable[idx]) {
                        newTable[idx].push([key, value]);
                    } else {
                        newTable[idx] = [[key, value]];
                    }
                });
            }
        });
        this.table = newTable;
    }

    getItem(key) {
        let idx = this.constructor.stringToIntHash(key, this.table.length);
        if (this.table[idx]) {
            return this.table[idx].find(item => item[0] === key)[1];
        } else {
            return 'not found'
        }
    }

    setItem(key, val) {
        let idx = this.constructor.stringToIntHash(key, this.table.length);
        this.numItems++;
        const loadFactor = this.numItems / this.table.length;
        if (loadFactor > 0.8) {
            // resize
            this.resize();
        }
        if (this.table[idx]) {
            this.table[idx].push([key, val]);
        } else {
            this.table[idx] = [[key, val]];
        }
    }
}

let myTable = new HashTable();

myTable.setItem('a', 'aa')
myTable.setItem('b', 'bb')
myTable.setItem('e', 'aaa')

myTable.setItem('f', 'aa')
myTable.setItem('b', 'bb')
myTable.setItem('h', 'aaa')
myTable.setItem('c', 'cc')
console.log(myTable.getItem('ca'))
console.log(myTable)







