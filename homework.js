class Book {
    constructor(inTitle, inAuthor, inPages) {
        this.title = inTitle;
        this.author = inAuthor;
        this.pages = inPages;
    }
    displayInfo(){
        console.log(`Название: ${this.title}, автор: ${this.author}, страниц: ${this.pages}`);
    }
}

const book1 = new Book("1984", "Джордж Оруэлл", 328);
book1.displayInfo();
// Вывод: Название: 1984, Автор: Джордж Оруэлл, Страниц: 328


class Student {
    constructor(inName, inAge, inGrade) {
        this.name = inName;
        this.age = inAge;
        this.grade = inGrade;
    }
    displayInfo(){
        console.log(`Имя: ${this.name}, возраст: ${this.age}, класс: ${this.grade}`);
    }
}




const student1 = new Student("John Smith", 16, "10th grade");
student1.displayInfo();
// Вывод: Name: John Smith, Age: 16, Grade: 10th grade
const student2 = new Student("Jane Doe", 17, "11th grade");
student2.displayInfo();
// Вывод: Name: Jane Doe, Age: 17, Grade: 11th grade