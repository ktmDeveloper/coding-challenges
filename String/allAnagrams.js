
// https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem

function sherlockAndAnagrams(s) {
  let pairs = 0;
  const subStrings = new Map();

  // find all substrings of our string, count them in a hash
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      // An anagram is produced by rearranging the letters of 's' into 't'. 
      // Therefore, if 't' is an anagram of 's', sorting both strings will result in two identical strings
      const tempSubString = s.slice(i, j).split('').sort().join('');
      subStrings.set(tempSubString, subStrings.get(tempSubString) + 1 || 1);
    }
  }

  // count the pairs of substrings
  for (const keys of subStrings.keys()) {
    if (subStrings.get(keys) > 1) {
      // Once occurrence ‘o’ of each frequency array is stored, 
      // total anagrams will be the sum of o*(o-1)/2 for all different 
      // frequency arrays because if a particular substring has ‘o’ anagrams 
      // in string total o*(o-1)/2 anagram pairs can be formed.
      const temp = (subStrings.get(keys)) * (subStrings.get(keys) - 1) / 2;
      pairs += temp;
    }
  }
  return pairs;
}
