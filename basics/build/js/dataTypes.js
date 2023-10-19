"use strict";
let tester = ["abcd"]; //array with type - string
let tests = ["saad", 213, false]; // works like normal array let tests[] = ["saad", 213, false]
let testing = ["sadsda", false, "asdad", 213]; //array of union types
// tester[0] = 231 //give error : number not assignable to string
//tuple - A tuple is a typed array with a pre-defined length and types for each index.
let myTuple = ["asc", false, 123]; //it is more strict than array as it has specified length and defined types of data
let newTuple; //as there is type defined for a specific index,we have to push same data-type in the respective index
newTuple = [false, 213]; //like arrays we can define then initialize it in seperate places
newTuple.push(123); //we can also push any data type in tuple , but after defined types in defined index, there will be no type safety(so it is not advised to push data after defined size limit)
let anotherTuple = [1234, true]; //to make tuple readonly
// anotherTuple.push(123) //generate error as this tuple is read only
let mixedArr = ["abcd", true, 1343];
mixedArr = myTuple; //possible
// myTuple = mixedArr //error: because there is no gurantee that mixedArr always have 3 elements in it, but tuple required specified no of element everytime, that's why ts will not allow it to copy array into tuple
//Objects
let obj = {};
let myObj;
myObj = []; //arrays can also be an object
myObj = mixedArr;
myObj = {}; // all 3 possible
const exObj = {
    prop1: "hars",
    prop2: false,
};
//when we create an object of type person, it will be mandatory to define all the properties except optional ones
//here male is object of type Person
let male = {
    name: "Ramu",
    age: 45,
    active: true,
    hobbies: ["cricket", 231],
};
// male.gender = "M" //throw error: property gender doesnot exist, we cannot assign an undefined property in typed object
let female = {
    name: "reena",
    // age:22,
    active: false, //valid object, bcoz age and hobbies are optional
};
male = female; //valid to copy one typed obj into another
console.log(male); //op: {name: 'reena', active: false}
//another way of defining types in object
const car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009,
};
const Raka = { name: "Raka", phoneNo: 9231239101 };
console.log(Raka); //op: {name:"Raka",phoneNo:9231239101}
//functions
const myFunc = (personObj) => {
    return `Hello ${personObj.name} !`;
};
console.log(myFunc(male)); //op: hello ramu
console.log(myFunc(female)); //op: hello reena
//enums
var Grade;
(function (Grade) {
    Grade[Grade["E"] = 0] = "E";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 6] = "C";
    Grade[Grade["B"] = 5] = "B";
    Grade[Grade["A"] = 6] = "A";
})(Grade || (Grade = {}));
console.log(Grade.E); //op : 0
console.log(Grade.D); //op : 1
console.log(Grade.C); //op : 6
console.log(Grade.B); //op : 5
console.log(Grade.A); //op : 6
