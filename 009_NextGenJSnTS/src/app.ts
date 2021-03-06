const userName = 'Max';
// let age = 30;
// age = 29;
let result;

// function add(a: number, b: number) {
//     result = a + b;
//     return result;
// }

// if (age > 20) {
//     let isOld = true;
// }

// console.log(isOld);
// console.log(result);

// const add = (a: number, b: number = 8) => a + b;

// const printOutput: (a: number | string) => void = output => console.log(output);

// const button = document.querySelector('button');

// if (button) {
//     button.addEventListener('click', event => console.log(event));
// }
// printOutput(add(5))

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking', ...hobbies];

activeHobbies.push(...hobbies);
console.log(activeHobbies);

const person = {
    firstName: 'Max',
    age: 30 
};

const copiedPerson = {...person};
console.log(copiedPerson);

const add = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);

};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2)

const {firstName: userName_, age} = person;

console.log(userName_, age, person);