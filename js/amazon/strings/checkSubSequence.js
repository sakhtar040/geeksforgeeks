const isSubSequence = (A,B) => {
    let i=0
    let j=0
    while(i < A.length && j < B.length) {
        if(A[i] === B[j]) {
            i++
            j++
        } else {
            j++
        }
    }
    return i === A.length
}

console.log(isSubSequence("frs", "geeksforgeeks"))