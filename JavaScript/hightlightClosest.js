/*
<body>
  <a href=""></a>
  <a href=""></a>
  <a href=""></a>
  <a href=""></a>
</body>

.highlight {
  color: red;
}

*/

(function() {

    let body = document.querySelector('body');
    let anchors = document.querySelectorAll('a');
    let highlight = 'highlight';
    
    // throttle the event so we dont have lots of events firing
    body.addEventListener('mousemove', throttle(handleClick));

    function handleClick(e) {
        console.log(e.clientX, e.clientY);
        
        // remove highlight class from current highlighted
        let currActive = Array.from(anchors)
                        .find(anchor => anchor.classList.value.includes(highlight));
        if (currActive) {
            currActive.classList.remove(highlight);
        }

        let closestDistance;
        let closestAnchor;
        Array.from(anchors).forEach(anchor => {
          
            // get the closest point for the particular anchor to the mouse position
            // getBoundingClientRect is a native browserevent. returns all info related to position of elm
            let point = getClosestPoint(e, anchor.getBoundingClientRect());
          
            // then get the distance from that point
            let distance = getDistance(e, point);
            console.log(anchor.innerHTML, anchor.getBoundingClientRect(), distance);
            console.log('----------')
            
            // keep track of the closest one
            if (!closestDistance || distance < closestDistance) {
                closestDistance = distance;
                closestAnchor = anchor;
            }
        })
        // highlight the closest one after the loop is done
        closestAnchor.classList.add(highlight);
    }

    function getClosestPoint({
        clientX,
        clientY
    }, {
        x,
        y,
        width,
        height
    }) {
        let closeX,
            closeY;

        if (clientX < x) {
            closeX = x;
        } else if (clientX > x + width) {
            closeX = x + width;
        } else {
            closeX = x + width / 2;
        }

        if (clientY < y) {
            closeY = y;
        } else if (clientY > y + height) {
            closeY = y + height;
        } else {
            closeY = y + height / 2;
        }

        return [closeX, closeY]
    }

    function getDistance({
        clientX,
        clientY
    }, [closeX, closeY]) {
        return Math.pow((clientX - closeX), 2) + Math.pow((clientY - closeY), 2)
    }


    function throttle(fn, delay = 0) {
        let pause = false;
        return (...args) => {
            if (pause === false) {
                fn(...args);
                pause = true;
                setTimeout(() => {
                    pause = false;
                }, delay)
            }
        }
    }

})();
