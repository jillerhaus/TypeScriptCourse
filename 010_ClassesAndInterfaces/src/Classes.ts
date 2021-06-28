abstract class Department {
    static fiscalYear = 2021;
    // private readonly id: string;
    // private name: string;
    protected employees: string[] = [];

    constructor(protected readonly id: string, public name: string) {
        // this.id = id;
        // this.name = n;
        console.log(Department.fiscalYear);
    }

    static createEmployee(name: string) {
        return {name: name};
    }

    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        // Validation
        // this.id = "fart"
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

// const accounting = new Department('69', 'Accounting');


// const accountingCopy = {name: "bob", describe: accounting.describe };

// accountingCopy.describe();

// accounting.addEmployee("Sideshow Bob");
// accounting.addEmployee("Morty");

// accounting.employees[2] = "superbob";
// accounting.name = "Accounting? more like Fartcounting"

// accounting.describe();
// accounting.printEmployeeInformation();

//-MARK: Class Inheritance

class ITDepartment extends Department {
    public admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, "IT");
        this.admins = admins;
    }

    describe() {
        console.log("IT Department - ID: " + this.id);
    }
}

const it = new ITDepartment("420", ["bob"]);

it.addEmployee("Hackermans");
it.addEmployee("Mortimer");

it.describe();
it.printEmployeeInformation();
console.log(it);


class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }

    set mostRecentReport(value) {
        if (!value) {
            throw new Error("please enter valid value");
        }
        this.addReport(value);
    }

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance
        }
        this.instance = new AccountingDepartment("d2", []);
        return this.instance;
    }

    describe() {
        console.log('Accounting Department - ID:' + this.id)
    }

    addEmployee(name: string) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }

}

// const accDep = new AccountingDepartment('123', []);
const accDep = AccountingDepartment.getInstance();
const accDep2 = AccountingDepartment.getInstance();

console.log(accDep, accDep2);

console.log("there should be an error")
accDep.mostRecentReport = "smort";
console.log(accDep.mostRecentReport);

accDep.addReport("something went wrong");
accDep.printReports();
accDep.addEmployee("Bart");
accDep.addEmployee("Mort");
accDep.printEmployeeInformation();
accDep.describe();

console.log(Department.createEmployee("bob"), Department.fiscalYear)