const students = [
    {
        'name': 'Ali',
        'surname': 'Baba',
        'age': 22,
        'mark': 5.9,
    },
    {
        'name': 'Cardy',
        'surname': 'B',
        'age': 33,
        'mark': 9.1,
    },
    {
        'name': 'Rick',
        'surname': 'Morty',
        'age': 19,
        'mark': 8.4
    },
    {
        'name': 'Freddy',
        'surname': 'Mercury',
        'age': 39,
        'mark': 7.9,
    },
    {
        'name': 'Shrek',
        'surname':'Ork',
        'age': 95,
        'mark': 9.9,
    },
];

class Student {
    constructor(name, surname, age,mark) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.mark = mark;
    }

    generateRandomDate(start, end) {
        return new Date(start + Math.random() * (end - start));
    }

    #getSecretInfo() {
        const date = this.generateRandomDate((2020, 2056));
        return `${this.name} ${this.surname} will be expelled on ${this.date}`
    }

    getName(){
        return this.name;
    }
    getSurname(){
        return this.surname;
    }

    getAge(){
        return this.age;
    }

    getMark(){
        return this.mark;
    }

    setMark(newMark){
        this.mark = newMark;
    }


}

function createRows(){
    let Table = document.querySelector('.tbody');
    let result = "";
    for (let student of students){
        let tds = `<td class="name">${student.name}</td>\n <td class="surname">${student.surname}</td>\n <td class="age">${student.age}</td>\n <td class="mark">${student.mark}</td>`;
        let row = `<tr>${tds}</tr>`;
        result += row;
    }
    Table.innerHTML = result;
}

function  countAverageMark(){
    let body = document.querySelector('body');
    let marks = document.querySelectorAll('.mark')
    let averageMark = 0;
    for (let mark of marks){
        averageMark += Number(mark.innerHTML);
    };
    averageMark=Math.round((averageMark/students.length)*100)/100;
    let mark = document.createElement('h3');
    mark.innerHTML = `Средний балл по всем студентам: ${averageMark}`;
    body.append(mark);
}

createRows();
countAverageMark();
