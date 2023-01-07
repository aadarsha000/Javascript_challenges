/* Write a function to truncate a string to a certain
 number of words */


//  truncateWithWordLimit("JavaScript is simple", 
//  3) returns "JavaScript is simple"


//  truncateWithWordLimit("Codedamn is the best place to
// learn to code", 5) returns "Codedamn is the best place"


const strrr = 'JavaScript is simple but not easy to master';
const wordLimit = 3

function truncateWithWordLimit(str, wordLimit) {
    // write your solution here
    return str.split(' ').slice(0,wordLimit).join(' ');
}

console.log(`Truncated string: ${truncateWithWordLimit(strrr, wordLimit)}`)
