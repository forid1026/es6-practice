class Parent{
    constructor(){
        this.fatherName = 'Forid';
    }
}


class Child extends Parent{
    constructor(name){
        super();
        this.name  = name;
    }

    getFullName(){
        return this.name + ' ' + this.fatherName;
    }
}

const baby1 = new Child('Fayiza');
const baby2 = new Child('Nishi');
console.log(baby1.getFullName(), baby2);


let Rectangle = class Rectangle{
    constructor(height, width) {
        this.height = height;
        this.width = width;
        
    }
}
console.log(Rectangle.name);