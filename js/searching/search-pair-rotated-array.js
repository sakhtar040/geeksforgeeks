const sortArray = (arr) => {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

binarySearch = (arr, target, min, max) => {
    if (min === undefined) min = 0;
    if (max === undefined) max = arr.length - 1;
    if(arr[0] === target) return true;

    let mid = Math.floor((max - min) / 2 + min);
    if (max <= min && arr[mid] !== target) return false;
    else if (arr[mid] === target) return true;
    else if (arr[mid] < target) return binarySearch(arr, target, mid + 1, max);
    else return binarySearch(arr, target, min, mid - 1);
}

const searchPair = (arr, target) => { // n2
    arr = sortArray(arr); // n2
    for(let i=0; i<arr.length; i++) { // n
        let remTarget = target - arr[i];
        let isPresentRemTarget = binarySearch(arr, remTarget); // logn
        if(isPresentRemTarget) {
            return true;
        }
    }
    return false;
}

console.log(searchPair([11, 15, 6, 8, 9, 10], 10));

const usingPivot = (arr, target) => {
    let i;
    let n = arr.length;
    for(i=0; i<arr.length; i++) { // n
        if(arr[i] > arr[i+1]) {
            break;
        }
    }

    let l = (i+1)%n;
    let h = i;

    while(l !== h) { // n
        if(arr[l] + arr[h] === target) {
            return true
        }

        if(arr[l] + arr[h] > target) {
            h = (n + h - 1) % n;
        } else {
            l = (l + 1) % n;
        }
    }
    return false;
}

console.log(usingPivot([11, 15, 6, 8, 9, 10], 61));

