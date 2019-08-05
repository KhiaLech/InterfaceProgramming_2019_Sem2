var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// ---------- DATATYPES
var num = 3;
console.log(num);
var firstname = "max";
var earthisflat = true;
var decimal = 2.2;
var cookiesinjar = null;
var area51 = undefined;
var lastname = "dalkdhakld";
// ---------- ARRAY
var listofstudents = ["max", "Chloe", "Warren"];
var listofnums = [1, 2, 3, 4];
// Create an array of animals
// Loop through the array and display the animal in the console
var listofanimals = ["Lion", "Tiger", "Bear", "Cat", "Dog"];
for (var index in listofanimals) {
    console.log(listofanimals[index]);
}
// ---------- CLASSES
var Planet = /** @class */ (function () {
    //private name: string;
    //public mass: number;
    /*constructor(name:string, mass:number){
        this.name = name;
        this.mass = mass;
    }*/
    function Planet(name, mass) {
        this.name = name;
        this.mass = mass;
    }
    Planet.prototype.sayHello = function (str) {
        return str + this.name;
    };
    return Planet;
}());
var pl = new Planet("earth", 345);
console.log(pl.name);
console.log(pl.mass);
console.log(pl.sayHello("Say Hello "));
// ---------- CLASS & INHERITANCE EXERCISE
var Product = /** @class */ (function () {
    function Product(id, cost) {
        this.id = id;
        this.cost = cost;
    }
    return Product;
}());
var CD = /** @class */ (function (_super) {
    __extends(CD, _super);
    function CD(_id, _cost, genre) {
        var _this = _super.call(this, _id, _cost) || this;
        _this.genre = genre;
        return _this;
    }
    return CD;
}(Product));
var cd = new CD("1", 10, "Country");
console.log(cd);
