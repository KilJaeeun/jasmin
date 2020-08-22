/* 1. Variable Declare */
console.log("\n\n1. Variable Declare\n");

//js
let jsName = "Jasmine";
let jsAge = 25;
let jsObj = {
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
function jsAdd(x: any, y: any) {
  return x + y;
}

//ts

//js
const jsAdd2 = (x: any, y: any) => {
  return x + y;
};

//ts

/* end: 3 */
//

/* 4. Function Parameter */
// console.log("\n\n4. Function Parameter\n");

//Default Example
const hello = (name: string, message: string): void => {
  console.log(`Hi! ${name}, ${message}`);
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
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  hello(): string {
    return `hello ${this.name}`;
  }
}

//Class Extends

/* end: 5 */
//

/* 6. Access Modifier */
// console.log("\n\n6. Access Modifier\n");

class Person2 {
  public name: string;
  private age: number;
  protected gender: string;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  public introduce(): string {
    return `Hello, I'm a ${this.name}, ${this.age}, ${this.gender}`;
  }
}

const person2 = new Person2("bumsu", 25, "man");

/* end: 6 */
//

/* 7. readonly, static */
// console.log("\n\n7. readonly, static\n");

//readonly
class Person3 {
  public readonly created: Date;

  constructor(public name: string) {
    this.name = name;
    this.created = new Date();
  }
}

const person3 = new Person3("Jasmine");

//static
class Bungeoppang {
  //static 속성

  constructor(private taste: string) {
    this.taste = taste;
  }

  //static 메소드
}

const bungeoppang1: Bungeoppang = new Bungeoppang("red bean");
const bungeoppang2: Bungeoppang = new Bungeoppang("cream");
const bungeoppang3: Bungeoppang = new Bungeoppang("sweet potato");

/* end: 7 */
//

/* 8. Abstract Class */
// console.log("\n\n8. Abstract Class\n");

abstract class Singer {
  constructor(public name: string) {
    this.name = name;
  }

  // Abstract Method
  abstract sing(): void;
}

/* end: 8 */
//

/* 9. Interface */
// console.log("\n\np. Interface\n");

//Function Interface
interface Operation {
  (x: number, y: number): number;
}

//Class Interface
interface Animal {
  species: string;
  age: number;
}

/* end: 9 */
