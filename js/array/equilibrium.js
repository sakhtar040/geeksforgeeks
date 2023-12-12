const equilibriumPoint = (a, n) => {
    if(n === 1) {
        return 1
    }

    if(n === 0 || n === 2) {
        return -1
    }

    let totalSum = 0

    for(let i=0; i<n; i++) {
        totalSum += a[i]
    }

    let leftSum = 0;

    for(let i=0; i<n; i++) {
        if(leftSum === totalSum - a[i]) {
            return i+1
        }
        leftSum += a[i]
        totalSum -= a[i];
    }

    return -1;
}