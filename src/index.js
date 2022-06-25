module.exports = function toReadable (number) {
  let number1_10 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let teens_number = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  let dn = String(number).split('');
  let rezult = '';
  let length = dn.length;
  
  if (length == 1 && dn[0]==0) {
    return 'zero'
  }
  
  if (length >= 1 && dn[length-1]!= 0) {
      rezult = number1_10[dn[length-1]-1];
  }

  if (length >= 2 && dn[length-2]!= 0) {
    if (dn[length-2] == 1 && dn[length-1] != 0) {
      rezult = teens_number[dn[length-1]-1];
    }
    else if (dn[length-2] == 1 && dn[length-1] == 0) {
      rezult = 'ten';
    }
    else if (dn[length-1] == 0) {
      rezult = dozens[dn[length-2]-2]
    }
    else {
      rezult = dozens[dn[length-2]-2] + ' ' + rezult;
    }
  }

   if (length >= 3 && dn[length-3]!= 0) {
    rezult = number1_10[dn[length-3]-1] + ' hundred ' + rezult;

   }
    
  return rezult.trim()
}
