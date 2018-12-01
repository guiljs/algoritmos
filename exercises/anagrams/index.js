// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   const charMapA = charMap(stringA);
//   const charMapB = charMap(stringB);

//   if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
//     return false;
//   }

//   for (let char in charMapA) {
//     console.log(char,charMapA[char],charMapB[char]);
//     if (charMapA[char] !== charMapB[char]) {
//         console.log(char,charMapA[char],charMapB[char]);
//       return false;
//     }
//   }

//   return true;
// }

// function charMap(str) {
//   let charMap = {};

//   str = str.replace(/[^\w]/g, "").toLowerCase();

//   for (let char of str) {
//     charMap[char] = charMap + 1 || 1;
//   }

//   return charMap;
// }


function anagrams(stringA, stringB) {

    let sortA = stringA.replace(/[^\w]/g, "").toLowerCase().split('').sort().join();
    let sortB = stringB.replace(/[^\w]/g, "").toLowerCase().split('').sort().join();

    return sortA === sortB;

}
module.exports = anagrams;
