const std={
    name:"rimjhim",
    id:154,
    course:"aiml"
};
console.log(std);
//array of objects
const users=[
    {
        id:1,
        name:"rimjhim"
    },
    {
        id:2,
        name:"shhawsti"
    },
    {
        id:3,
        name:"nisha"
    },
    {
        id:4,
        name:"ishita"
    }
];
console.log(users);
//array of objects with function
const employees={
    id:101,
    name:"rimjhim",
    designation:"developer",
    display:function(){
        console.log("id=",this.id);
        console.log("name=",this.name);
        console.log("designation=",this.designation);
    }
};
//adding and deleting properties of object
employees.salary=50000;
console.log(employees);
delete employees.id;
console.log(employees);

