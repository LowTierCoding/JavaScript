console.groupCollapsed('1. - https://edabit.com/challenge/ZngT4zDckDugt2JGY');
{
  class Person {
    constructor(name, age, height, weight){
      this.name = name;
      this.age = age;
      this.height = height;
      this.weight = weight;
    }
    getAge = () => `${this.name} ${this.age}`;
    getHeight = () => `${this.name} ${this.height}`;
    getWeight = () => `${this.name} ${this.weight}`;
    
  }
}
console.groupEnd();

console.groupCollapsed('2. - https://edabit.com/challenge/yxKoCKemzacK6PECM');
{
  class Calculator{
    add = (a,b) => a + b;
	subtract = (a,b) =>  a - b;
	multiply = (a,b) => a * b;
	divide = (a,b) => a / b;
  }

}
console.groupEnd();

console.groupCollapsed('3. - https://edabit.com/challenge/kGLhgwGaLJsCMS7wS');
{

  const capitalize = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase()


  class Employee {
    constructor(name, surname) {
      this.firstname = capitalize(name);
      this.lastname = capitalize(surname);
      this.fullname = this.firstname + ' ' + this.lastname;
      this.email = `${name}.${surname}@company.com`.toLowerCase();
    }
  }
}
console.groupEnd();

console.groupCollapsed('4. - https://edabit.com/challenge/iwdZiFucR5wkQsFHu');
{
  class Person {
    constructor(name, age) {
      this.name = name
      this.age = age
    }
    compareAge(other) {
      if (this.age < other.age){
        return `${other.name} is older than me.`
      }else if (this.age > other.age){
        return `${other.name} is younger than me.`
      }else{
        return `${other.name} is the same age as me.`
      }
    }
  }
}
console.groupEnd();

console.groupCollapsed('5. - https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ');
{
  class Rectangle {
    constructor(sideA, sideB) {
      this.sideA = sideA
      this.sideB = sideB
    }
    getArea(){return this.sideA*this.sideB}
    getPerimeter(){return (this.sideA + this.sideB) *2}
  }
  
  
  class Circle {
    constructor(radius){
      this.radius = radius;
    }
    getArea = () => Math.PI * this.radius * this.radius;
    getPerimeter = () => 2 * Math.PI * this.radius;
  }
  
  
  
   q = new Circle(4.44);
  console.log(q.getArea());
  console.log(q.getPerimeter());
}
console.groupEnd();

console.groupCollapsed('6. - https://edabit.com/challenge/qNMtrtizgssAQqP2b');
{
    class Name {
      constructor(fname,lname) {
        this.fname = fname[0].toUpperCase() + fname.slice(1).toLowerCase();
        this.lname = lname[0].toUpperCase() + lname.slice(1).toLowerCase();
      }
      get fullname() {
        return `${this.fname} ${this.lname}`;
      }
      get initials() {
        return `${this.fname[0]}.${this.lname[0]}`;
      }
    }
  }
console.groupEnd();

console.groupCollapsed('7. - https://edabit.com/challenge/HKmJFmZZCX53ff4ke');
{
  function sweetestIcecream(arr) {
    const sweetsList = {
      Plain: 0,
      Vanilla: 5,
      ChocolateChip: 5,
      Strawberry: 10,
      Chocolate: 10,
    }
    const sweetsArray = arr.map(item => sweetsList[item.flavor] + item.numSprinkles);
    return Math.max(...sweetsArray);
  }
  }
console.groupEnd();

console.groupCollapsed('8. - https://edabit.com/challenge/9zwdrfW99zmdRhibi');
{
  class OnesThreesNines{
    constructor(num){
      this.ones = Math.floor(num / 1);
      this.threes = Math.floor(num / 3);
      this.nines = Math.floor(num / 9);
    }
  }
}
console.groupEnd();

console.groupCollapsed('9. - https://edabit.com/challenge/7PA4jhWqDYJT4ixLp');
{
  class User {
    constructor(username) {
      this.username = username;
      User.userCount++;
    }
  }
  
  User.userCount = 0;
}
console.groupEnd();

console.groupCollapsed('10. - https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn');
{
class Book{
  constructor(title, author){
    this.title = title;
    this.author = author;
  }
  getTitle() {
    return `Title: ${this.title}`;
}
getAuthor(){
  return `Author: ${this.author}`;
}
}
const PP = new Book('Pride and Prejudice', 'Jane Austen');
const H = new Book('Hamlet', 'William Shakespeare');
const WP = new Book('War and Peace', 'Leo Tolstoy');
}
console.groupEnd();
