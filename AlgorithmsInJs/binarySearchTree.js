class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null;
        this.length = 0
    }

    add(val) {
        if (this.root == null) {
            this.root = new Node(val)
        } else {
            let curr = this.root
            this.recurAdd(curr, val)
        }
    }

    recurAdd(root, val) {
        if (val > root.val) {
            if (root.right) {
                return this.recurAdd(root.right, val)
            } else {
                root.right = new Node(val)
            }
        } else {
            if (root.left) {
                return this.recurAdd(root.left, val)
            } else {
                root.left = new Node(val)
            }
        }
    }

    verticalLength() {
        let map = new Map()

        function recur(root, currIdx) {
            if (root == null) {
                return;
            }
            if (map.has(currIdx)) {
                map.set(currIdx, map.get(currIdx) + root.val)
            } else {

                map.set(currIdx, root.val)
            }
            recur(root.left, currIdx - 1)
            recur(root.right, currIdx + 1)
        }
        recur(this.root, 0)
        return [...map.entries()]
    }
    
    inOrderTraversal(){
        let res = []
        function inOrderTraversalRecur(root){
          if(root != null){
            inOrderTraversalRecur(root.left)
            res.push(root.val)
            inOrderTraversalRecur(root.right)
          }
        }
        inOrderTraversalRecur(this.root)
        return res
      }

  
    bfs(){
        let res = [];
        let q = [];
        q.push(this.root);
        while(q.length){
          let len = q.length
          for(let i = 0; i < len; i++){
             let curr = q.shift()
             res.push(curr.val)
             if(curr.left){
               q.push(curr.left)
             }
             if(curr.right){
               q.push(curr.right)
             }
          }
        }
        return res
      }
    
      dfs(){
        let res = [];
        let s = [];
        s.push(this.root);
        while(s.length){
          let len = s.length
          for(let i = 0; i < len; i++){
             let curr = s.pop()
             res.push(curr.val)
             if(curr.right){
               s.push(curr.right)
             }
             if(curr.left){
               s.push(curr.left)
             }
          }
        }
        return res
      }

}

let bst = new BST()

bst.add(4)
bst.add(15)
bst.add(3)
bst.add(2)
bst.add(6)
bst.add(17)
bst.add(3.5)

console.log(bst.verticalLength())