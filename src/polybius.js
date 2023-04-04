// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  var grid = [
      ['a','b','c','d','e'],
      ['f','g','h','i/j','k'],
      ['l','m','n','o','p'],
      ['q','r','s','t','u'],
      ['v','w','x','y','z'],
  ];

  function indexOf2dArray(array2d, itemtofind) {
      var index = [].concat.apply([], ([].concat.apply([], array2d))).indexOf(itemtofind);
                  
      // return "false" if the item is not found
      if (index === -1) { return false; }
      
      // Use any row to get the rows' array length
      // Note, this assumes the rows are arrays of the same length
      numColumns = array2d[0].length;
      
      // row = the index in the 1d array divided by the row length (number of columns)
      row = parseInt(index / numColumns);
      
      // col = index modulus the number of columns
      col = index % numColumns;
      
      return [row, col]; 
  }

  function polybius(input, encode = true) {
    // your solution code here
    var result = '';
    var letter = '';
    var count = 0;
    var temp,pos;

    for (let j = 0; j < input.length; j++) {
      letter = input[j];
      if(letter != ' '){
        count++;
      }
    }
    if(!encode && (count % 2) > 0){
        return false;
    }

    if(!encode){
      // decrypting
      var spaces = [];
      var clean = '';
      for (let j = 0; j < input.length; j++) {
          if(input[j] === " "){
              spaces.push(j);
          }
      }

      clean = input.replace(" ","");
      for (let i = 0; i < (clean.length / 2); i++) {
          letter = clean.substring(i*2,(i*2)+2);
          result += grid[parseInt(letter[1])-1][parseInt(letter[0])-1];
      }

      if(spaces > 0){
          var arr;
          for (let s = 0; s < spaces.length; s++) {
              arr = result.split('');
              arr.splice(parseInt(spaces[s])/2, 0, " ");
              result = arr.join('');
          }
      }
    }
    else{
      // encrypting
      for (let i = 0; i < input.length; i++) {
        letter = input[i].toLowerCase();
        if(letter === " "){
            result += letter;
        }
        else if(letter === 'i' || letter === 'j'){
            result += '42';
        }
        else{
          pos = indexOf2dArray(grid, letter);
          pos[0]++;
          pos[1]++;
          result += pos[1].toString()+pos[0].toString();
        }
      }
    }

    return result;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
