//In TS, defining constructor and properties are compulsory in a class
class Coder {
  //   name: string
  // music: string
  //   age: number
  //   lang: string
  secondLang!: string //TS assumes it will be defined later
  //If we define properties with the visibility modifiers, then there's no need to define the type in class on above
  constructor(public name: string, public readonly music: string, private age: number, protected lang: string = "TS") {
    this.name = name
    this.music = music
    this.age = age
    this.lang = lang
  }
  public getAge() {
    return `My age is ${this.age}`
  }
}

const Obj = new Coder("Hars", "DHH", 22)
console.log(Obj.getAge()) //My age is 22
// console.log(Obj.age) //age not accessible as its private and cant be  inherited into another class
// console.log(Obj.lang) //Property 'lang' is protected and only accessible within class 'Coder' and its subclasses

class WebDev extends Coder {
  constructor(public computer: string, name: string, music: string, age: number) {
    super(name, music, age) //super should be defined first, then initialize other properties
    this.computer = computer
  }
  public getLang() {
    return `I use ${this.lang}` //lang is not defined here,but we can access it (due to inheritance)
  }
}
const myObjT = new WebDev("mac", "dev", "lofi", 23)
console.log(myObjT.getLang()) //I use TS
console.log(myObjT.name) //dev
/* 
Inheritance Rules
private properties can be only accessed inside a class, and cannot be inherited by another class
protected properties can be only accessed inside a class, but can be interited into another class
public properties can be accessed outside as well as inherited into another class
*/

//Interface with class
interface Musician {
  name: string
  instrument: string
  play(action: string): string
}
class Guitarist implements Musician {
  name: string
  instrument: string
  constructor(name: string, instrument: string) {
    this.name = name
    this.instrument = instrument
  }
  play(action: string) {
    return `${this.name} ${action} ${this.instrument}`
  }
}
const Artist = new Guitarist("Hash", "Guitar")
console.log(Artist.play("plays")) //Hash plays guitar

class Peeps {
    static count:number = 0
    static getCount():number {
        return Peeps.count //here we referring class directly instead of this bcoz a static member/method called directly on the class not by any instance of a class
    }
    public id:number
    constructor(public name:string) {
        this.name= name
        this.id = ++Peeps.count
    }
}
const Peep1 = new Peeps("ram")
const Peep2 = new Peeps("sam")
const Peep3 = new Peeps("pam")
console.log(Peep1.id)
console.log(Peep2.id)
console.log(Peep3.id)
console.log(Peeps.count) //static member can be called directly with className, without creating any instance of class

//getter/setter methods
class Bands {
    private dataState: string[]

    constructor() {
        this.dataState = []
    }

    public get data(): string[] {
        return this.dataState
    }

    public set data(value: string[]) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value
            return
        } else throw new Error('Param is not an array of strings')
    }
}

const MyBands = new Bands()
MyBands.data = ['Neil Young', 'Led Zep'] //setter
console.log(MyBands.data) //getter
MyBands.data = [...MyBands.data, 'ZZ Top']
console.log(MyBands.data)
// MyBands.data = ['Van Halen', 5150] // must be string data