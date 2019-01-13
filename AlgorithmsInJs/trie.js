//https://leetcode.com/problems/add-and-search-word-data-structure-design/description/
// and print all the words in trie
class Node {
    constructor() {
        this.children = new Map(); // add children as map. key is the alphabet and values are the children linked to that alphabet
        this.isEnd = false; //if true, that ending is a word
    }
}


class WordDictionary {
    constructor() {
        this.root = new Node();
    }

    addWord(word) {
        let current = this.root;

        for (let i = 0; i < word.length; i++) {
            if (!current.children.has(word[i])) { // if doesnt have char as children, create one. If it does, ignore it. this way we avoid duplicate
                current.children.set(word[i], new Node()) //each new addition is a new Node() 
            }
            current = current.children.get(word[i])
        }
        current.isEnd = true;
    }

    search(word) {
        function searchWord(curr, idx) {
            if (!curr || (word.length == idx && !curr.isEnd)) {
                return false
            }
            if (word.length == idx && curr.isEnd) {
                return true
            }
            if (word[idx] == '.') { // if '.' then search for each character and see if exists in the children, if it does the do recursion
                let begin = 'a'.charCodeAt();
                for (let i = 0; i < 26; i++) {
                    let char = String.fromCharCode(begin + i);
                    if (curr.children.has(char)) {
                        if (searchWord(curr.children.get(char), idx + 1)) {
                            return true
                        }
                    }
                }
                return false;
            }
            return searchWord(curr.children.get(word[idx]), idx + 1);
        }
        return searchWord(this.root, 0)
    }

    printAll() {
        let words = []
        let print = function(current, str) {
            if (current.children.size) { // children exists then recurse
                for (let letter of current.children.keys()) {
                    print(current.children.get(letter), str.concat(letter));
                };
                if (current.isEnd) {
                    words.push(str);
                };
            } else { //if no children and str exist then that is end of trie and push it to list of words
                if (str.length) {
                    words.push(str)
                }
                return
            }
        }
        print(this.root, new String())
        return words
    }

}
