//https://leetcode.com/problems/top-k-frequent-words/description/

//This first method doesn't generate result in alphabetical order
var topKFrequent = function (list, k) {
    let map = new Map();

    for (let i = 0; i < list.length; i++) {
        let key = list[i];
        if (map.has(key)) {
            let counter = map.get(key)
            let newCounter = counter + 1
            map.set(key, newCounter)
        } else {
            map.set(key, 1)
        }
    }
    let mapSort1 = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));

    let results = [...mapSort1.keys()]

    return results.slice(0, k);
}

//this method uses String.prototype.localeCompare to return results in aplhabetical order
var topKFrequent = function (words, k) {
    const wordCounts = words.reduce((a, b) => { // use 'a' object to create a tally
        a[b] ? a[b]++ : a[b] = 1;
        return a;
    }, {});
    return Object.keys(wordCounts).sort((a, b) => {
        if (wordCounts[a] > wordCounts[b]) return -1;
        if (wordCounts[b] > wordCounts[a]) return 1;
        else {
            return a.localeCompare(b);
        }
    }).slice(0, k);
};