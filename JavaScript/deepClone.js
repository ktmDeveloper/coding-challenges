let obj = {
    a: 1,
    b: 2,
    c: {
        d: 3
    },
    k: 10
};

//let obj2 = Object.assign({}, obj)

//let obj2 = JSON.parse(JSON.stringify(obj))

let deepClone = function(obj) {
    let clone = {};

    for (let key in obj) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
            clone[key] = deepClone(obj[key]);
        } else {
            clone[key] = obj[key];
        }
    }

    return clone;
};

let obj2 = deepClone(obj);
obj.c.d = 22;

console.log(obj);
console.log(obj2);