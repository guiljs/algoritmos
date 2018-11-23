// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   var newString = "";

//   for (let index = 0; index < str.length; index++) {
//     const element = str[index];
//     newString = element + newString;
//   }

//   return newString;
// }

// function reverse(str) {
//   // const arr = str.split('');
//   // arr.reverse();
//   // return arr.join('');

//   return str
//     .split("")
//     .reverse()
//     .join("");
// }

// function reverse(str) {

//   let reversed = '';
//   for(let ch of str)
//   {
//      reversed = ch + reversed;
//   }

//   return reversed;

// }

function reverse(str) {
  debugger;
  return str.split("").reduce((rev, ch) => ch + rev);
}

reverse('asdf');

module.exports = reverse;
