class Department {
    name: string; 
    employees: string[] = [];

    constructor(n: string) {
        this.name = n;
    }

    describe(this: Department) {
        console.log('Department: ' + this.name);
    }

}

const accounting = new Department('Accounting');

console.log(accounting);

accounting.describe();

const accountingCopy = { name: "DUMMY", describe: accounting.describe};
accountingCopy.describe()