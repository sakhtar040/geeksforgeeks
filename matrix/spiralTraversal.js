function spiralPrint(m, n, arr) {
    let i, k = 0, l = 0;
    let result = []

    while (k < m && l < n) {
        // print the first row from the remaining rows
        for (i = l; i < n; ++i) {
            result.push(arr[k][i])
        }
        k++;
        console.log(k, m)

        // print the last column from the remaining columns
        for (i = k; i < m; ++i) {
            result.push(arr[i][n - 1])
        }
        n--;
        console.log(n)

        // print the last row from the remaining rows
        if (k < m) {
            for (i = n - 1; i >= l; --i) {
                result.push(arr[m - 1][i])
            }
            m--;
        }

        // print the first column from the remaining columns
        if (l < n) {
            for (i = m - 1; i >= k; --i) {
                result.push(arr[i][l])
            }
            l++;
        }
    }

    return result
}

console.log(spiralPrint(3, 3, [[1,2,3], [4,5,6], [7,8,9]]))