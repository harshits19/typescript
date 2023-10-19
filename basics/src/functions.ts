type strOrNum = string | number
type strOrNumArray = (string | number)[]
type UserId = strOrNum //copying one type into another type

// interface PostId = strOrNum //not possible

//Literal types
let myName: "harshit"
//myName = "gaur" //it will throw error - Type "gaur" is not assignable to type "harshit"
myName = "harshit" //when we assign a value tos literal type , it will accept only defined type values
console.log(myName)
let moreNames: "haashi" | "shivu" | "sachii"
moreNames = "haashi"
moreNames = "shivu"
moreNames = "sachii" //all 3 permitted

// functions
const add = (a: number, b: number): number => { //this function has return type number
  return a + b
}

const logMsg = (message: any): void => { //when we dont return anything, use void
  console.log(message)
}

logMsg("Hello!")
logMsg(add(2, 3))

let subtract = function (c: number, d: number): number { //function (old)
  return c - d
}

//Type Aliases allow defining types with a custom name (an Alias). can be used for string,array or objects
//type alias for functions
type mathFunction = (a: number, b: number) => number
interface mathFunctionT {
  (a: number, b: number): number
}

let multiply: mathFunction = function (c, d) { //here fn multiply has type of mathFunction
  return c * d
}

// optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c
  }
  return a + b
}

// default param value
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c
}

logMsg(addAll(2, 3, 2))
logMsg(addAll(2, 3))
logMsg(sumAll(2, 3))
logMsg(sumAll(undefined, 3)) //when we dont want to pass 1st arg, we use undefined in its place

// Rest Parameters
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr)
}
logMsg(total(10, 2, 3))

const createError = (errMsg: string): never => {
  throw new Error(errMsg)
}
// custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false
}

// use of the never type
const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string"
  if (isNumber(value)) return "number"
  return createError("This should never happen!")
}
