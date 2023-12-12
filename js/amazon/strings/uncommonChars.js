const uncommonChars = (A, B) => {
    let set = new Set()
    for(let i=0; i<A.length; i++) {
        if(!B.includes(A[i])) {
            set.add(A[i])
        }
    }

    for(let i=0; i<B.length; i++) {
        if(!A.includes(B[i])) {
            set.add(B[i])
        }
    }

    return set.keys()
}

console.log(uncommonChars("geeksforgeeks", "geeksquiz"))