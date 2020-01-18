// https://leetcode.com/problems/top-k-frequent-words/description/

const topKFrequent = function (list, k) {
  // create a hashmap of word tally
  const map = list.reduce((tally, el) => {
    tally.set(el, tally.get(el) + 1 || 1);
    return tally;
  }, new Map());

  // create a new sorted map. First check the count to sort it by count. If they have same count sort alphabetically
  const mapSort1 = new Map([...map.entries()].sort((a, b) => {
    if (b[1] > a[1]) {
      return 1;
    }
    if (b[1] < a[1]) {
      return -1;
    }
    if (b[1] === a[1]) { // If they have same count sort alphabetically
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
