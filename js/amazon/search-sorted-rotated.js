const search = (A, l, h, key) => {
    if (l > h) {
        return -1;
    }
    let mid = Math.floor((l + h) / 2);
    if (A[mid] == key) {
        return mid;
    }
    if (A[l] <= A[mid]) {
        if (key >= A[l] && key <= A[mid]) {
            return this.search(A, l, mid - 1, key);
        }
        return this.search(A, mid + 1, h, key);
    }
    if (key >= A[mid] && key <= A[h]) {
        return this.search(A, mid + 1, h, key);
    }
    return this.search(A, l, mid - 1, key);
}