function quickSort(arr){
    if(arr.length < 2){
        return arr;
    }

    let pivot = arr[arr.length -1];
    let left = [];
    let right = [];

    for(let i = 0; i < arr.length - 1; i++){ //dont forget '-1', else there will be infinte calls
        if(arr[i] < pivot){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}