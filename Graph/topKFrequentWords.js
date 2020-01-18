// https://leetcode.com/problems/top-k-frequent-words/description/

// This first method doesn't generate result in alphabetical order
var topKFrequent = function (list, k) {
  const map = list.reduce((map, el) => {
    map.set(el, map.get(el) + 1 || 1);
    return map;
  }, new Map());

  const mapSort1 = new Map([...map.entries()].sort((a, b) => {
    if (b[1] > a[1]) {
      return 1;
    }
    if (b[1] < a[1]) {
      return -1;
    }
    if (b[1] === a[1]) {
      if (a[0] > b[0]) {
        return 1;
      }
      if (a[0] < b[0]) {
        return -1;
      }
    }
    return 0;
  }));

  const results = [...mapSort1.keys()];
  return results.slice(0, k);
};

// this method uses String.prototype.localeCompare to return results in aplhabetical order
var topKFrequentLocale = function (words, k) {
  const wordCounts = words.reduce((a, b) => { // use 'a' object to create a tally
    a[b] ? a[b]++ : a[b] = 1;
    return a;
  }, {});
  return Object.keys(wordCounts).sort((a, b) => {
    if (wordCounts[a] > wordCounts[b]) return -1;
    if (wordCounts[b] > wordCounts[a]) return 1;

    return a.localeCompare(b);
  }).slice(0, k);
};
