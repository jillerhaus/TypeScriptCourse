type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text'

function combine(
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionDescriptor) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2
    } else {
        result = input1.toString() + input2.toString()
    }

    // if (resultConversion === 'as-number') {
    //     return +result;
    // } else {
    //     return result;
    // }
    return result;
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number")
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", 'as-text');
console.log(combinedNames);

// type User = {name: string; age: number};
// const u1: User = {name: 'Max', age: 30};

// function greet(user: User) {
//     console.log('Hi, I am ' + user.name)
// }
 
// function isOlder(user: User, checkAge: number) {
//     return checkAge > user.age
// }