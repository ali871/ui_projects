"use strict";

function Person () {
    var firstName, lastName, phone, email;
    this.setfirstName=function(fname) {
        firstName=firstNameame;
    }
    this.setlastName=function(lname) {
        lastName=lName;
    }
    this.setPhone=function(ph) {
        phone=ph;
    }
    this.setemail=function(em) {
        email=em;
    }
    this.getfirstName=function() {
        return firstName; 
    }
    this.getlastName=function() {
        return lastName;
    }
    this.getPhone=function() {
        return phone;
    }
    this.getemail=function() {
        return email;
    }
    this.testFunc=function() {
        console.log("rendering object");
        console.log(this.getfirstName);
        console.log(this.getlastName);
    }
}

//testing object
/*
var obj = new Person();
obj.setFirstName("hello");
obj.setLastName("world");
obj.setContact("123213");
obj.setEmail("asdas@hjsfs");

console.log(obj.getFirstName());
console.log(obj.getLastName());
console.log(obj.getContact());
console.log(obj.getEmail());
*/