/*  Given an unsorted array of length N, and we have to find the largest gap 
 *  between any two elements of the array. In simple words, find max(|Ai-Aj|) 
 *  where 1 ≤ i ≤ N and 1 ≤ j ≤ N. 
 * 
 */

function findLargestGap(input) {
    let max = min = input[0];
    input.forEach(num => {
        if(num > max) {
            max = num;
        }
        if(num < min) {
            min = num;
        }
    });
    return max - min;
}

let input1 = [3, 10, 6, 7];
let input2 = [-3, -1, 6, 7, 0];

console.log(findLargestGap(input1));
console.log(findLargestGap(input2));






