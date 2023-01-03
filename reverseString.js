/* Write a program to reverse a string */
const str = "Peter Parker is Spiderman"
// solution 1
    /* let arr = [];
    let revstr="";

    function reverseAString(str) {
        // write your solution here
        for(let char of str ){
            arr.push(char);
        }
        for (let i=0; i<arr.length; i++){
            let str1 = arr[i];
            revstr = str1.concat(revstr);
        }
        return revstr;
    } */

// solution 2

function reverseAString(str){
    let revstr = "";
    for (let i = str.length-1;i>=0;i--){
        revstr += str[i];
    }
    return revstr;
}





console.log(`Reversed string is: ${reverseAString(str)}`)