"use strict";
//Index signature is used to represent the type of object/dictionary when the values of the object are of consistent types(same types).
//Syntax: { [key: KeyType] : ValueType }
const todaysTR = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
console.log(todaysTR.Pizza);
console.log(todaysTR["Pizza"]);
let prop = "Pizza";
console.log(todaysTR[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction]; //if we haven't defined the index signature then this will give an error while accessing value of transaction object
    }
    return total;
};
console.log(todaysNet(todaysTR));
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200],
};
// console.log(student.test) //case: If there's an undefined type in index signature, then TS will not throw an error when we try to access a member that is not defined in the object
for (const key in student) {
    console.log(`${key}: ${student[key]}`); //keyof [Object] creates a union type specific of types used in [object], so key is infered as the union type of object values
}
//or
Object.keys(student).map((key) => {
    console.log(student[key]); //here we dont know type of each student hence we're using typeof
});
//use in functions
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, "name");
//type Incomes = Record<Streams, number | string>  //downside : we cannot specifically assign types such as Pizza:number, Order:string, in record it would be like pizza: number | string (not specific, like we want pizza to have only string type)
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
