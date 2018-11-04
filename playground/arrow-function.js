var square = (x) => {
    var result = x * x;
    return result;
}

var oneMoreSquare = x => x * x;

console.log(square(9));
console.log(oneMoreSquare(10));

var person = {
    name: 'Caique C Pereira',
    sayHi: () => {
        console.log(arguments); // global arguments
        console.log(`Hi. I'm ${this.name}`); // this is not binded with arrow functions
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    }
}

person.sayHi();
person.sayHiAlt(1, 2, '3');