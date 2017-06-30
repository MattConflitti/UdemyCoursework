import { calculateCircumference } from './math/circle';
// /// <reference path="circleMath.ts" />

// namespace MyMath {

//     export function calculateRectangle(width: number, length: number) {
//         return width * length;
//     }
// }

console.log(calculateCircumference(14));

//GENERICS!!!!! DOOOPE
function echo<T>(data: T) {
    return data;
}

console.log(echo("Hello").length);
console.log(echo({ name: "Matt" }).name);
console.log();

// const results: Array<number> = [1,2,3,4];

// results.push("stuff");

//USING GENERICS FOR A MAP CLASS----sweet
class MyMap<T> {
    private map: {[key: string]: T} = {};

    setItem(key: string, item: T) {
        this.map[key] = item;
    }

    getItem(key: string) {
        return this.map[key];
    }

    clear() {
        this.map = {};
    }

    printMap() {
        for (let key in this.map) {
            console.log(key, this.map[key]);
        }
    }
}

const myMap = new MyMap<string>();
myMap.setItem("key1", "item1");


//Class decorators
function logged(constructorFn: Function) {
    console.log(constructorFn);
}

@logged
class Person {
    constructor() {
        console.log("Hi");
    }
}

//ADV DECORATOR
function printable(fn: Function) {
    fn.prototype.print = function() {
        console.log(this);
    };
}

@logged
@printable
class Plant {
    name = "Green Plant";
}

let plant = new Plant();
(<any>plant).print();






























// // string
// let myName: string = 'Matt';

// //number
// let myAge: number = 21;

// //boolean
// let hasHobbies: boolean = true;

// //array
// let hobbies: string[] = ["Cooking", "Sports"];

// //tuples
// let address: [string, number] = ["Superstreet", 99];

// //enum
// enum Color {
//     Gray,
//     Green = 100,
//     Blue
// }

// let myColor: Color = Color.Green;

// //any
// let car: any = "YO!";
// car = 15;
// //...

// //function
// function getMyName(): string {
//     return myName;
// }

// //argument types
// function multiply(value1: number, value2: number): number {
//     return value1*value2;
// }

// //function type
// let myMultiply: (val1: number, val2: number) => number;

// //objects
// let userData: {name:string, age:number} = {
//     name: "Max",
//     age: 27
// };

// //type alias
// type Complex = {data: number[], output: (all:boolean) => number[]};

// let complex1: Complex = {
//     data: [1,2,3],
//     output(all: boolean): number[] {
//         if (all) {}
//         return this.data;
//     }
// };

// //union type
// let myRealRealAge: number | string = 27;
// //myRealRealAge = true;

// //check types
// let finalValue = 30;
// if(typeof finalValue == "number") {
//     console.log("Final value is a number");
// }

// //never type
// function neverReturns():never {
//     throw new Error('An error!');
// }

// //nullable types
// let canBeNull: number | null = 12;
// canBeNull = null;
// let canAlsoBeNull;
// canAlsoBeNull = null;

// let canThisBeAny = null;
// //canThisBeAny = 12;

// //==================EXERCISE==================
// type BankAccount = {money: number, deposit: (value: number) => void};

// let bankAccount: BankAccount = {
//     money: 2000,
//     deposit(value) {
//         this.money += value;
//     } 
// };

// type Person = {name:string, bankAccount:BankAccount, hobbies: string[]};
 
// let myself: Person = {
//     name: "Max",
//     bankAccount: bankAccount,
//     hobbies: ["Sports", "Cooking"]
// };
 
// myself.bankAccount.deposit(3000); 

// console.log(myself);


// class Plant {
//     private _species: string = "default";

//     get species() : string {
//         return this._species;
//     }

//     set species(val: string) {
//         this._species = val;
//     }
// }

