if (!Object.create) {
    Object.create = function (obj) {
        function f() { };
        f.prototype = obj;
        return new f();
    }
}
 
if (!Object.prototype.extend) {
    Object.prototype.extend = function (properties) {
        function f() { };
        f.prototype = Object.create(this);
        for (var prop in properties) {
            f.prototype[prop] = properties[prop];
        }
        f.prototype._super = this;
        return new f();
    }
}
 
var SchoolRepository = (function () {
    var School = {
        init: function (name, town) {
            this.name = name;
            this.town = town;
            this.classes = [];
        },
 
        addClass: function (schoolClass) {
            this.classes.push(schoolClass);
        },
 
        toString: function () {
            return "Name: " + this.name + ", Town: " + this.town;
        }
    };
 
    var SchoolClass = {
        init: function (name, formTeacher, capacity) {
            this.name = name;
            this.formTeacher = formTeacher;
            this.capacity = capacity;
            this.students = [];
        },
        addStudent: function (student) {
            if (this.students.length < this.capacity) {
                this.students.push(student);
            }
            else {
                console.log("This class is already full! " + student.introduce() + " didn't make it!");
            }
        },
        toString: function () {
            return "Name: " + this.name + ", Form Teacher: " + this.formTeacher.fname + " " + this.formTeacher.lname;
        }
    };
 
    var Person = {
        init: function (fname, lname, age) {
            this.fname = fname;
            this.lname = lname;
            this.age = age;
        },
        introduce: function () {
            return "Name: " + this.fname + " " + this.lname + ", Age: " + this.age;
        }
    };
 
    var Teacher = Person.extend({
        init: function (fname, lname, age, speciality) {
            Person.init.apply(this, arguments);
            this.speciality = speciality;
        },
        introduce: function () {
 
            return Person.introduce.apply(this) + ", Speciality: " + this.speciality;
        }
    });
 
    var Student = Person.extend({
        init: function (fname, lname, age, grade) {
            Person.init.apply(this, arguments);
            this.grade = grade;
        },
        introduce: function () {
 
            return Person.introduce.apply(this) + ", Grade: " + this.grade;
        }
    });
 
    return {
        School: School,
        SchoolClass: SchoolClass,
        Teacher: Teacher,
        Student: Student,
    };
}());
 
