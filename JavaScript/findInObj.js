/*
Given an in-memory representation of a JSON document, find the object in that document that is addressed by a string path.

find(obj, "books.fiction") -> [...]

"books.fiction" - Returns the list of fiction books.
"books.fiction.0.author" - Returns the string "Herman Melville".

*/

// use recursion
// /path -> split(‘.’) -> queue
// if books.fiction isArray() ? obj[queue.shift()] : obj.queue.shif();
// recursion(obj[firstItem of queue], rest of the queue)
// if the length queue is 1: return obj[queue.shift()]


// time complexity: 0(n) -> n is length of pathArr
// space complexity: O(n)//test case
// “books.fiction.0.author”

// obj = {‘author: herman’....}
// pathArr -> []
// isArr -> false
// firstPath -> “author”

// return herman ...

/*
---------------------------------
part 2

add wildcard '*'

"books.fiction.*.title" -> ["Moby Dick", "The Lord of the Rings"]
"books.*.0.title" -> ["Moby Dick", "Guns, Germs, and Steel"]
"books.*.0"-> [{}, {}]


//if theres is ‘*”
// isAstrik ?
	foreach obj/array
		result = [findRecur(obj[0]), findRecur(obj[1] …]

	return result


---------------------------------------------------------

*/

const obj = {
  books: {
    fiction: [{
      author: 'Herman Melville',
      title: 'Moby Dick',
      isbn: '978-0553213119',
      price: 8.99,
      related: [
        '978-0684801223',
        '978-0743273565',
      ],
    },
    {
      author: 'J. R. R. Tolkien',
      title: 'The Lord of the Rings',
      isbn: '978-0395193952',
      price: 22.99,
      related: [
        '978-0547928241',
        '978-0345325815',
      ],
    },
    ],
    nonfiction: [{
      author: 'Jared M. Diamond',
      title: 'Guns, Germs, and Steel',
      isbn: '978-0393317558',
      price: 9.49,
      related: [
        '978-0062316097',
        '978-0143117001',
      ],
    },
    {
      author: 'Truman Capote',
      title: 'In Cold Blood',
      isbn: '978-0679745587',
      price: 14.99,
      related: [
        '978-0393322231',
        '978-1981029877',
      ],
    },
    ],
  },
};


function find(obj, path) {
  if (!obj || !path) {
    return null;
  }

  const pathArr = path.split('.'); // [’books’, ‘fiction’, ‘0’] //O(n)
  return findRecur(obj, pathArr);
}

function findRecur(obj, pathArr) {
  const isArr = Array.isArray(obj); // O(1)
  const firstPath = pathArr.shift(); // O(1)

  if (firstPath === '*') {
    const res = [];
    for (const val of Object.values(obj)) {
      isValArr = Array.isArray(val);
      const result = isValArr ? findRecur(val[parseInt(firstPath)], pathArr) : findRecur(val[firstPath], pathArr);
      res.push(result);
    }
    return res;
  }

  if (pathArr.length === 0) {
    return isArr ? obj[parseInt(firstPath)]
      : obj[firstPath];
  }

  return isArr ? findRecur(obj[parseInt(firstPath)], pathArr)
    : findRecur(obj[firstPath], pathArr);
}

/*
"books.fiction" - Returns the list of fiction books.
"books.fiction.0.author" - Returns the string "Herman Melville".
*/
console.log(find(obj, 'books.*.0.title'));
