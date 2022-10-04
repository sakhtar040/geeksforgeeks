const sortPairArray = (pairs) => {
    let swapped;
    do{
        swapped = false;
        for(let i=0; i < pairs.length-1; i++) {
            console.log(pairs[i], typeof pairs[i], )
            if((pairs[i][0] + pairs[i][1]) > (pairs[i+1][0] + pairs[i+1][1])) {
                let temp = pairs[i];
                pairs[i] = pairs[i+1];
                pairs[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return pairs;
}

const KPairSmallestSum = (arr1, arr2, k) => {
    let pairs = []
    for(let i=0; i< arr1.length; i++) {
        for (let j=0; j< arr2.length; j++) {
            pairs.push([arr1[i], arr2[j]])
        }
    }
    let sortedPairArray = sortPairArray(pairs);
    return sortedPairArray.slice(0, k);
}

console.log(KPairSmallestSum([1, 7, 11], [2, 4, 6], 3))