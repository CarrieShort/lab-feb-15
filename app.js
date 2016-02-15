//You'll need one of these for each answer
var pTagOne = document.getElementById('ans-one');

var ans1 = prompt('Did Sam live in South Dakota for 8 years?');
if (ans1.toLowerCase() === 'n' || ans1.toUpperCase() === 'NO') {
  // alert('You\'re right! Sam never lived in South Dakota!');
  // The alert() is replaced with the following line
  pTagOne.textContent = 'You\'re right! Sam never lived in South Dakota!';
} else if (ans1.toLowerCase() === 'y' || ans1.toUpperCase() === 'YES') {
  // alert('Nope! Sam never lived in South Dakota!');
  // The alert() is replaced with the following line
  pTagOne.textContent = 'Nope! Sam never lived in South Dakota!';
} else {
  // This error-correction can stay as an alert
  alert('Please give a yes or no answer.');
}

function sum(num1,num2){
  var total = num1 + num2;
  //console.log('The sum of ' + num1 + ' and ' + num2 + ' is ' + total + '.');
  return total;
}

function multiply(num1,num2) {
  var total = num1 * num2;
  //console.log('The product of ' + num1 + ' and ' + num2 + ' is ' + total + '.');
  return total;
}

function sumAndMultiply(num1,num2,num3){
  var sumStep1 = sum(num1,num2);
  var sumTotal = sum(sumStep1,num3);

  var multiplyStep1 = multiply(num1,num2);
  var multiplyTotal = multiply(multiplyStep1,num3);

  console.log(num1 + ' and ' + num2 + ' and ' + num3 + ' sum to ' + sumTotal + '.');

  console.log('The numbers ' + num1 + ' and ' + num2 + ' and ' + num3 + ' have a product of ' + multiplyTotal + '.');

  var smArray = [sumTotal, multiplyTotal];
  return smArray;
}

function sumArray(myArray) {
  console.table(myArray);
  var arraySum = myArray[0];
  for (i=1; i < myArray.length; i++) {
    arraySum += myArray[i];
  }
  console.log(myArray.toString() + ' was passed in as an array of numbers, and ' + arraySum + ' is their sum.');
  return arraySum;
}
