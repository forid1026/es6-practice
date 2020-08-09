 class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.university = 'Northern University Bangladesh';
    }
 }

 const student1 = new Student(1026, 'Forid');
 const student2 = new Student(1041, 'Nilima');
 console.log(student1, student2);
 console.log(student1.name);