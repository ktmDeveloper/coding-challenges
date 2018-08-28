//https://www.geeksforgeeks.org/find-if-string-is-k-palindrome-or-not/
var kPal = function(s, k) {
	let left = 0;
	let right = s.length - 1;
	let first = true;
	while (left < right) {
		if (s.charAt(left) != s.charAt(right)) {
			if (k <= 0) {
				return false;
			}
			k--;
			if (first) {
				left++;
				first = false;
			} else {
				right--;
				first = true;
			}
		} else {
			left++;
			right--;
		}
	}

	return true;
};

console.log(kPal("abcdecba", 1));
console.log(kPal("abcdeca", 2));
console.log(kPal("acdcb", 1));
