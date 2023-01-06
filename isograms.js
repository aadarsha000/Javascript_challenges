/* An isogram is a word that has no repeating letters, 
consecutive or non-consecutive. Implement a function that 
determines whether a string that contains only letters is an 
isogram. Assume the empty string is an isogram. Ignore letter 
case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false */

// long method
/*     function isIsogram(str){
        let strr = str.toLowerCase();
        for (let i=0; i<str.length; i++){
        let substr=strr.substring(i+1, str.length)
        console.log(substr)
        let position = substr.indexOf(strr[i])
        console.log(position)
        if (position!=-1){
            return false
            break
        }
        }
        return true
    }
 */
// short solution
function isIsogram(str){
    return new Set(str.toLowerCase()).size == str.length
}

console.log(isIsogram('bxqyjnmliudfrpvXsohgzektwa'))