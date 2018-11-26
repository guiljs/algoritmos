// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = {};
  for (let x of str) {
    chars[x] = chars[x]+1 || 1;
/*
    if(chars[x])
    {
        chars[x]++;
    }
    else
    {
        chars[x]=1;
    }
    */
    
  }
  console.log(chars);

  let iBigger=0;
  let cBigger='';

  for(let char in chars){
      if(iBigger < chars[char])
      {
        iBigger=chars[char];
        cBigger=char;
      }
  }
  return cBigger;

}

module.exports = maxChar;
