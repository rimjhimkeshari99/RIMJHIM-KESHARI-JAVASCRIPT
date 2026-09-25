with CONSTRUCTOR


class Student {
    constructor(name, rollNo, admissionNo, mobileNumber) {
        this.name = name;
        this.rollNo = rollNo;
        this.admissionNo = admissionNo;
        this.mobileNumber = mobileNumber;
    
        
            console.log("Name: " + this.name);
            console.log("Roll No: " + this.rollNo);
            console.log("Admission No: " + this.admissionNo);
            console.log("Mobile Number: " + this.mobileNumber);
    } 
        }

        const student = new Student("Sakshi", 101, "A1001", "9876543210");


WITHOUT CONSTRUCTOR

class Student {
    displayDetails() {
        console.log("Name: " + this.name);
        console.log("Roll No: " + this.rollNo);
        console.log("Admission No: " + this.admissionNo);
        console.log("Mobile Number: " + this.mobileNumber);
    }
}

const student = new Student();
student.name = "Sakshi";
student.rollNo = 101;
student.admissionNo = "A1001";
student.mobileNumber = "9876543210";
student.displayDetails();











Static member and function
class A{
    static name="This is Static Variable";
    static display(){
        console.log(A.name);
    }
}
A.display();


static method with instance variable
class Hello{
    static name="Example of static method with instance variable";
    constructor(){
        this.instanceVar="Instance variable";
    }
    show(){
        console.log("Static variable: " +Hello.name);
        console.log("Instance variable: "+this.instanceVar);
    }
}
let h=new Hello();
h.show();

without Constructor
class Hello {

    static name = "Example of static method with instance variable";

    show() {
        this.instanceVar = "Instance variable";

        console.log("Static variable: " + Hello.name);
        console.log("Instance variable: " + this.instanceVar);
    }
}

let h = new Hello();
h.show();
class student2{
    static name="rimjhim";
    static lastname="keshari";
    show(){
        console.log
    }

}