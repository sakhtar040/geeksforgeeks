const arr = [['a', 2, 100], ['b', 1, 19], ['c', 2, 27], ['d', 1, 25], ['e', 3, 15]];

const jobScheduling = (arr, tasks) => {
    //sorting
    /*let swapped;
    do{
        swapped = false;
        for(let i=0; i < arr.length-1; i++) {
            if((arr[i][2]) < (arr[i+1][2])) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);*/

    arr.sort((a, b) => b[2] - a[2]);

    //initializing
    let res = []
    let job = []
    for(let i=0; i<arr.length; i++) {
        job[i] = -1
        res[i] = false
    }

    //scheduling
    for(let i=0; i<arr.length; i++) {
        for(let j=Math.min(tasks-1, arr[i][1] - 1); j>=0; j--) {
            if(res[j] === false) {
                res[j] = true
                job[j] = arr[i][0]
                break
            }
        }
    }

    return {arr, job, res}
}

console.log(jobScheduling(arr, 3));