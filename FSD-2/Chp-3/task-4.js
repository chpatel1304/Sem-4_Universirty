//Wirte Node js code to create a class name person by assiging name and age in form of members create onefucntion named elder which returns elder person object details of elder person shdoul be printed in console as well as in file 
const fs = require('fs');

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
function elder(people) {
    if (people.length === 0) {
        return null;
    }

    let elderPerson = people.reduce((prev, current) => {
        return (prev.age > current.age) ? prev : current;
    });

    return elderPerson;
}
const people = [
    new Person('John', 30),
    new Person('Alice', 35),
    new Person('Bob', 40)
];
const elderPerson = elder(people);
console.log(`Elder Person: ${elderPerson.name}, Age: ${elderPerson.age}`);
const fileContent = `Elder Person: ${elderPerson.name}, Age: ${elderPerson.age}\n`;
fs.writeFileSync('elder_details.txt', fileContent);
console.log('Elder person details saved to elder_details.txt');