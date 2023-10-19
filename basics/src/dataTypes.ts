let tester: string[] = ["abcd"] //array with type - string
let tests: any[] = ["saad", 213, false] // works like normal array let tests[] = ["saad", 213, false]
let testing: (string | number | boolean)[] = ["sadsda", false, "asdad", 213] //array of union types
// tester[0] = 231 //give error : number not assignable to string

//tuple - A tuple is a typed array with a pre-defined length and types for each index.
let myTuple: [string, boolean, number] = ["asc", false, 123] //it is more strict than array as it has specified length and defined types of data
let newTuple: [boolean, number] //as there is type defined for a specific index,we have to push same data-type in the respective index
newTuple = [false, 213] //like arrays we can define then initialize it in seperate places
newTuple.push(123) //we can also push any data type in tuple , but after defined types in defined index, there will be no type safety(so it is not advised to push data after defined size limit)
let anotherTuple: readonly [number, boolean] = [1234, true] //to make tuple readonly
// anotherTuple.push(123) //generate error as this tuple is read only

let mixedArr = ["abcd", true, 1343]
mixedArr = myTuple //possible
// myTuple = mixedArr //error: because there is no gurantee that mixedArr always have 3 elements in it, but tuple required specified no of element everytime, that's why ts will not allow it to copy array into tuple

//Objects
let obj: object = {}
let myObj: object
myObj = [] //arrays can also be an object
myObj = mixedArr
myObj = {} // all 3 possible

const exObj = {
  prop1: "hars",
  prop2: false,
}
// exObj.prop1 = 123 //generate error: number not assignable to string

//defining the type of object explicitly so that we can use it later
type Person = {
  name: string
  age?: number //using '?' , we can make any property optional , type - ( number | undefined )
  active: boolean
  hobbies?: (string | number)[]
}
//when we create an object of type person, it will be mandatory to define all the properties except optional ones
//here male is object of type Person
let male: Person = {
  name: "Ramu",
  age: 45,
  active: true,
  hobbies: ["cricket", 231],
}
// male.gender = "M" //throw error: property gender doesnot exist, we cannot assign an undefined property in typed object

let female: Person = {
  name: "reena",
  // age:22,
  active: false, //valid object, bcoz age and hobbies are optional
}
male = female //valid to copy one typed obj into another
console.log(male) //op: {name: 'reena', active: false}

//another way of defining types in object
const car: { type: string; model: string; year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009,
}

//interface are same as type, it is used to define the structure in objects
interface PersonTwo {
  name: string
  active: boolean
}
//main difference btw type and interface
/* 
type PersonA = {name:string}
type PersonA = {phoneNo:number} //types cannot be merged
const Baka:PersonA = {name:"Raka",phoneNo:9231239101}
console.log(Baka) //this will throw error: duplicate identifier Person
*/
interface PersonT {
  name: string
}
interface PersonT {
  phoneNo: number
} //interfaces can be merged
const Raka: PersonT = { name: "Raka", phoneNo: 9231239101 }
console.log(Raka) //op: {name:"Raka",phoneNo:9231239101}

//functions
const myFunc = (personObj: Person) => {
  return `Hello ${personObj.name} !`
}
console.log(myFunc(male)) //op: hello ramu
console.log(myFunc(female)) //op: hello reena

//enums
enum Grade {
  E, //auto assigned value 0
  D, //auto assigned value 1 (increases automatically / prev value + 1 = 0 + 1 = 1)
  C = 6, //explicitly assigned
  B = 5, //explicitly assigned
  A, //implicitly assigned by compiler (prev value + 1 = 5 + 1 = 6)
}
console.log(Grade.E) //op : 0
console.log(Grade.D) //op : 1
console.log(Grade.C) //op : 6
console.log(Grade.B) //op : 5
console.log(Grade.A) //op : 6
