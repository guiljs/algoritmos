// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   let newArray = [];
//   let subArray = [size];
//   let index = 0;
//   let newArrayIndex = 0;

//   for (const x of array) {
//     if (index < size) {
//       subArray[index] = x;
//       index++;
//     } else {
//       index = 0;
//       newArray[newArrayIndex] = subArray;
//       newArrayIndex++;
//       subArray = [size];
//       subArray[index] = x;
//       index++;
//     }
//   }
//   newArray[newArrayIndex] = subArray;

//   return newArray;
// }

function chunk(array, size) {
  let chunked = [];

  for (let element of array) {
    let last = chunked[chunked.length - 1]; //Pega o último array dentro do array chunked

    if (!last || last.length === size) {
      chunked.push([element]); //Se não existir ou já ter o tamanho do parametro size, cria um novo array (subarray) que já contém o elemento atual da iteração.
    } else{
        last.push(element); //Se existir e ainda não estiver no tamanho maximo permitido, adiciono no subarray o elemento. 
    }
  }

  return chunked;
}
module.exports = chunk;
