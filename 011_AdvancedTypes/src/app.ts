// interface Admin {
//     name: string;
//     privileges: string[];
// }

// interface Employee  {
//     name: string;
//     startDate: Date;
// }

// interface ElevatedEmployee extends Admin, Employee {};

// const e1: ElevatedEmployee = {
//     name: "borb",
//     privileges: ["Shut the fuck up"],
//     startDate: new Date()
// }

type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: "bob",
    privileges: ["suck at life"],
    startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;

type CombiNumeric = Combinable & Numeric;
function add(a: number, b: number): number;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    } else {
        return a + b;
    }
}

const result = add("max", ' schwarz');
result.split(' ')

const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: 
    { title: 'CEO', desciption: 'My own company'}
};

// console.log(fetchedUserData.job && fetchedUserData.job.title) 
// JavaScripty way of avoiding run-time errors if certain data does not exist

// TypeScript optional chaining:
console.log(fetchedUserData?.job?.title);

const userInput = '';

// function size(input: string | number) {
//     if (input instanceof 'string') {
//         return input.length
//     }
//     return input;
// }

// function size(input: string | number) {
//     if (<string>input) {
//         return input.length
//     } return input;
// }

function size(input: string | number) {
    if (typeof input === 'string') {
        return input.length;
    }
    return input;
}

// const storedData = userInput || 'DEFAULT';
// chooses 'DEFAULT' for falsy values like ''

const storedData = userInput ?? 'DEFAULT'
// nullisch covalescing. does not substitute ''. only subsitutes on null or undefined

console.log(storedData);
// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//     console.log('Name: ' + emp.name);
//     if ('privileges' in emp) {
//         console.log('Privileges: ' + emp.privileges);
//     }

//     if ('startDate' in emp) {
//         console.log('Start date: ' + emp.startDate);
//     }
// };

// printEmployeeInformation(e1);
// printEmployeeInformation({name: 'Mr. Bort', startDate: new Date()});

// class Car {
//     drive() {
//         console.log("brrrrrrrrt")
//     }
// }

// class Truck {
//     drive() {
//         console.log("BRRRRRRRRRRRRT")
//     }

//     loadCargo(amount: number) {
//         console.log("You broke your back. gg " + amount)
//     }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//     vehicle.drive()
//     // if ('loadCargo' in vehicle) {
//     //     vehicle.loadCargo(69);
//     // }
//     if (vehicle instanceof Truck) {
//         vehicle.loadCargo(69);
//     }
// };

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//     type: 'bird';
//     flyingSpeed: number;
// }

// interface Horse {
//     type: 'horse';
//     runningSpeed: number;
// }

// type Aminal = Bird | Horse;

// function moveAminal(aminal: Aminal) {
//     // let speed: number;
//     // if ('flyingSpeed' in aminal) {
//     //     speed = aminal.flyingSpeed
//     // } else if ('runningSpeed' in aminal) {
//     //     speed = aminal.runningSpeed
//     // } else {
//     //     throw new Error('Unknown aminal type')
//     // }
//     let speed;
//     switch (aminal.type){
//         case 'bird':
//             speed = aminal.flyingSpeed;
//             break;
//         case 'horse':
//             speed = aminal.runningSpeed;
//             break
//     }
//     console.log('Moving with speed: ' + speed)
// }



// let birb: Bird = {type: 'bird',  flyingSpeed: 69};
// let hurse: Horse;

// moveAminal({type: 'bird', flyingSpeed: 69});
// moveAminal(birb);

// const paragraph = document.getElementById('message-output');
// // const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
// // const userInputElement = document.getElementById('user-input')! as HTMLInputElement;
// // Still tells TypeScript, that element is non-null

// const userInputElement = document.getElementById('user-input');


// if (userInputElement) {
//     (userInputElement as HTMLInputElement).value = "Fuck off!"
// }

// interface ErrorContainer { // { email: 'Not a valid email', username: 'must start with a character' }
//     // id: string; // must be the same type as the index property's value
//     [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//     email: "not a valid email",
//     userName: "Must start with a capital character!"
// };

