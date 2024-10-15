// let myObj = {
//     name: "thet zan",
//     age: 40,
//     job: ()=> console.log("hit man")
// }

// let arrObj = [{name: "mgmg", age: 22},{name: "thetzan", age: 30},{name: "hello", age: 40}];
// arrObj.sort((previous, next)=>previous.age-next-next);
// console.log(arrObj);


class Person{
    constructor(name, age, job){
        this.name = name;
        this.age = age;
        this.job = job;
    }
    // pname = "thetzan";
    // age = 22;
    // job = "developer";

    greeting() {
        console.log("hello");
    }
}

class Engineer extends Person{

}

console.log(Engineer);

let person1 = new Person("thetzan", 22, "developer");
console.log(person1.name);
console.log(person1.age);
console.log(person1.job);
person1.greeting();

let engineer = new Engineer("tz");
engineer.greeting();
console.log(engineer.name);

