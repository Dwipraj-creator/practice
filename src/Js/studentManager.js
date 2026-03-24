function studentManager(){
    let students = [{
        name:"dwipraj",
        roll: 10,
        score:{
            Math:90,
            Eng: 96,
            His:80,
            Geo:87
        }
    }]

    return{
        addStudent(name,roll,{Math,Eng,His,Geo}){
            const newStudents = {
            name,
            roll,
             score:{
                    Math,
                    Eng,
                    His,
                    Geo
                }
            }
            students.push(newStudents)
            console.log(students)
        },
        updateStudent(roll,updateData){
            const student = students.find(s=>s.roll === roll);
            if(!student){
                return "Student not found";
            }
            if(updateData.name){
                student.name = updateData.name
            }
            if(updateData.score){
                student.score = {
                    ...student.score,...updateData.score
                };
            }
            return student;
        } ,
        getStudentDetails(roll){
            let student = students.find(s=>s.roll === roll)
            if(!student){
                return "Student Not Found"
            }
            return student
        },
        addSubject(roll,subject,score){
         let student = students.find(s=>s.roll === roll)
              if(!student){
                return "Student Not Found"
            }
            student.score = {...student.score,[subject]:score} // daynamic key is [subject]
            return student 
        }
    }
}


// uses --->

const manager = studentManager()

manager.addStudent("raj", 11, {
    Math: 79,
    Eng: 80,
    His: 88,
    Geo: 84
});

console.log(manager.getStudentDetails(11))
manager.addSubject(10, "Physics", 85);

console.log(manager.getStudentDetails(10));