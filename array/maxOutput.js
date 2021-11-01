const array = [10, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const output = 330

const rotateArray = (arr, n) => {
  let i=0;
	let j=n-1;
	while(i!=j) {
		let temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
		i++;
	}
	return arr
}

const getSum = (arr, n) => {
	let sum = 0;
	for(let i=0; i<n; i++) {
		sum += i * arr[i];
	}
	return sum;
}

const validateOutput = (arr, n, output) => {
	let sum = getSum(arr, n);
	let count = 0;
	console.log('Sum', sum)
	while(count != n) {
		arr = rotateArray(arr, n);
		console.log('While', sum, arr, getSum(arr, n))
		if(getSum(arr, n) >= sum) {
			sum = getSum(arr, n);
		}
		count++
	}
	return sum;
}

console.log(validateOutput(array, 10, output))


//Solution2
class Solution {
    max_sum(a, n){
        let cum_sum = 0;
        for (let i=0; i<n; i++)
            cum_sum += a[i];
     
        // Compute sum of i*arr[i] for initial
        // configuration.
        let curr_val = 0;
        for (let i=0; i<n; i++)
            curr_val += i*a[i];
     
        // Initialize result
        let res = curr_val;
     
        // Compute values for other iterations
        for (let i=1; i<n; i++)
        {
            // Compute next value using previous
            // value in O(1) time
            let next_val = curr_val - (cum_sum - a[i-1])
                        + a[i-1] * (n-1);
     
            // Update current value
            curr_val = next_val;
     
            // Update result if required
            res = Math.max(res, next_val);
        }
     
        return res;
    }
}