var longestCommonPrefix = function(strs) {
   var charList =[];
  const[A,...B]=[...strs].sort((a,b)=>a.lenght-b.lenght);
  A.split('')
    .every((char, idx) => {
      const isValidChar = B.every(word =>
        word.charAt(idx) === char
      );
      if (isValidChar) {
        charList.push(char);
      }
        return isValidChar;
    });
 return charList.join('');
}
