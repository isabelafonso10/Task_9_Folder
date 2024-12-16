// Create a higher order function
const wordArray = [
    "candle",
    "tooth",
    "glass",
    "carpet",
    "bucket",
    "pyjamas",
    "laptop",
    "fridge",
    "children",
    "concert",
];

let myFilterFunction = (arr) => (fn) => {
    const arrayAfterFilter = [];
    for (let i = 0; i < arr.length; i++) {
      // Check if the callback function returns true for the current element
      if (fn(arr[i])) {
        arrayAfterFilter.push(arr[i]);
      }
    }
    return arrayAfterFilter; // Return a new array
  };
  
  
  const sixLetterWordFilter = (word) => word.length === 6;
  
  
  const outputArray = myFilterFunction(wordArray)(sixLetterWordFilter);
  
  
  console.log("Words with six letters only: " + outputArray);