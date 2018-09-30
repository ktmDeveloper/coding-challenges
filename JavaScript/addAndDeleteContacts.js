//keeping state and updating UI with plain vanilla JS

/* HTML
<div class="all">
  <div class="container">
    <input type="text" value="" placeholder="Name of contact">
    <button>Add</button>
  </div>
  <span class="helper">
    Add contacts
  </span>
  <span class="head hidden">
   List of Contacts
  </span>
  <ul>
    <!-- list goes here -->
  </ul>
</div>

*/

/* CSS
.helper,
.head {
  margin-top: 20px;
  display: block;
  color: grey;
  font-size: 1.3em;
}

.container {
  width: 300px;
  background: lightblue;
  padding: 10px;
  margin-top: 50px;
}

.hidden {
  display: none
}

ul {
  list-style: none;
  padding: 0;
  margin-top: 20px;
  width: 300px;
  padding: 10px;
  background: lightgreen;
}

ul li {
  padding: 8px;
  border-bottom: 1px solid green;
}

ul li span {
  color: purple;
  float: right;
}

ul li span:hover {
  cursor: pointer;
}

ul li span:active {
  color: red;
}

*/

class adList {
    constructor(root) {
      this.root = root;
      this.items = new Map([]);
  
      //UI Items
      this.btn = root.querySelector('.container button')
      this.ul = root.querySelector('ul')
  
      //Event Listener
      this.btn.addEventListener('click', (e) => {
        this.addAddress()
        this.updateHelper()
      })
  
      root.querySelector('ul').addEventListener('click', (e) => {
        if (e.target.matches('span')) { //one event listerner to all the list items
          let id = e.target.getAttribute('data-id')
          this.deleteAddress(id, e.target) //send ID and the target clicked
        }
      })
    }
  
    updateHelper() {
      if (this.items.size == 0) {
        this.root.querySelector('.helper').classList.remove('hidden')
        this.root.querySelector('.head').classList.add('hidden')
      } else {
        this.root.querySelector('.helper').classList.add('hidden')
        this.root.querySelector('.head').classList.remove('hidden')
  
      }
    }
  
    addAddress() {
      let txtVal = this.root.querySelector('.container input').value
      this.root.querySelector('.container input').value = ''
      if (txtVal.length > 0) {
        let id = Date.now().toString()
  
        let html = `<li>${txtVal}<span data-id="${id}">delete</span></li>`
        this.ul.innerHTML += html
        this.items.set(id, txtVal)
        console.log(this.items)
      }
    }
  
    deleteAddress(id, node) {
      if (this.items.has(id)) {
        this.items.delete(id)
      }
  
      console.log(this.items)
      console.log(this.items.size)
      node.parentNode.remove()
      this.updateHelper()
    }
  }
  
  let root = document.querySelector('.all')
  let add = new adList(root)
  