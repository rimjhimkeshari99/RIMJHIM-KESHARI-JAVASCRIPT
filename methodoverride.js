class Employee {
    constructor(id, name, basicsalary) {
        this.id = id;
        this.name = name;
        this.basicsalary = basicsalary;
    }

    calculate() {
        return this.basicsalary;
    }
}

class Manager extends Employee {
    constructor(id, name, basicsalary, incentive) {
        super(id, name, basicsalary);
        this.incentive = incentive;
    }

    calculate() {
        return this.basicsalary + this.incentive;
    }
}

let e1 = new Employee(101, "Rimjhim", 30000);
console.log(e1.calculate());

let m1 = new Manager(102, "shawsti", 40000, 10000);
console.log(m1.calculate());