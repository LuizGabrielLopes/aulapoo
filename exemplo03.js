class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }
    introduce() {

        console.log(`Olá, meu nome ${this.name}' e tenho ${this.age} anos.`)
    }
}


const user = new User('Jaime', 30);
const user1 = new User('Lucas', 40)
user.introduce()
//console.log(user);
//console.log(user1);