const employee = {
    name: "rimjhim",
    salary: 40000,

    display: function() {
        console.log("name =", this.name);
        console.log("salary =", this.salary);
    },

    increasesalary: function(amount) {
        this.salary = this.salary +amount;
    }
};

employee.display();

employee.increasesalary(5000);

employee.display();
//function with different object
function show(){
    console.log("address=",this.address);
    console.log("city=",this.city);
}
e={
    address:"abes engineering college",
    city:"ghaziabad",
    show:show
}
f={
    address:"university of edinburgh",
    city:"edinburgh",
    show:show
}
e.show();
f.show();


function college(){
    console.log("college name:", this.name);
    console.log("college location:", this.location);
    console.log("college id:",this.id);
}
department={
    name:"computer science",
    location:"abes engineering college",
    id:101,
    show:college
}
classes={
   name:"aiml",
 location:"abes engineering college",
 id:102,
    show:college
}
department.show();
classes.show();
