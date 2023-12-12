const sortedMatrix = (N,Mat) => {
    //code here
    let arr = []
    for(let row=0; row<N; row++){
        arr = [...arr, ...Mat[row]]
    }
    arr.sort((a, b) => a - b)
    let newMat = [...new Array(N)].map(() => arr.splice(0, N))
    return newMat
}

const mat = [
    [10,20,30,40],
    [15,25,35,45],
    [27,29,37,48],
    [32,33,39,50]
]
console.log(sortedMatrix(4, mat));


/**
 *
 *
 *
 *
 *
 *
 *
 * int arr[] = new int[N*N];
 *         int p = 0;
 *         for(int i = 0;i<N;i++){
 *             for(int j = 0;j<N;j++){
 *                 arr[p++] = Mat[i][j];
 *             }
 *         }
 *
 *         Arrays.sort(arr);
 *
 *         int ans[][] = new int[N][N];
 *         p = 0;
 *         for(int i = 0;i<N;i++){
 *             for(int j = 0;j<N;j++){
 *                 ans[i][j] = arr[p++];
 *             }
 *         }
 *
 *         return ans;
 */
