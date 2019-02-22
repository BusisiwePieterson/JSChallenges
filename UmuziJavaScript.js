//challenge 1

function checkNum(num1,num2) {
  if(num1==65 || num2==65 || num1+num2==65) {
    return true;
  }
  else {
    return false;
  }
  }
console.log(checkNum(40,25))

//challenge 2

var side1 = 7
var side2 = 8
var side3 = 9
var s =(side1+side2+side3)/2;
var area =Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
console.log(area);

//challenge 3

console.log(Math.max(prompt("Give me money"),prompt("Psssh do you call this money"),prompt("I want it all just like SARS")));

//challenge 4

function timeConvert(num) {
  var hours = Math.floor(num/60);
  var min = num % 60;
  return hours + ":" + min;
}
console.log(timeConvert(prompt("Enter a number")));


//challenge 5

var word1 = 'green';
var word2 ='grease';
var common = [];
var w1 = word1.split('');
var w2 =word2.split('');
for(var i=0; i<w1.length; i++) {
  for(var j=0; j<w2.length; j++) {
    if(w1[i] == w2[j]) {
      common.push(w1[i]);
    }
  }
}
console.log(common);
