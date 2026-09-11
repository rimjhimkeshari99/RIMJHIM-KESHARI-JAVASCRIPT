let studentGrade = {
    name: "Rimjhim",
    age: 20,
    grade: "A"
};

let updateGrade = {
    changeGrade: function(newGrade) {
        studentGrade.grade = newGrade;
    }
};

console.log(studentGrade);

updateGrade.changeGrade("B");

console.log(studentGrade); 
