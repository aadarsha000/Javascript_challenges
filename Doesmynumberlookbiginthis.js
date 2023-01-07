/* A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcisstic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1652 (4 digits), which isn't:

    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938 */

function narcissistic(value) {
    // Code me to return true or false
    let num =String(value).split('');
    let power = num.length;
    let narNum=0;
    for(let i=0; i<power; i++){
        narNum +=Math.pow(+num[i], power);
    }
    if (narNum == value){
        return true
    }
    return false
}

console.log(narcissistic(1652))