let a: number = 24 //explicit type declaration
let b = "12" //compiler assumes it's a string, this is implicit type case
let c: boolean
const d: number = 6
let e: any //any can be used when we dont know what type of data we are going to store (use rarely)
c = false
console.log(a / d)
// console.log(a / b) //produces an error

const func = (a: number, b: number) => {
  return a + b
}
console.log(func(1, 2))

let f: number | boolean //when we have more than one type (its called union type)
f = true
f = 0
let g : string | number | boolean ="harshit" //also valid
g = 25

let regEx:RegExp = /\w+/g //type = regular expression
console.log(regEx)