var topKFrequent = function (list, k) {
    let map = list.reduce(function(map, el){
        map.set(el, map.get(el) + 1 || 1)
        return map
    }, new Map())
    
    let mapSort1 = new Map([...map.entries()].sort((a, b) => {
        if(b[1] > a[1]) {
            return 1;
        } 
        if(b[1] < a[1]) {
            return -1;
        }
        if(b[1] === a[1]) {
            if (a[0] > b[0]) {
                return 1;
            }
            if (a[0] < b[0]) {
                return -1;
            }
        }
        return 0;
    }));
    
    let results = [...mapSort1.keys()]
    return results.slice(0, k);
}