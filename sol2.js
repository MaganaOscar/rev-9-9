// Given an array arr[] of integers, the task is to find the maximum sum 
// sub-array among all the possible sub-arrays.
/*
    Example:
        Input: arr[] = {-2, 1, -3, 4, -1, 2, 1, -5, 4} 
        Output: 6 
        {4, -1, 2, 1} is the required sub-array.
        Input: arr[] = {2, 2, -2} 
        Output: 4 
*/

function sumArray(inputArray) {
    let sum = 0;

    for(let i = 0; i < inputArray.length; i++) {
        sum += inputArray[i];
    }

    return sum;
}

function maxSubArraySum(input) {
    let subArrSize = 1;
    let max = 0;
    let subArr = [];

    while(subArrSize < input.length / 2) {
        for(let i = 0; i < input.length - subArrSize; i++) {
            let thisSubArr = input.slice(i, i + subArrSize + 1)
            let subArrMax = sumArray(thisSubArr);
            if(subArrMax > max) {
                max = subArrMax;
                subArr = thisSubArr;
                console.log(subArr);
            }
        }
        subArrSize++;
    }
    return max;
}

let input1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let input2 = [2, 2, -2];

console.log(maxSubArraySum(input1));
console.log(maxSubArraySum(input2));