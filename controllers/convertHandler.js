/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    let idx = input.match(/[a-z]/i);
    idx = idx ? idx.index : input.length; 
    let num = input.slice(0, idx);
    let numParse = (num)=>num.includes('.') ? parseFloat(num): parseInt(num);
    if(num.length == 0){
      return 1;
    }
    else if(num){
      if(num.includes('/')){
        let parts = num.match(/(^[0-9]+\.*[0-9]*)(\/)([0-9]+\.*[0-9]*$)/);
        if(parts){
          let num1 = numParse(parts[1]);
          let num2 = numParse(parts[3]);
          return num1/num2;
        }
        else{
          return null;
        }
      }
      else{
        let parts = num.match(/(^[0-9]+\.*[0-9]*$)/);
        if(parts){
          return numParse(parts[1]);
        }
        else{
          return null;
        }
      }
    }
    else{
      return null;
    }
  };
  
  this.getUnit = function(input) {
    const parts = input.match(/([\d\.\/ ]*)([a-z]*)/i);
    const unit = parts[2].toLowerCase();
    switch(unit){
      case 'gal':
      case 'lbs':
      case 'mi':
      case 'kg':
      case 'km':
        return unit;
      case 'l':
        return 'L';
      default:
        return null;
    }
  };
  
  this.getReturnUnit = function(initUnit) {
    switch(initUnit){
      case 'gal':
        return 'L';
      case 'lbs':
        return 'kg';
      case 'mi':
        return 'km';
      case 'L':
        return 'gal';
      case 'kg':
        return 'lbs';
      case 'km':
        return 'mi';
      default:
        return null;
    }
  };

  this.spellOutUnit = function(unit) {
    switch(unit){
      case 'gal':
        return 'gallons';
      case 'lbs':
        return 'pounds';
      case 'mi':
        return 'miles';
      case 'L':
        return 'liters';
      case 'kg':
        return 'kilograms';
      case 'km':
        return 'kilometers';
      default:
        return null;
    }
  };
  
  this.convert = function(initNum, initUnit) {
    let truncate = (num)=>{
      return parseFloat(num.toFixed(5));
    };
    switch(initUnit){
      case 'gal':
        return truncate(initNum*3.78541);
      case 'lbs':
        return truncate(initNum*0.453592);
      case 'mi':
        return truncate(initNum*1.609340);
      case 'L':
        return truncate(initNum*0.264172);
      case 'kg':
        return truncate(initNum*2.204624);
      case 'km':
        return truncate(initNum*0.621373);
      default:
        return initNum;
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum.toFixed(5)} ${this.spellOutUnit(returnUnit)}`;
  }
  
}

module.exports = ConvertHandler;
