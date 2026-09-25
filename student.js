class student{
    rollno;
    name;
    marks;
    student(){
        console.log("name :",this.name);
        console.log("rollno. :",this.rollno);
        console.log("marks :",marks);
    }
    displayresults(){
        if(marks>75){
            console.log("passed");
        }
        else{
            console.log("failed");
        }
    }
    static number=25;
    static display(){
        console.log("total number of students : ",student.number())
    }
}
let s1=new student();
s1.displayresults();
student.name();