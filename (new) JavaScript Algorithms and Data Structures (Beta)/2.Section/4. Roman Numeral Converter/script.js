const convertButton = document.getElementById('convert-btn');
const output = document.getElementById('output');
console.log("initializing");

let numerals = {
    1000:   "M",
    900:    "CM",
    500:    "D",
    400:    "CD",
    100:    "C",
    90:     "XC",
    50:     "L",
    40:     "XL",
    10:     "X",
    9:      "IX",
    5:      "V",
    4:      "IV",
    1:      "I"
}

const convertToRoman = (num) => {

    let pow_count = 0; 
    let inRomans = ""

    while(pow_count < num.toString().length){
        let digit = parseInt(num.toString()[num.toString().length-pow_count-1])
        let digitInTens = digit*Math.pow(10, pow_count);
        pow_count++

        if(digit <= 3 && digit > 0){
            console.log(digit)
            console.log(digitInTens)
            inRomans = numerals[digitInTens/digit].repeat(digit) + inRomans
        }else if(digit == 4 || digit == 5 || digit == 9){
            inRomans = numerals[digitInTens] + inRomans
        }else if(digit > 5){
            console.log(digit)
            console.log(digitInTens)
            let fivesInTens = 5*Math.pow(10, pow_count-1);
            console.log(fivesInTens)
            inRomans = numerals[fivesInTens] + numerals[(digitInTens-fivesInTens)/(digit-5)].repeat(digit-5)+ inRomans
        }
    }
    return inRomans;
}

const isValid = (str, int) => {
    let errText = '';
  
    if (!str || str.match(/[e.]/g)) {
      errText = 'Please enter a valid number.';
    } else if (int < 1) {
      errText = 'Please enter a number greater than or equal to 1.';
    } else if (int > 3999) {
      errText = 'Please enter a number less than or equal to 3999.';
    } else {
      // No errors detected
      return true;
    }
  
    output.innerText = errText;
    output.classList.add('alert');
  
    return false;
  };
  
  const clearOutput = () => {
    output.innerText = '';
    output.classList.remove('alert');
  };
  
  form.addEventListener('submit', e => {
    e.preventDefault();
    updateUI();
  });
  
  convertButton.addEventListener('click', () => {
    updateUI();
  });
  
  const updateUI = () => {
    const numStr = document.getElementById('number').value;
    const int = parseInt(numStr, 10);
  
    output.classList.remove('hidden');
  
    clearOutput();
  
    if (isValid(numStr, int)) {
      output.innerText = convertToRoman(int);
    }
  };