function add(x, y)
{window.alert(x +  " + " + y + " = " + (x+y));}

function subtract(x, y) 
{window.alert(x + " - " + y + " = " + (x-y));}

function multiply(x, y)
{window.alert(x + " • " + y + " = " + (x*y));}

function divide(x, y)
{window.alert(x + " ÷ " + y + " = " + (x/y));}

function power(x, y)
{window.alert(x + " ^ " + y + " = " + (Math.pow(x, y)));}

function sqrt(x)
{window.alert("√" + x + " = " + (Math.pow(x, 0.5)));}

function percent(x, y) {
  var subtotal = x / y;
  window.alert(x + " % of " + y + "= " + (subtotal * 100));
}

function circleCircumference(r)
{window.alert("Circumference of a Circle with radius " + r + " is: " +  (Math.PI * r * 2));}

function circleArea(r)
{window.alert("Area of a Circle with radius " + r + " is: " + (Math.PI * Math.pow(r, 2)))}

function modulus(x, y)
{window.alert("x % y = " + (x%y));}

A: while (true) {
  var choiceCalc = parseInt(window.prompt("Choose a number representing a calculation. Where: (1) = Add, (2) = Subtract, (3) = Multiply, (4) = Divide, (5) = Exponential, (6) = Modulo, (7) = Square Root, (8) = Circle Circumference, (9) = Circle Area"));

  B: switch (choiceCalc) {
    case 1:
      var x = parseFloat(window.prompt("Choose a number: "));
      var y = parseFloat(window.prompt("Choose a number: "));
      add(x, y);
      break B;
    case 2:
      var x = parseFloat(window.prompt("Choose a number: "));
      var y = parseFloat(window.prompt("Choose a number: "));
      subtract(x, y);
      break B;
    case 3:
      var x = parseFloat(window.prompt("Choose a number: "));
      var y = parseFloat(window.prompt("Choose a number: "));
      multiply(x, y);
      break B;
    case 4:
      var x = parseFloat(window.prompt("Choose a number: "));
      var y = parseFloat(window.prompt("Choose a number: "));
      divide(x, y);
      break B;
    case 5:
      var x = parseFloat(window.prompt("Choose a number: "));
      var y = parseFloat(window.prompt("Choose a number: "));
      power(x, y);
      break B;
    case 6:
      var x = parseFloat(window.prompt("Choose a number: "));
      var y = parseFloat(window.prompt("Choose a number: "));
      modulus(x, y);
      break B;
    case 7:
      var x = parseFloat(window.prompt("Choose a number: "));
      sqrt(x);
      break B;
    case 8:
      var radius = parseFloat(window.prompt("Choose a radius for this circle: "));
      circleCircumference(radius);
      break B;
    case 9:
      var radius = parseFloat(window.prompt("Choose a radius for this circle: "));
      circleArea(radius);
      break B;
    default:
      window.alert("Illegal number! Expression not found! Try again!");
      break B;
  }
  
  var again = window.prompt("Would you like to do another calculation?", "Yes");
  if (again != "Yes") {
    break A;  
  }
}
