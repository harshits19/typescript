"use strict";
//In TS, defining constructor and properties are compulsory in a class
class Coder {
    //If we define properties with the visibility modifiers, then there's no need to define the type in class on above
    constructor(name, music, age, lang = "TS") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `My age is ${this.age}`;
    }
}
const Obj = new Coder("Hars", "DHH", 22);
console.log(Obj.getAge()); //My age is 22
// console.log(Obj.age) //age not accessible as its private and cant be  inherited into another class
// console.log(Obj.lang) //Property 'lang' is protected and only accessible within class 'Coder' and its subclasses
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age); //super should be defined first, then initialize other properties
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I use ${this.lang}`; //lang is not defined here,but we can access it (due to inheritance)
    }
}
const myObjT = new WebDev("mac", "dev", "lofi", 23);
console.log(myObjT.getLang()); //I use TS
console.log(myObjT.name); //dev
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} ${this.instrument}`;
    }
}
const Artist = new Guitarist("Hash", "Guitar");
console.log(Artist.play("plays")); //Hash plays guitar
class Peeps {
    static getCount() {
        return Peeps.count; //here we referring class directly instead of this bcoz a static member/method called directly on the class not by any instance of a class
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const Peep1 = new Peeps("ram");
const Peep2 = new Peeps("sam");
const Peep3 = new Peeps("pam");
console.log(Peep1.id);
console.log(Peep2.id);
console.log(Peep3.id);
console.log(Peeps.count); //static member can be called directly with className, without creating any instance of class
//getter/setter methods
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Param is not an array of strings');
    }
}
const MyBands = new Bands();
MyBands.data = ['Neil Young', 'Led Zep']; //setter
console.log(MyBands.data); //getter
MyBands.data = [...MyBands.data, 'ZZ Top'];
console.log(MyBands.data);
// MyBands.data = ['Van Halen', 5150] // must be string data
