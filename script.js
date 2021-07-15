    function myFunction() {
        document.getElementById("demo").innerHTML="paragraph changed.";
    }
document.write("Ochuko");
window.alert("frontend")

console.log(900)     

var x = 5;
var y = 6;
var y = 10;
var z = x + y;
console.log(z);

var person = 'Ochuko'; //string data type
var age = 25; //number data type
var rightWrong = false; //Boolean data type
var numChildren = null; //Null Data type
var definition = undefined; // = undefined; //Undefined data type

//console.log
console.log(person);
console.log(age);
console.log(rightWrong);
console.log(numChildren);
console.log(definition);

//.innerHTML
document.getElementById('person').innerHTML = person;
document.getElementById('number').innerHTML = age;
document.getElementById('boolean').innerHTML = rightWrong;
document.getElementById('null').innerHTML = numChildren;
document.getElementById('definition').innerHTML = undefined;

//addition operator
var number1 = 10;
var number2 = 20;
var sum = number1 + number2;
console.log(sum);

//multiplication operator
var a = 5;
var b = 6;
var multiple = a*b;

console.log(multiple);

  //subtraction operator  
  var h = 20;
  var i = 10;
  var subtract = h-i;
  console.log(subtract);
  
  //division operator
  var m = 65;
  var n = 5;
  var division = m/n;
  console.log(division);

  //increment operator
  var s = 10;
  s++;
  console.log('increment operator', s);

  //decrement operator
  var t = 50;
  t--;
  console.log('this is my decrement operator', t);

  const arr = [{firstName: 'Ochuko', lastName: 'Nwosa', age: 35},
        {firstName:'Vwegba',lastName: 'Itomi', age: 30}]

console.log(arr);

function fullName() {
    document.getElementById('name1').innerHTML = arr[0].firstName + '' + arr[0].lastName + arr[0].age
    document.getElementById('name2').innerHTML = arr[1].firstName + '' + arr[1].lastName + arr[1].age
    document.getElementById('age').innerHTML = arr[0].age
        }

  let arr2 = ['Kunle', 'Moses', 'Lucky', 'sule']
  arr2.length
  console.log(arr2)
  arr2.sort()
  console.log(arr2)
  arr2.toString()
  console.log(arr2)
  arr2.pop()
  console.log(arr2)
  arr2.push('chidera')
  console.log(arr2)
  arr2.unshift('Bola')
  console.log(arr2)
  arr2.shift()
  console.log(arr2)
  
  
