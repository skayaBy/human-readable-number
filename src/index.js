module.exports = function toReadable (number) {
  let arrUnits = ['zero','one','two','three','four','five','six','seven','eight','nine'];
  let arrTeens = ['ten','eleven','twelve','thirteen', 'fourteen', 'fifteen', 'sixteen','seventeen','eighteen','nineteen'];
  let arrDozens = ['','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  let humanNumber = '';
  let temp = 0;

  temp = Math.trunc(number/100); 
  if (temp > 0 ) { 
    humanNumber = arrUnits[temp] + ' hundred';
  }

  temp = number%100; 
  if (temp > 19 && temp < 100) {
    if (number > 100) {
      humanNumber += ' ';
    }
    humanNumber += arrDozens[Math.trunc(temp/10)]; 
    
    if (temp%10 != 0) {
      humanNumber += ' ' + arrUnits[temp%10];
    }
  }

  if (temp > 9 && temp < 20) { 
    if (number > 100) {
      humanNumber += ' '; 
    }
    humanNumber += arrTeens[temp%10];            
  }
  
  if (temp < 10)
  {
    if (number > 10 && temp > 0) {
      humanNumber +=' ' + arrUnits[temp%10];     
    }
    if (number < 10 ) {
      humanNumber = arrUnits[temp%10];   
    }
  }
    
  return humanNumber;
}