// sort a stack using only a additional stack
function sort(stack) {
    let newStack = []

    newStack.push(stack.pop())

    while (stack.length > 0) {
        let temp = stack.pop()
        while (newStack.length > 0 && temp > newStack[newStack.length - 1]) {
            stack.push(newStack.pop())
        }
        newStack.push(temp)
    }
    return newStack
}

console.log(sort([3, 2, 5, 4, 1, 123, 234, 1, 231, 3234, 2342]))