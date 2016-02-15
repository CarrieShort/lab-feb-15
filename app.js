//You'll need one of these for each answer
var pTagOne = document.getElementById('ans-one');
var pTagTwo = document.getElementById('ans-two');
var pTagThree = document.getElementById('ans-three');
var pTagFour = document.getElementById('ans-four');
var pTagFive = document.getElementById('ans-five');


function sum(num1,num2){
  var total = num1 + num2;
  //console.log('The sum of ' + num1 + ' and ' + num2 + ' is ' + total + '.');
  pTagOne.textContent = 'The sum of ' + num1 + ' and ' + num2 + ' is ' + total + '.';
  return total;
}

function multiply(num1,num2) {
  var total = num1 * num2;
  //console.log('The product of ' + num1 + ' and ' + num2 + ' is ' + total + '.');
  //pTagTwo.textContent = 'The product of ' + num1 + ' and ' + num2 + ' is ' + total + '.'
  return total;
}

function sumAndMultiply(num1,num2,num3){
  var sumStep1 = sum(num1,num2);
  var sumTotal = sum(sumStep1,num3);

  var multiplyStep1 = multiply(num1,num2);
  var multiplyTotal = multiply(multiplyStep1,num3);

  //console.log(num1 + ' and ' + num2 + ' and ' + num3 + ' sum to ' + sumTotal + '.');

  //console.log('The numbers ' + num1 + ' and ' + num2 + ' and ' + num3 + ' have a product of ' + multiplyTotal + '.');
  pTagThree.textContent = num1 + ' and ' + num2 + ' and ' + num3 + ' sum to ' + sumTotal + '. The numbers ' + num1 + ' and ' + num2 + ' and ' + num3 + ' have a product of ' + multiplyTotal + '.'
  var smArray = [sumTotal, multiplyTotal];
  return smArray;
}

function sumArray(myArray) {
  console.table(myArray);
  var arraySum = myArray[0];
  for (var i=1; i < myArray.length; i++) {
    arraySum += myArray[i];
  }
  //console.log(myArray.toString() + ' was passed in as an array of numbers, and ' + arraySum + ' is their sum.');
  pTagFour.textContent = myArray.toString() + ' was passed in as an array of numbers, and ' + arraySum + ' is their sum.';
  return arraySum;
}

function multiplyArray(myArray) {
  console.table(myArray);
  var arrayProduct = myArray[0];
  for (var i=1; i < myArray.length; i++) {
    arrayProduct *= myArray[i];
  }
  //console.log('The numbers ' + myArray.toString() + ' have a product of ' + arrayProduct + '.');
  pTagFive.textContent = 'The numbers ' + myArray.toString() + ' have a product of ' + arrayProduct + '.';
  return arrayProduct;
}
