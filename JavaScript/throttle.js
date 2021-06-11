let throttle = function (fn, delay = 10000) {
    let last = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - last < delay) {
            return;
        }
        last = now;
        fn(...args);
    }
}

/* usage 
window.addEventListener('resize', throttle(e => {
    console.log('asdf')
}))
*/