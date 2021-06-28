// type Person = {
//     name: string;
//     age: number;

//     greet(phrase: string): void;
// }

interface Named {
    readonly name?: string;
    outputName?: string;
}

interface Greetable extends Named {
    // readonly name: string;

    greet(phrase: string): void;
}

class Person implements Greetable {
    name?: string;
    age = 69;

    constructor(name?: string) {
        if (name) {
            this.name = name;
        }
    }

    greet(phrase: string) {
        if (this.name) {
            console.log(phrase + ' ' + this.name)
        } else {
            console.log('Fartnoises')
        }
    }
}

let user1: Greetable;

user1 = new Person();
// user1.name = "fartinator";


// user1 = {
//     name: 'bob',
//     age: 69,

//     greet(phras: string) {
//         console.log(phras + ' ' + this.name);
//     }
// }


user1.greet("Fuck you")

console.log(user1)


// Functions

// type AddFn = (n1: number, n2: number) => number;

interface AddFn {
    (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
} 