// find longest palindrome from string. Shuffling and deleting is allowed

function longestPalindrome(str) {
  // create a frequency map for characters of given string
  const freq = {};
  for (const ch of str) {
    freq[ch] = freq[ch] + 1 || 1;
  }
  let mid_char = ''; // stores odd character
  let left = ''; // stores left substring
  // iterate through the frequency map
  for (const [ch, count] of Object.entries(freq)) {
    // if the frequency of current character is odd
    // update mid to current char (and discard old one)
    if (count % 2 === 1) {
      mid_char = ch;
    }
    // append half of the characters to the left substring
    // (other half goes to the right substring in reverse order)
    left += ch.repeat(count / 2);
    console.log(left);
  }

  // right substring will be reverse of left substring
  const right = left.split('').reverse().join('');

  // return string formed by the left substring, mid character (if any)
  // and the right substring
  return (left + mid_char + right);
}

console.log(longestPalindrome('bbaaaad'));
