//Index signature is used to represent the type of object/dictionary when the values of the object are of consistent types(same types).
//Syntax: { [key: KeyType] : ValueType }

interface TransactionObj {
  readonly [index: string]: number //we can also make it readonly so that it remains unchanged,we can also provide union types if we have more than one type of data
  //[index:string | number]: number | string
  Pizza: number //here all values of objects are of same type
  Books: number
  Job: number
}

const todaysTR: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
}
console.log(todaysTR.Pizza)
console.log(todaysTR["Pizza"])

let prop: string = "Pizza"
console.log(todaysTR[prop])

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0
  for (const transaction in transactions) {
    total += transactions[transaction] //if we haven't defined the index signature then this will give an error while accessing value of transaction object
  }
  return total
}
console.log(todaysNet(todaysTR))

//alternative of index signatures
interface Student {
  //[key: string]: string | number | number[] | undefined
  name: string
  GPA: number
  classes?: number[]
}
const student: Student = {
  name: "Doug",
  GPA: 3.5,
  classes: [100, 200],
}
// console.log(student.test) //case: If there's an undefined type in index signature, then TS will not throw an error when we try to access a member that is not defined in the object

for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`) //keyof [Object] creates a union type specific of types used in [object], so key is infered as the union type of object values
}
//or
Object.keys(student).map((key) => {
  console.log(student[key as keyof typeof student]) //here we dont know type of each student hence we're using typeof
})
//use in functions
const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`)
}
logStudentKey(student, "name")

//Records

// interface Incomes {
//     [key: string]: number
//     [key: "salary"]:number //not allowed to define literal types
// }
type Streams = "salary" | "bonus" | "sidehustle"

type Incomes = Record<Streams, number> //feature: we can us literal types which is not allowed in index signatures
//type Incomes = Record<Streams, number | string>  //downside : we cannot specifically assign types such as Pizza:number, Order:string, in record it would be like pizza: number | string (not specific, like we want pizza to have only string type)

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: 250,
}

for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes])
}
