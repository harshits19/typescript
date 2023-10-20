"use strict";
//Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.
const stringEcho = (arg) => arg; //only used for strings
const echo = (arg) => arg; //does not depend on any data-type
const isObj = (arg) => {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
console.log(isObj(true)); //false
console.log(isObj("dave")); //false
console.log(isObj([12, 324, 123])); //false
console.log(isObj({ name: "harshit" })); //true
console.log(isObj(null)); //false
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length)
        //if it's empty array
        return { arg, is: false };
    else if (isObj(arg) && !Object.keys(arg))
        //if its empty object
        return { arg, is: false };
    return { arg, is: !!arg }; // !!args = Boolean(args)
};
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue("Dave"));
console.log(isTrue(""));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({})); // modified
console.log(isTrue({ name: "Dave" }));
console.log(isTrue([])); // modified
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));
const processUser = (user) => {
    return user;
};
console.log(processUser({ id: 2, name: "Hars" })); //now we have to pass id as well
//generics in class
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject("John");
console.log(store.state);
store.state = "Dave";
//store.state = 12 //we assigned string type to our object hence it will throw error when we provide any other data type
const myState = new StateObject([15]);
myState.state = ["Dave", 42, true];
console.log(myState.state);
