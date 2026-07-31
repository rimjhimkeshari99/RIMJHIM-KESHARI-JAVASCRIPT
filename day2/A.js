console.log("===variable===");
    var text="something";
    console.log(text);
var first="rimjhim";
var last="keshari";
console.log(first,last);
console.log("===if else===");
var a=10;
var b=20;
if(a>b){
    console.log("Ais greater");
}
else{
    console.log("b is greater");
}
console.log("===function===");
function abes(){
    console.log("welcome students");
    console.log("welcome to node js");
}
abes();
abes();
console.log("===function with parameter===");
function greet(fname,lname){
    console.log("hello",fname,lname);
}
greet("rimjhim","keshari");
greet("shawsti","singh");
console.log("===function return ===");
function add(x,y){
    return x+y;
}
var result=add(20,30);
console.log("sum =",result);
console.log("===default arguments===");
function fullname(fname="abes",lname="engineering college"){
    return fname+" "+lname;
}
console.log(fullname());
console.log(fullname("riimjhim","keshari"));
console.log("===percentage===");
function totalmarks(math,english,science){
    return math+english+science;
}
function percentage(total){
    return (total/300)*100;
}
var total=totalmarks(80,75,90);
console.log("total marks=",total);
console.log("percentage=",percentage(total),+"%")
