function partition(arr, start, end){
    const pivotValue = arr[end];
    let pivotIndex = start; 
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        pivotIndex++;
        }
    }
    
[arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 
    return pivotIndex;
};
function quickSortIterative(arr) {
    stack = [];
    stack.push(0);
    stack.push(arr.length - 1);
    while(stack[stack.length - 1] >= 0){
    	end = stack.pop();
        start = stack.pop();
        pivotIndex = partition(arr, start, end);
        if (pivotIndex - 1 > start){
        	stack.push(start);
            stack.push(pivotIndex - 1);
		}
        if (pivotIndex + 1 < end){
        	stack.push(pivotIndex + 1);
            stack.push(end);
        }
    }
}
ourArray = [7, -2, 4, 1, 6, 5, 0, -4, 2]
quickSortIterative(ourArray)

console.log(ourArray)
