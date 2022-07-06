var Instructor = /** @class */ (function () {
    function Instructor(name, role) {
        if (role === void 0) { role = 'assistant'; }
        var _this = this;
        this.Render = function () { return "".concat(_this.name, " - ").concat(_this.role); };
        this.role = role;
        this.name = name;
    }
    Instructor.helloWorld = function () {
        return "Hi there";
    };
    Instructor.canTeach = function (Instructor) {
        return (Instructor.role === 'classroom');
    };
    return Instructor;
}());
var junior = new Instructor('A');
var senior = new Instructor('B', 'classroom');
console.log(junior.Render());
console.log(senior.Render());
Instructor.helloWorld();
console.log("".concat(junior.name, " can teach : ").concat(Instructor.canTeach(junior)));
console.log("".concat(senior.name, " can teach : ").concat(Instructor.canTeach(senior)));
