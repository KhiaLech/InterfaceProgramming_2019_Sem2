// ---------- DATATYPES
var num = 3;
console.log(num);

var firstname: string = "max";

var earthisflat: boolean = true;
var decimal: number = 2.2;

var cookiesinjar: null = null;
var area51: undefined = undefined;

var lastname = "dalkdhakld"


// ---------- ARRAY
var listofstudents: string[] = ["max", "Chloe", "Warren"];
var listofnums: Array<number> = [1, 2, 3, 4];

// Create an array of animals
// Loop through the array and display the animal in the console

var listofanimals: string[] = ["Lion", "Tiger", "Bear", "Cat", "Dog"];

for (var index in listofanimals) {
    console.log(listofanimals[index]);
}


// ---------- CLASSES
class Planet {


    //private name: string;
    //public mass: number;

    /*constructor(name:string, mass:number){
        this.name = name;
        this.mass = mass;
    }*/

    constructor(public name: string, public mass: number) {

    }

    sayHello(str: string): string {

        return str + this.name;

    }



}

var pl: Planet = new Planet("earth", 345);

console.log(pl.name);
console.log(pl.mass);

console.log(pl.sayHello("Say Hello "));

// ---------- CLASS & INHERITANCE EXERCISE
class Product {


    constructor(public id: string, public cost: number) {

    }

}

class CD extends Product {
    public genre: string;
    constructor(_id: string, _cost: number, genre: string) {
        super(_id, _cost);
        this.genre = genre;
    
    }
}

var cd:CD = new CD("1", 10, "Country");
console.log(cd);