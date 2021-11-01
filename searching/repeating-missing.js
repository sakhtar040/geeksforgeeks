//my
const sortArray = (arr) => {
	let swapped;
	do{
		swapped = false;
		for(let i=0; i<arr.length-1; i++) {
			if(arr[i] > arr[i+1]) {
				let temp = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = temp;
				swapped = true;
			}
		}
	} while(swapped);
	return arr;
}

const findRepeatingAndMissing = (arr) => {
	arr = sortArray(arr);
	let n = arr[arr.length -1];
	let missing = arr[0];
	let repeated = arr[0];
	for(let i=1; i<n; i++) {
		if(arr[i] == repeated) {
			break;
		} else {
			repeated = arr[i];
		}
	}
	console.log(arr)
	for(let i=0; i<n-1; i++) {
		if((arr[i+1] - arr[0]) !== arr[i]) {
			if(arr[i+1] == arr[i]) {
				continue;
			}
			
			missing = arr[i+1] - arr[0];
			break;
		}
	}
	return {Missing: missing, Repeating: repeated};
}

console.log(findRepeatingAndMissing([12,7,5,1,13,1,10,8,11,9,2,4,3,6]))


//ther's
/* class Solution:
    def findTwoElement( self,arr, n): 
        # code here
        numberMap = {}
        rep = arr[0]
        miss = arr[0]
      
        max = len(arr)
        for i in arr:
            if not i in numberMap:
                numberMap[i] = True
                  
            else:
                rep = i
          
        for i in range(1, max + 1):
            if not i in numberMap:
                miss = i
        return [rep, miss] */