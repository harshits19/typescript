type One = string
type Two = string | number
type Three = "hello"

//keyword (-as-) or (<>) used to assign type

//convert to more or less specific
let abc: One = "hello"
let bcc = abc as Two //less specific - converting a string type into string or number type
let ccc = abc as Three //more specific - converting string into a "hello" literal

let ddd = <One>"world" //here ddd has type One which is string, same as let ddd = "world" as One
//(<>) brackets cannot be used in React TSX files

const addORConcat = (a: number, b: number, c: "add" | "concat"): number | string => {
  //this fn accepts two nums and 1str (add or concat) and return num or string typed value
  if (c === "add") return a + b //returns added nums
  return "" + a + b //returns concatenated string
}
let myVal: string = addORConcat(2, 4, "concat") as string
console.log(typeof myVal) //string is returned
//A problem statement coz, we are explicitley assigning number type to the fn while assigning number type to nextVal, but on otherhand,string type is returned from fn, so its a case of mistake, and TS is believing it, and it sees no problem in code
let nextVal: number = addORConcat(2, 4, "concat") as number
console.log(typeof nextVal) //string is returned

// 10 as string //error
// 10 as unknown as string //no error

//DOM
const img = document.querySelector("#myID") //TS infers it's an element
const myImg = document.getElementById("myID") //TS infers it's a html element
//roblem: TS infers them to be an element/HTML element, so for example ,
// img.src = "#" // if we want to describe a property on img tag, it will give error, as that will be undefined for any general element
const imgT = document.querySelector("#myID") as HTMLImageElement //this solves the above problem as now TS specifically identifies it as image element
imgT.src = "#" //now we can use all properties of img element


// Original JS code
// const year = document.getElementById("year")
// const thisYear = new Date().getFullYear()
// year.setAttribute("datetime", thisYear)
// year.textContent = thisYear

// 2nd variation: (with Type Assertion)
const year = document.getElementById("year") as HTMLSpanElement
const thisYear: string = new Date().getFullYear().toString()
year.setAttribute("datetime", thisYear)
year.textContent = thisYear