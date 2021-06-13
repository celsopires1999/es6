export class Person {
    constructor(name, height, sex){
        this.name = name;
        this.height = height;
        this.sex = sex;
    }

    getHeight(){
        return this.height;
    }
}

export const valor = 'tô entendendo'

const myPerson = new Person('celso pires', 1.65, 'm');
console.log(myPerson);
console.log(myPerson.name, myPerson.height, myPerson.sex);
console.log('Height:', myPerson.getHeight());