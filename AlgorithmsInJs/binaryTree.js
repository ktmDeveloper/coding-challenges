class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    add(data) {
        if (!this.root) {
            this.root = new Node(data);
        } else {
            const recursiveAddNode = function (node) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else {
                        return recursiveAddNode(node.left);
                    }
                } else {
                    if (node.right === null) {
                        node.right = new Node(data);
                    } else {
                        return recursiveAddNode(node.right);
                    }
                }
            }

            let node = this.root;
            recursiveAddNode(node);
        }
    }

    findMin() {
        let current = this.root;
        while (current.left) {
            current = current.left;
        }
        return current.data;
    }

    findMax() {
        if (!this.root) {
            return 'not intialized';
        } else {
            const recurFindMax = function (node) {
                if (node.right === null) {
                    return node.data;
                } else {
                    return recurFindMax(node.right);
                }
            }

            const node = this.root;
            return recurFindMax(node);
        }
    }

    remove(data) {
        const recursiveRemove = function (node, data) {
            if (node === null) {
                return null;
            }
            if (data === node.data) {
                // node has no children
                if (node.left === null && node.right === null) {
                    return null;
                }

                // node has no left child
                if (node.left === null) {
                    return node.right;
                }

                // node has no right child
                if (node.right === null) {
                    return node.left;
                }

                // node has two children 
                let tempNode = node.right;
                while (tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = recursiveRemove(node.right, tempNode.data);
                return node;
            } else if (data < node.data) {
                node.left = recursiveRemove(node.left, data);
                return node;
            } else {
                node.right = recursiveRemove(node.right, data);
                return node;
            }
        }
        this.root = recursiveRemove(this.root, data);
    }

    findMinHeight() {
        if(!this.root) {
            return -1;
        }
        const recur = function (node, height) {
            if(node.right === null || node.left === null) {
                return height;
            } else {
                return Math.min(recur(node.left, height + 1), recur(node.right, height + 1))
            }
        }
        return recur(this.root, 0)
    }

    findMaxHeight() {
        if(!this.root) {
            return -1;
        }
        const recur = function (node, height) {
            if(node.right === null || node.left === null) {
                return height;
            } else {
                return Math.max(recur(node.left, height + 1), recur(node.right, height + 1))
            }
        }
        return recur(this.root, 0)
    }

    inOrder() {
        if(!this.root) {
            return null;
        } else {
            var result = [];
            const traverseInOrder = function (node) {
                node.left && traverseInOrder(node.left);
                result.push(node.data);
                node.right && traverseInOrder(node.right);
            }
            traverseInOrder(this.root);
            return result;
        }
    }

    levelOrder() {
        let result = [];
        let q = [];
        if(this.root) {
            q.push(this.root);
            while(q.length) {
                let node = q.shift();
                result.push(node.data);
                node.left && q.push(node.left);
                node.right && q.push(node.right);
            }
            return result;
        }
    }
}

const myBT = new BST();
myBT.add(50);
myBT.add(25);
myBT.add(75);
myBT.add(10);
myBT.add(30);
myBT.add(60);
myBT.add(100);
myBT.add(80);
myBT.add(105);
myBT.add(90);
console.log(myBT.findMin());
console.log(myBT.findMax());