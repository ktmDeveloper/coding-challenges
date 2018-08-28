
var topKFrequent = function(nums, k) {
    let tally = nums.reduce(function(tally, el) {
        if (tally.has(el)) {
            tally.set(el, tally.get(el) + 1)
        } else {
            tally.set(el, 1)
        }
        return tally
    }, new Map());

    tally = new Map([...tally].sort((a, b) => b[1] - a[1]))

    let res = [];
    tally.forEach((val, key) => {
        if (k > 0) {
            res.push(key)
        }
        k--
    })
    return res
};