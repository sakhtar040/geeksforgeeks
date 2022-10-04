const majorityElement = (arr) => {
    let obj = {}

    for(let i=0; i<arr.length; i++) {
        if(obj[arr[i]]) {
            obj[arr[i]] = ++obj[arr[i]]
        } else {
            obj[arr[i]] = 1
        }
    }

    let majority = Math.floor(arr.length / 2)

    for(let item in obj) {
        if(obj[item] > majority) {
            return item
        }
    }

    return -1
}

console.log(majorityElement([2,2,1,1,1,2,2]))