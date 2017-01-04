"use strict";
function calculator(){
    
    var x;
    var y;
    //mutators
    this.setX=function(valx){
        x = valx;
    }
    this.setY=function(valy){
        y = valy;
    }
    //Acccessors
    this.getX = function(){
        return x;
    }
this.getY = function(){
    return y;
}
this.add = function(){

    return x+y;
}

    this.substract = function(){
return x-y;
    }
    
this.multiply = function(){
    
    return x*y;
}
this.divide = function(){
   
    return x/y;
}
this.testingOutput = function(){
    console.log("Addition = "+this.add());
     console.log("Substraction = "+this.substract());
     console.log("division = "+this.divide());
}
}
var calculatorObj =new calculator();
calculatorObj .setX(3);
calculatorObj .setY(2);
console.log("X = "+calculatorObj.getX());
console.log("Y = "+calculatorObj.getY());
calculatorObj.testingOutput();






