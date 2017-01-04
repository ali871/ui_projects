"use strict";
//alert("good morning");

    /*    {alert("hello world");
                  
                  });*/


$(document).ready(function(){
 function submitCale(){
 event.preventDefault();
      
var x,y;
x=$("#num1").val();
y=$("#num2").val();
console.log(x);
console.log(y);
    
    }
    $("#submit").on("click",submitCale);

});