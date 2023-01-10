function createPhoneNumber(numbers){
    // let str = numbers.toString();
    // return `(${str.slice(0,3)}) ${str.slice(3,6)}-${str.slice(6,10)}`
    return numbers.slice(0,3);
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))