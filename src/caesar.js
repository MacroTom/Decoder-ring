// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  var alphabet = [
                    'a','b','c','d','e','f','g','h','i','j',
                    'k','l','m','n','o','p','q','r','s','t',
                    'u','v','w','x','y','z'
                 ];
  
  function caesar(input, shift, encode = true) {
    // your solution code here
    let result = '';
    if(!shift || shift == 0 || shift < -25 || shift > 25){
        return false;
    }
    else{
      var letter = '';
      var temp,pos;
      for (let i = 0; i < input.length; i++) {
          letter = input[i].toLowerCase();
          if(alphabet.includes(letter)){
              pos = alphabet.indexOf(letter);
              // Determine if encryption or decryption
              if(encode){
                temp = pos + shift;
              }
              else{
                temp = pos - shift;
              }
              if(temp > 25){
                  temp -= alphabet.length;
              }
              else if(temp < 0){
                  temp += alphabet.length;
              }
              result += alphabet[temp];
          }
          else{
              result += letter;
          }
      }
      return result;
    }
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
