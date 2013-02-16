function Human(name, gender, address, telephoneNumber){
	var self = this;
	
	self.name = name;
	self.gender = gender;
	self.address = address;
	self.telephoneNumber = telephoneNumber;
	
	self.introduce = function (){
		return "Hi, I am " + self.name + ".";
	}
	
	return self;
}
Student.prototype = new Human();
Student.prototype.constructor = Student;

function Student(name, gender, address, telephoneNumber){
	var self = this;
	
	Human.apply(self, new Array(name, gender, address, telephoneNumber));
	
	self.state = "";
	self.marks = new Array();
	
	self.averageMark = function(){
		var sum = 0;
		for(var i in self.marks){
			sum += self.marks[i];
		}
		
		return sum / self.marks.length;
	}
	
	self.addMark = function(mark){
		self.marks.push(mark);
	}
	
	self.removeMark = function(mark){
		self.marks.splice(self.marks.indexOf(mark), 1);
	}
	
	return self;
} 
Parent.prototype = new Human();
Parent.prototype.constructor = Parent;

function Parent(name, gender, address, telephoneNumber){
	var self = this;
	
	Human.apply(self, new Array(name, gender, address, telephoneNumber));
	
	self.children = new Array();
	self.yellAt = function(student){
		if(self.children.indexOf(student) == -1){
			return "This child is not mine!";
		}
		
		return "I am yelling at " + student.name + "!!!!";
	}
	
	return self;
}
var toshko = new Human("Toshko", "Male", "Lovech", 
	"0879554433");
document.write(toshko.introduce() + "<br/>");

var pesho = new Student("Pesho", "Male", "Pernik", "3213213");
pesho.addMark(6);
pesho.addMark(2);
pesho.addMark(4);
pesho.state = "Sofia";
document.write(pesho.introduce() + " My state: " + pesho.state +
	". Average mark: " + pesho.averageMark() + "<br/>");
	
var maria = new Student("Maria", "Female", "Plovdiv", "Plovdiv", 
	"068602030");
document.write(maria.introduce() + "<br/>");

var mother = new Parent("Petya", "Male", "Varna", "Varna",
	"0898685838");
mother.children.push(toshko);
mother.children.push(maria);
document.write(mother.introduce() +
	mother.yellAt(toshko) + "<br/>");