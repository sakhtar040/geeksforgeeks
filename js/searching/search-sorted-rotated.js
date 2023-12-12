//My
const search = (A,l,h,key,middle = 0) => {
    //code here
     let min = 0;
     let max = A.length - 1;
     let mid = Math.floor((max-min)/2 + min);
     middle += mid;
     console.log(middle)
     if(A[mid] == key) {
         return middle;
     } else if(A[0] == key) {
         return 0;
     }else if(A[0] > key){
         middle++;
         return this.search(A.splice(mid + 1, A.length), min, max, key, middle);
     } else if (A[0] < key) {
         if(A[mid+1] == key) {
             return middle+1;
         } else {
             return this.search(A.splice(0, mid), min, max, key, middle);
         }
     } else {
         return -1;
     }
 }

//there's
const searchh = (A,l,h,key) => {
    if (l > h) {
        return -1;
    }
    let mid = Math.floor((l + h) / 2);
    if (A[mid] == key){
        return mid;
    }
    if (A[l] <= A[mid]) {
        if (key >= A[l] && key <= A[mid]) {
            return this.search(A, l, mid - 1, key);
        }
        return this.search(A, mid + 1, h, key);
    }
    if (key >= A[mid] && key <= A[h]){
        return this.search(A, mid + 1, h, key);
    }
    return this.search(A, l, mid - 1, key);
}