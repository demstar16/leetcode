/**
 * Relatively easy problem
 * Complexities:
 * Time O(n)
 * Space O(n)
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let stringVowels = [];
    let returnString = "";

    for (const letter of s) {
        if (vowels.includes(letter)) {
            stringVowels.push(letter);
        }
    }
    const reversedList = stringVowels.reverse();
    let placementCounter = 0;
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            returnString += reversedList[placementCounter];
            placementCounter++;
        } else {
            returnString += s[i];
        }
    }
    return returnString;
};