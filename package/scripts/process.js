"use strict";
function processform(){
    event.preventDefault();
 
    var flag=false;
 var firstName,lastName,Address,xresults;
    
 
    firstName=document.getElementById("firstName").value;
    lastName=document.getElementById("lastName").value;
    Address=document.getElementById("Address").value;
    
    xresults = "firstName->" +firstName;
    xresults += "<br>lastName->" +lastName;
    xresults += "<br>Address->" +Address;
    
    console.log(firstName.length);
   // console.log("firstName->"+firstName);
   // console.log("lastName->"+lastName);
   // console.log("Address->"+Address);
    //console.log(firstName.length);
    
    if(firstName.length==0){
        flag=true;
    }
    if(lastName.length==0){
        flag=true;
    }
    if(Address.length==0){
        flag=true;
    }
   if(flag){
       alert("error");
   }  
    else{
        alert("form submit");
        results(xresults);
        }
}
  
 function results(Y){
        document.getElementById("results").innerHTML=Y
    }
