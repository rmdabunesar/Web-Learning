
// {
//     let x = 10;
//     let y = 20;

//     console.log("x + y =", x + y);
//     console.log(`x + y = ${x + y}`); // prefarable
// }





// function sumNumber(x, y) {
//     let sum = x + y;
//     console.log(`x + y = ${sum}`);
// }
// sumNumber(10, 20);




// let productNumber = function(x, y) {
//     product = x * y;
//     console.log(`x * y = ${product}`);
// }
// productNumber(10, 20);




// function Person(naam, boyos) {
//     this.name = naam;
//     this.age = boyos;
//     this.introduce = function () {
//         console.log(`My name is ${this.name} and I am ${this.age} years old.`);
//     }
// }

// let person1 = new Person("John Deo", 30);
// console.log(person1.age);

// let person2 = new Person("Jane Doe", 25);
// console.log(person2.age);





// class Person {
//     constructor(naam, boyos) {
//         this.name = naam;
//         this.age = boyos;
//         this.introduce = function () {
//             console.log(`My name is ${this.name} and I am ${this.age} years old.`);
//         }
//     }
// }

// let person1 = new Person('John Deo', 30);
// console.log(person1.name);

// let person2 = new Person('Jane Doe', 25);
// console.log(person2.name);






// export default function greet(name) {
//     console.log(`Hi ${name}!`);
// };




// let numArr = [1, 2, 3];

// let newArr1 = [numArr, 4, 5, 6];
// console.log(newArr1); // [[1, 2, 3], 4, 5, 6]


// let newArr2 = [...numArr, 4, 5, 6];
// console.log(newArr2); // [1, 2, 3, 4, 5, 6]





let letters = ['a', 'b', 'c', 'd', 'e'];
let lettter = letters.map((value, index) => {
    return (`${value} = ${index + 1}`);
})

console.log(lettter); 