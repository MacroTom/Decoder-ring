// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  var abc = "abcdefghijklmnopqrstuvwxyz";


  function substitution(input, alphabet, encode = true) {
    // your solution code here
    var letter, result = "";
    var cases = [];

    if(!alphabet || alphabet.length < 26 || alphabet.length > 26){
        return false;
    }

    // check for duplicate letters
    for (let d = 0; d < alphabet.length; d++) {
        if(cases.includes(alphabet[d])){
            return false;
        }
        else{
            cases.push(alphabet[d]);
        }
    }

    for (let i = 0; i < input.length; i++) {
        if(input[i] === " "){
            result += input[i];
        }
        else{
            letter = input[i].toLowerCase();
            var pos;
            if(encode){
                pos = abc.toLowerCase().indexOf(letter);
                result += alphabet[pos];
            }
            else{
                pos = alphabet.toLowerCase().indexOf(letter);
                result += abc[pos];
            }
        }
    }

    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
