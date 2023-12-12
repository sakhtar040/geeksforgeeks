const minimumTimeRequired = (jobs, k) => {
    jobs.sort((a,b)=>a-b);
    let result = Infinity;
    let lastJobIndex = jobs.length-1;
    if(jobs.length === k) return jobs[lastJobIndex];
    const workersArray = new Array(k).fill(0);      // Creating Buckets

    function backtrack(lastJobIndex,workersArray){
        if(lastJobIndex < 0){
            result = Math.min(result, Math.max(...workersArray));
            return;
        }
        if(Math.max(...workersArray) >= result) return;     // Pruning
        for(let currentIndex = 0; currentIndex <  workersArray.length; currentIndex++){
            if (currentIndex > 0 && workersArray[currentIndex] === workersArray[currentIndex-1]) continue;     // Pruning
            workersArray[currentIndex] += jobs[lastJobIndex];
            backtrack(lastJobIndex-1,workersArray);
            workersArray[currentIndex] -= jobs[lastJobIndex];
        }
    }
    backtrack(lastJobIndex, workersArray);
    return result
}

console.log(minimumTimeRequired([3, 2, 3], 3))