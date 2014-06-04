var Class = (function () {
    'use strict';
    function createClass(properties) {
        var f = function () {
            this.init.apply(this, arguments);
        }

        for (var prop in properties) {
            f.prototype[prop] = properties[prop];
        }

        if (!f.prototype.init) {
            f.prototype.init = function () { }
        }

        return f;
    }


    Function.prototype.inherit = function (parent) {
        var oldPrototype = this.prototype;
        var prototype = new parent();
        this.prototype = Object.create(prototype);
        this.prototype._super = parent;

        for (var prop in oldPrototype) {
            this.prototype[prop] = oldPrototype[prop];
        }
    }

    return {
        create: createClass,
    };
}());


var School = Class.create({
    init: function (name, town, classes) {
        this.name = name;
        this.town = town;
        this.classes = classes;
    },
});

var SchoolClass = Class.create({
    init: function (name, studentsCapacity, students, formTeacher) {
        this.name = name;
        this.studentsCapacity = studentsCapacity;
        this.students = students;
        this.formTeacher = formTeacher;
    }
});

var Person = Class.create({
    init: function (firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    },

    introduce: function () {
        var intro = "Name: " + this.firstName + " " + this.lastName + ", Age: " + this.age;
        return intro;
    }
});

var Student = Class.create({
    init: function (firstName, lastName, age, grade) {
        this._super = new this._super(arguments);
        this._super.init(firstName, lastName, age);
        this.grade = grade;
    },

    introduce: function () {
        var intro = this._super.introduce() + ", Grade: " + this.grade;
        return intro;
    }
});
Student.inherit(Person);

var Teacher = Class.create({
    init: function (firstName, lastName, age, speciality) {
        this._super = new this._super(arguments);
        this._super.init(firstName, lastName, age);
        this.speciality = speciality;
    },

    introduce: function () {
        var intro = this._super.introduce() + ", Speciality: " + this.speciality;
        return intro;
    }
});
Teacher.inherit(Person);