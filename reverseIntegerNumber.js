const num = 3849;

function reverseGivenInteger(num) {
   let str = String(num);
   let revnum = "";
   for(let i=str.length-1; i>=0; i--){
        revnum += str[i];
   }
   return +revnum
}
console.log(`Reversed integer is: ${reverseGivenInteger(num)}`)