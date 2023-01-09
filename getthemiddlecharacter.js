/* You are going to be given a word. Your job is to return 
the middle character of the word. If the word's length is 
odd, return the middle character. If the word's length is 
even, return the middle 2 characters. */

function getMiddle(s)
{
    let mid;
    let length = s.length
    
    return mid = (length%2 == 0)? (s.slice(length/2-1, length/2+1)) : (s[Math.ceil(length/2-1)])
}

console.log(getMiddle("testing"),
getMiddle("middle"),
getMiddle("A"));