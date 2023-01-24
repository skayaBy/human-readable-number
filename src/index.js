module.exports = function toReadable (number) {
  let arrUnits = ['','one','two','three','four','five','six','seven','eight','nine'];
  let arrTeens = ['ten','eleven','twelve','thirteen', 'fourteen', 'fifteen', 'sixteen','seventeen','eighteen','nineteen'];
  let arrDozens = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  let humanNumber = '';
  let temp = 0;

  if (number == 0) humanNumber = 'zero';

  temp = Math.trunc(number/100); 
  if (temp > 0 ) { 
    humanNumber = arrUnits[temp] + ' hundred';
  }
  
  temp = number%100;  
  if (temp > 19) {
    if (number > 100) {
      humanNumber += ' ';
    }
    humanNumber += arrDozens[Math.trunc(temp/10)]; 
    if (temp%10 > 0) {
      humanNumber += ' ' + arrUnits[temp%10]; 
    }
  }

  if (temp > 9 && temp < 20) { 
    if (number > 100) {
      humanNumber += ' '; 
    }
    humanNumber += arrTeens[temp%10];            
  }

  if (temp <= 9) {
    if (number > 100 && temp != 0) {
      humanNumber += ' ';
    }
    humanNumber += arrUnits[temp]; 
  }
  
  return humanNumber;
}