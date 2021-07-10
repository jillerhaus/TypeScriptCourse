function Logger(constructor: Function) {
    console.log('Logging');
    console.log(constructor);
}


@Logger
class Person {
    name = "Max";

    constructor() {
        console.log('Creating person object.')
    }
}

const pers = new Person();

console.log(pers);

// -MARK: Decorator factories

function Logger1(logString: string) {
    console.log('Logger factory running')
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);

    }
}

// -MARK: more useful decorators
function WithTemplate(template: string, hookId: string) {
    console.log('Template factory')
    return function(constructor: any) {
        console.log('Rendering template onto cesar')
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name;
        }


    }
}

@Logger1('Lögging Pärsön')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person1 {
    name = "KNAX";

    constructor() {
        console.log('Creating person1 object.')
    }
}

function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator!');
    console.log(target, propertyName);
}

function Log2ElectricBoogaloo(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
    console.log('Parameter decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
}

function Log3(
    target: any,
    name: string | symbol,
    descriptor: PropertyDescriptor
    ) {
    console.log('Method decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

class Product {
    @Log
    title: string;
    private _price: number;
    
    @Log2ElectricBoogaloo
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error('Prices must be > 0');
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}
