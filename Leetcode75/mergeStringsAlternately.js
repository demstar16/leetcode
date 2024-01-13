/**
 * Big O Notation considering it uses a nested for loop and has to go through
 * the entire string of each I'd say it is Quadratic...
 * O(n^2)
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let mergedString = "";
    let lastJ;
    let firstWord2 = true;
    let secondWordCount = 0;
    for (let i = 0; i < word1.length; i++) {
        mergedString += word1[i];
        for (let j = 0; j < word2.length; j++) {
            if (j > lastJ) {
                mergedString += word2[j];
                secondWordCount++;
                lastJ = j;
                break;
            } else if (firstWord2) {
                mergedString += word2[j];
                secondWordCount++;
                lastJ = j;
                firstWord2 = false;
                break;
            }
        }
    }
    if (secondWordCount < word2.length) {
        mergedString += word2.slice(secondWordCount, word2.length);
    }
    return mergedString;
};
// Alternate Solution I really liked with O(n) so much better
//---------------------------------------------------
// var mergeAlternately = function (word1, word2) {
//     let result = ''; 

//     for (let i = 0; i <  Math.max(word1.length, word2.length); i++) { 
//         if (word1[i]) result += word1[i]; 
//         if (word2[i]) result += word2[i];
//     }

//     return result;
// };