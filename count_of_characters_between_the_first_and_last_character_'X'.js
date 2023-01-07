/* Write a function which accepts a string argument and returns
the count of characters between the first and last character
'X' */

const strr = 'XeroX';

function getTheGapX(str) {
    // write your solution here
    let first = str.indexOf('X');
    let second = str.lastIndexOf('X')
    let gap = 0;
    if (first==1){
        gap = -1;
    }
    else{
        gap = (second-first)
    }
    return gap
}

console.log(`Gap between the X's: ${getTheGapX(strr)}`)// 4
// javascript   -1