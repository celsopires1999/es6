let array1 = [1,2,3,4,5,6];
let array2 = array1.map(value => value * 10);

console.log(array1);
console.log(array2);

let array3 = array1.map((value, index) => {
    let valTemp = value + index;
    return valTemp;
});

console.log(array3);

let array4 = array1.map(value => value > 3 ? 0 : 2);
console.log(array4);
