class Instructor {
    name:string;
    role:string;
    constructor(name:string,role:string='assistant') {
        this.role=role;
        this.name=name;
    }
    Render=()=>`${this.name} - ${this.role}`;
    static helloWorld(){
        return `Hi there`;
    }
    static canTeach(Instructor){
        return (Instructor.role === 'classroom')
    }
}

let junior=new Instructor('A');
let senior=new Instructor('B','classroom');

console.log(junior.Render());
console.log(senior.Render());
Instructor.helloWorld();

console.log(`${junior.name} can teach : ${Instructor.canTeach(junior)}`);
console.log(`${senior.name} can teach : ${Instructor.canTeach(senior)}`);