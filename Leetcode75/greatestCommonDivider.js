/**
 * This is not my solution... I couldn't figure this one out
 * Since my main focus for right now is getting familiar with
 * Space and Time complexity I just went with the solution after hours of attempts
 * Space Complexity - O(1)
 * Time Complexuty - O(n)
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {

    if (str1 + str2 != str2 + str1) {
        return "";
    } else if (str1 == str2) {
        return str1;
    } else if (str1.length > str2.length) {
        return gcdOfStrings(str1.substring(str2.length), str2);
    } else {
        return gcdOfStrings(str2.substring(str1.length), str1)
    }
};