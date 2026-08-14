function totalmarks(maths,english,science){
    return (maths+english+science);
}
function percentage(total){
    return (total/300)*100;
}
var total=totalmarks(80,90,60);
console.log("total marks=",total);
console.log("percentage=",percentage(total),+"%")