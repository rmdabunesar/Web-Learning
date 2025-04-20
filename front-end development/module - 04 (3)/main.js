
// const student = {
//     name: "John Doe",
//     age: 20,
//     major: "Computer Science",
//     mark: {
//         science: 90,
//         math: 80,
//     }
// }

// console.log(student.age);
// console.log(student["major"]);




// update property
// student.age = 25;
// console.log(student.age);


// add property
// student.hobby = "Reading";
// console.log(student);


// delete property
// delete student.major;
// console.log(student);


// check if property exists
// console.log(student.mark.science);
// console.log(student["mark"]["science"]); 








// const dog = {
//     name: "Buddy",
//     bark: function () {
//         return "Woof! Woof!";
//     },
//     introduce: function () {
//         return `My name is ${this.name} and I say ${this.bark()}`;
//     }
// };

// // console.log(dog.name); 
// // console.log(dog.bark());
// console.log(dog.introduce());




// let member = {
//     name: "john deo",
// }

// member.age = function () {
//     return 20;
// }
// console.log(member.age());






//const person1 = {
//     name: "John Deo",
//     age: 25,
// }

//const person2 = {
//     name: "John Wick",
//     age: 30,
// }

// constructor function
function Person(naam, boyos, bivag) {
    this.name = naam;
    this.age = boyos;
    this.department = bivag

    this.introduce = function () {
        return `My name is ${this.name}`;
    }
}

// const person1 = new Person("John Deo", 25, "CSE");
// console.log(person1);
// console.log(person1.name);

// const person2 = new Person("John Wick", 30, "EEE");
// console.log(person2);
// console.log(person2.name);

// const person3 = new Person("John Sina", 35, "BBA");
// console.log(person3.introduce());









