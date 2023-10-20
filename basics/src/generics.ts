//Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.
const stringEcho = (arg: string): string => arg //only used for strings
const echo = <T>(arg: T): T => arg //does not depend on any data-type

const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null
}
console.log(isObj(true)) //false
console.log(isObj("dave")) //false
console.log(isObj([12, 324, 123])) //false
console.log(isObj({ name: "harshit" })) //true
console.log(isObj(null)) //false

interface BoolCheck<T> {
  arg: T
  is: Boolean
}
const isTrue = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length)
    //if it's empty array
    return { arg, is: false }
  else if (isObj(arg) && !Object.keys(arg as keyof T))
    //if its empty object
    return { arg, is: false }
  return { arg, is: !!arg } // !!args = Boolean(args)
}

console.log(isTrue(false))
console.log(isTrue(0))
console.log(isTrue(true))
console.log(isTrue(1))
console.log(isTrue("Dave"))
console.log(isTrue(""))
console.log(isTrue(null))
console.log(isTrue(undefined))
console.log(isTrue({})) // modified
console.log(isTrue({ name: "Dave" }))
console.log(isTrue([])) // modified
console.log(isTrue([1, 2, 3]))
console.log(isTrue(NaN))
console.log(isTrue(-0))

//interface inheritance
interface HasID {
  id: number
}
const processUser = <T extends HasID>(user: T): T => {
  return user
}
console.log(processUser({ id: 2, name: "Hars" })) //now we have to pass id as well

//generics in class
class StateObject<T> {
  private data: T
  constructor(value: T) {
    this.data = value
  }
  get state(): T {
    return this.data
  }
  set state(value: T) {//setter doesnot have any return type
    this.data = value
  }
}

const store = new StateObject("John")
console.log(store.state)
store.state = "Dave"
//store.state = 12 //we assigned string type to our object hence it will throw error when we provide any other data type

const myState = new StateObject<(string | number | boolean)[]>([15])
myState.state = ["Dave", 42, true]
console.log(myState.state)
