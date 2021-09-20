/*
  HTML
  
    <div class="container">
    <div class="btn-container">
      <button>
        Click me
      </button>
    </div>
    
    <div class="progress-container">
      
    </div>
  </div>  
*/

/*
  CSS
.progress {
  height: 50px;
  background: grey;
  position: relative;
  margin: 4px 0;
}

.btn-container {
  margin-top: 25px;
  display:flex;
  justify-content:center;
}

.bar {
  position: absolute;
  top:0;
  left:0;
  bottom:0;
  background: green;
}

.progress-container {
  margin-top:20px;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  padding: 25px;
}
*/
class ProgressBar {
    constructor(container) {
        this.container = container;
        this.fullWidth = 300;
        this.timer = 500;
        this.increaseWidth = 20;
        this.button = this.container.querySelector('button');
        this.progressContainer = this.container.querySelector('.progress-container');
        this.newBars = this.container.getElementsByClassName('newBar');
        this.html = `<div class='progress newBar' style='width: ${this.fullWidth}px'><div class='bar'></div></div>`;

        // addEventlisteners
        this.button.addEventListener('click', this.handleButtonClick.bind(this));

    }

    checkForResources() {

    }

    handleButtonClick(e) {
        this.progressContainer.insertAdjacentHTML('beforeend', this.html);
        this.updateInterval();
    }

    updateInterval() {
        this.allNewProgress = [...this.newBars];
        this.allNewProgress.forEach(el => {
            let width = 0;
            el.classList.remove('newBar')
            const bar = el.querySelector('.bar');
            const interval = setInterval(() => {
                width += this.increaseWidth;
                bar.style.width = width + 'px';
                if (width >= this.fullWidth) {
                    clearInterval(interval);
                }
            }, Math.floor(Math.random() * this.timer));
        })
    }
}

new ProgressBar(document.querySelector('.container'));
