/* The main idea is to count all the occurring characters 
in a string. If you have a string like aba, then the result 
should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty 
object literal, {}. */

function count (string) {  
    // The function code should be here
    let obj = {};
    count = 1;
    for(let i=0; i<string.length; i++){
        console.log(string[i])
        for(let j=i+1; j<string.length; j++){
            console.log(string[j])
            if(string[i]==string[j]){
                count++
            }
            
        }
        let str = string[i]
        obj.str==count;
        count =1;
    }
    return obj;
}

console.log(count('aba'))