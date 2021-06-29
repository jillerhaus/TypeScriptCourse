// const names: Array<string> = []; // string[]
// // names[0].split(' ')

// const promise: Promise<number> = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         resolve(10);
//     }, 2000)
// });

// promise.then(data => {
//     // data.split(' ')
// })

// function merge(objA: object, objB: object) {
//     return Object.assign(objA, objB);
// }


// as generic function to enably type-based functionality
function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB)
}

// console.log(merge({name: 'Max'}, {age: 30}));
// const mergedObj = merge({name: 'Max'}, {age: 30}) as {name: string, age: number};
const mergedObj = merge({name: 'Max', hobbies: ['sports'] }, {age: 30});

// it is possible to explicitly specify which types the generics have to resolve to
// but it is redundant due to type inference
const mergedObj2 = merge<{name: string, hobbies: string[]}, {age: number}>({name: 'Max', hobbies: ['sports'] }, {age: 30});

// working with constraints: you can also constrain what generics can be in the defenition of the function:
function merge2<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj3 = merge2({name: "bort", hobbies: ["mud boot throwing contests"]}, {age: 69});
// works, but not
// const mergedObj4 = merge2({name: "fort"}, 30);
// because it violates the constraints on the generics in the function definition
// This would fail silently in merge, because Object.asign only works with objects

console.log(mergedObj);


// -MARK: Another generic function:

interface Lengthy {
    length: number
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.'
    if (element.length === 1) {
        descriptionText = "Got 1 element."
    } else if (element.length > 1) {
        descriptionText = "Got " + element.length + " elements."
    }
    return [element, descriptionText];
}

console.log(countAndDescribe("Hi there!"));
console.log(["sports", "and cooking"])

// -MARK: the keyof constraint

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return "Value: " +  obj[key];
}

console.log(extractAndConvert({name: "bort"}, 'name'));


// -MARK: generic classes

class DataStorage<T> {
    private data: T[] = [];
    
    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        // standard behavior of js is to remove the last item if no matching item is found
        // it then returns -1 instead of the positive position
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("sixtyNine");
textStorage.addItem("FourTwenty");
textStorage.addItem("Thirteen");
textStorage.removeItem("Thirteen");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number | string>();
numberStorage.addItem(69);
numberStorage.addItem(420);
numberStorage.addItem(13);
numberStorage.removeItem(13);
numberStorage.addItem("SixtyNine");
console.log(numberStorage.getItems());

const objStorage = new DataStorage<object>();
objStorage.addItem({name: "bort", description: "the supperior name"})
objStorage.addItem({name: "Manu"});
// an object or array can't be removed in the same way, since the saved objects are only 
// pointers and not the actual object
// JS will automatically remove the last object in the array since no matching object is found
objStorage.removeItem({name: "bort"});
console.log(objStorage.getItems());

// The only way to actually remove pointer-types from an array is by directly referencing them
const superbob = {name: "extremelyBob"};
objStorage.addItem({name: "bob"});
objStorage.removeItem(superbob);
console.log(objStorage.getItems());

// -MARK: Generic Utility Types
// Partial Type:

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string,
    description: string,
    date: Date
    ): CourseGoal {
    // return {title: title, description: description, completeUntil: date};
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

// ReadOnly type:

const names: Readonly<string[]> = ['Max', 'Anna'];
// names.push('Manu');
// names.pop();
// doesn't work


// -MARK: Generics vs. Union Types

// could also write

class DataStorage1 {
    private data: (string | number | boolean)[] = [];
    // alternative would be:
    // private data: (string[] | number[] | boolean[]);
    // this causes problems later, because you could add a number to 
    // a string array with addItem

    addItem(item: string | number | boolean) {
        this.data.push(item);
    }

    removeItem(item: string | number | boolean) {
        if (this.data.indexOf(item) === -1) {
            return;
        }

        this.data.splice(this.data.indexOf(item),1)
    }

    getItems() {
        return [...this.data];
    }
}

// Differences to approach with generics:
// 1. Allows for mixed-type arrays, which generic implementation does not