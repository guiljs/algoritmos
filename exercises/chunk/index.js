// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let newArray = [];
  let subArray = [size];
  let index = 0;
  let newArrayIndex = 0;

  for (const x of array) {
    if (index < size) {
      subArray[index] = x;
      index++;
    } else {
      index = 0;
      newArray[newArrayIndex] = subArray;
      newArrayIndex++;
      subArray = [size];
      subArray[index] = x;
      index++;
    }
  }
  newArray[newArrayIndex] = subArray;

  return newArray;
}

module.exports = chunk;
