
class Person {
    constructor(name,age){
        this.name=name
        this.age=age
    }
    static info ="aaaa"

    sayHlello(){
        console.log('你好')
    }
    static sayBye(){
        console.log('拜拜')
    }
}

class Chinese extends Person {
    constructor(name,age){
        super(name,age)
    }
    
}

const xiaoming = new Chinese('小明',18)
console.log(xiaoming )
xiaoming.sayHlello()
console.log(xiaoming.info);

console.log(Person.info)
Person.sayBye()
console.log(xiaoming.name);
console.log(xiaoming.age)
