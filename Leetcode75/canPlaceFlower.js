/**
 * Another easy one
 * Complexities:
 * Space Complexity O(1)
 * Time Complexity O(n)
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let amountPlanted = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] == 0 && (flowerbed[i - 1] == 0 || i - 1 < 0) && (flowerbed[i + 1] == 0 || i + 1 > flowerbed.length - 1)) {
            flowerbed[i] = 1;
            amountPlanted++;
        }
    }
    return amountPlanted >= n;
};

// I liked how this other person did their loop
// for (let i = 0; i < flowerbed.length; i++) {
//     const leftFlowerbed = flowerbed[i - 1] || 0;
//     const rightFlowerbed = flowerbed[i + 1] || 0;

//     if (leftFlowerbed + flowerbed[i] + rightFlowerbed < 1) {
//         possiblePlacedFlowersCount++;
//         i++
//     }
// }