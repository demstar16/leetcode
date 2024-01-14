/**
 * This problem was actually easy unlike the Greatest Common Divisor one haha
 * Current solution has:
 * Time Complexity O(n)
 * Space Complexity O(n)
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let result = [];
    let max = Math.max(...candies);
    for (const kid of candies) {
        if (kid + extraCandies >= max) {
            result.push(true);
        } else {
            result.push(false);
        }
    }
    return result;
};

// // OLD SOLUTION
// Time Complexity O(n^2)
// Space Complexity O(n)
// let result = [];
// for (const kid of candies) {
//     let kidCandies = kid + extraCandies;
//     let hasTheMost = true;
//     for (const otherKid of candies) {
//         if (kidCandies < otherKid) {
//             hasTheMost = false;
//         }
//     }
//     if (hasTheMost) {
//         result.push(true);
//     } else {
//         result.push(false);
//     }
// }
// return result;