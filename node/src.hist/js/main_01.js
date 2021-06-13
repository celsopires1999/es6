let array = [1,2,3,4,5,6];
let obj = {
    firstName : 'celso',
    lastName : 'pires'
}; 
console.log('com indice');
for(let i in array){
    console.log(i,array[i]);
}

for(let i in obj){
    console.log(i, obj[i]);
}

console.log('com value');
for(value of array){
    console.log(value);
}

let keys = Object.keys(obj);
for(let key of keys){
    console.log(obj[key]);
}

console.log('array de objetos');
let arrayObj = [
    {firstName: 'celso', lastName: 'pires'}, 
    {firstName: 'inês', lastName: 'lira'}, 
    {firstName: 'josé', lastName: 'cunha'}, 
     {firstName: 'ricardo', lastName: 'almeida'}
]

for(let obj of arrayObj){
    console.log(obj);
}

console.log('Array Iterator');
console.log(array.entries());
for(let [index, value] of array.entries()){
    console.log(index, value);
}
