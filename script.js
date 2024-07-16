// complete this js code
function Person(name, age) {
	let name=this.name;
	let age=this.age;
	function greet(){
		return `Hello, my name is ${name}, I am ${age} years old.`
	}
function Employee(name, age, jobTitle) {
	let jobtitle=this.jobtitle;
	return`Hello, my name is ${name}, I am ${age} years old, and my job title is ${jobtitle}`;	
}
}
let obj1=new Object("Alice",25,"Assistant");
let obj1=new Object("Bob",30,"Manager");
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
