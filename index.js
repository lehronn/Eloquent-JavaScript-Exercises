//chapter 3
//min
function min() {
  let x = parseInt(prompt("Enter first number."));
  let y = parseInt(prompt("Enter secound number."));
  let avg = (x+y)/2;

  if (x==y) {console.log("both number is equal.")};
  if (x>y) {console.log(x + " is greater.")};
  if (x<y) {console.log(y + " is greater.")};
  console.log("average " + x + " and " + y + " is " + avg);
};

//isEven
function isEven(x) {

  if (x==0) {return true && console.log("number is even.")}
  else if (x==1) {return false && console.log("number is not even.")}
  else {return isEven(x-2);};
}

//counters
function countBS() {

}

function countChar() {

}


// min();
// isEven(parseInt(prompt("Enter number.")));
countBS();
countChar();
