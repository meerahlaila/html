document.getElementById("myDiv").innerHTML = "<h1>Simple Calculator</h1>"
document.getElementById("h4").innerHTML = "<h4>Try out simple arithmetic operations with this tool!</h4>"

//*addition*//
var a = 3;
let b = 5;
let c = a+b

document.writeln("The sum is: ", c, "<br>")
document.writeln("Add numbers together. <br> <br>")

//*subtraction*//
var e = 20;
let f = 18;
let g = e - f

document.writeln("The difference is: ", g, "<br>")
document.writeln("Subtract two numbers!<br> <br>")

//*multiplication*//
var h = 50;
var i = 30;
let j = h * i
document.writeln("The product is: ", 
    j, "<br>")
document.writeln("Multiply numbers together! <br> <br>")

//*division*//
var k = 90;
var l = 3;
let m = k/l
document.writeln("The division is: ",
    m, "<br>")  
document.writeln("Dividing numbers<br> <br>") 

//*reminder*//
var r = 500%9
document.writeln("The reminder is ", r, "<br> <br>")
