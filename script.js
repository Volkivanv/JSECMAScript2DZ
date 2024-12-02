Person = {
    name:"John",
    age: 25,
    gender: "male",
    introduce: function () {
        return `My name is ${this.name}. I'm ${this.age} years old and I identify as ${this.gender}.`
    },
    changeName: function (newName) {
        this.name = newName;
    }
}

console.log(Person.name);
console.log(Person.age);
console.log(Person.gender);
console.log(Person.introduce());

Person.changeName("Mike");
console.log(Person.introduce());


const Animal = {
    name:'',
    eat() {
        console.log(`${this.name} is eating`)
    }
}

const Dog = {
    name:"Rex",
    bark() {
       console.log(`${this.name} is barking`)
    }
}
Dog.eat = Animal.eat;

Dog.eat();

const calculator = {
    add(a, b){
        return a + b;
    },
    subtract(a, b){
        return a - b;
    }
}

console.log(calculator.add.call(null, 5, 3));
console.log(calculator.subtract.apply(null, [5, 3]));

class PersonCl {

    constructor(inName, inAge) {
        this.name = inName;
        this.age = inAge;
    }
    introduce(){
        return `My name is ${this.name}. I'm ${this.age} years old.`;
    }
}

const prsn = new PersonCl("John", 25);
console.log(prsn.introduce());

class BankAccount {
    static bankName = "MyBank";
    constructor(inAccountNumber, inBalance) {
        this.accountNumber = inAccountNumber;
        this.balance = inBalance;
       // this.bankName = inBank;
    }
    deposit(amount){
        this.balance +=amount;
        return `Deposited ${amount} into account ${this.accountNumber}. New balance: ${this.balance}`
    }
    withdraw(amount){
        if(this.balance >= amount){
            this.balance -=amount;
            return `Withdrawn ${amount} from account ${this.accountNumber}. New balance: ${this.balance}`
        } else {
            console.log("Нет денег");
        }
        
    }
}

const account1 = new BankAccount("12312443", 1000);
console.log(account1.withdraw(200));
console.log(account1.deposit(4557));