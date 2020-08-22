"use strict";
/* 1. Variable Declare */
console.log("\n\n1. Variable Declare\n");
//js
var jsName = "Jasmine";
var jsAge = 25;
var jsObj = {
    name: "Jasmine",
    age: 25,
};
console.log(jsName);
//ts
/* end: 1 */
//
/* 2. Variable Interface */
// console.log("\n\n2. Variable Interface\n");
/* end: 2 */
//
/* 3. Function */
// console.log("\n\n4. Function\n");
//js
function jsAdd(x, y) {
    return x + y;
}
//ts
//js
var jsAdd2 = function (x, y) {
    return x + y;
};
//ts
/* end: 3 */
//
/* 4. Function Parameter */
// console.log("\n\n4. Function Parameter\n");
//Default Example
var hello = function (name, message) {
    console.log("Hi! " + name + ", " + message);
};
// hello("Jasmine", "Let's Coding");
//Optional Parameter
//Default-initialized Parameter
//Rest Parameter
/* end: 4 */
//
/* 5. Class Default */
// console.log("\n\n5. Class Default\n");
//Class Declare
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.hello = function () {
        return "hello " + this.name;
    };
    return Person;
}());
//Class Extends
/* end: 5 */
//
/* 6. Access Modifier */
// console.log("\n\n6. Access Modifier\n");
var Person2 = /** @class */ (function () {
    function Person2(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    Person2.prototype.introduce = function () {
        return "Hello, I'm a " + this.name + ", " + this.age + ", " + this.gender;
    };
    return Person2;
}());
var person2 = new Person2("bumsu", 25, "man");
/* end: 6 */
//
/* 7. readonly, static */
// console.log("\n\n7. readonly, static\n");
//readonly
var Person3 = /** @class */ (function () {
    function Person3(name) {
        this.name = name;
        this.name = name;
        this.created = new Date();
    }
    return Person3;
}());
var person3 = new Person3("Jasmine");
//static
var Bungeoppang = /** @class */ (function () {
    //static 속성
    function Bungeoppang(taste) {
        this.taste = taste;
        this.taste = taste;
    }
    return Bungeoppang;
}());
var bungeoppang1 = new Bungeoppang("red bean");
var bungeoppang2 = new Bungeoppang("cream");
var bungeoppang3 = new Bungeoppang("sweet potato");
/* end: 7 */
//
/* 8. Abstract Class */
// console.log("\n\n8. Abstract Class\n");
var Singer = /** @class */ (function () {
    function Singer(name) {
        this.name = name;
        this.name = name;
    }
    return Singer;
}());
/* end: 9 */
