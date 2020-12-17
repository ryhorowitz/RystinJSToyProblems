/* Write two functions that each take two strings as arguments. Their expected 
behaviors are as follows: The indexOf function searches for the first instance 
of a substring in firstString that matches the string secondString, and returns
the index of the character where that substring begins. The lastIndexOf function
searches for the last instance of a substring in firstString that matches the
string secondString, and returns the index of the character where that substring
begins. Both functions return -1 if firstString does not contain the substring 
specified by secondString. You may use the square brackets ([]) to access a character
by index (as shown below), and the length property to find the string length.
However, you may not use any other properties or methods from JavaScript's 
built-in String class. 
*/
function indexOf(firstString, secondString) {
  //debugger;
  let comparison = [];
  let firstIndexOfSecondString = -1;
  for (var i = 0; i < firstString.length; i++) {
    let currentLetter = firstString[i];
    if ((currentLetter === secondString[0]) 
    && (secondString.length === 1)) { // edge-case if secondString is only 1 character
       return i;
    } 
    if (currentLetter === secondString[0]) {
      comparison.push(currentLetter);  // the problem doesn't constrain the use of Array.prototype.methods
      firstIndexOfSecondString = i;

      for (var j = 1; j < secondString.length; j++) { //potentially have located the first character of SecondString 
        if (secondString[j] === firstString[i + j]) { // compare both simultaneously through []lookup
          comparison.push(secondString[j]); //if the next characters match add to comparison array
        } else {
          break; // go baack to outer for loop and keep searching for firstIndex
        }
        if (comparison.length === secondString.length){  //they be the same
          return firstIndexOfSecondString;
        }
      }
    }
  }
  return firstIndexOfSecondString;
}

//indexOf('Some strings', 's');                      // 5
//indexOf('Blue Whale', 'Whale');                    // 5
// ndexOf('Blue Whale', 'Blute');                    // -1
//indexOf('Blue Whale', 'leB');                      // -1

// function lastIndexOf(firstString, secondString) {
//   // statements
// }

indexOf('Some strings', 's');                      // 5
indexOf('Blue Whale', 'Whale');                    // 5
indexOf('Blue Whale', 'Blute');                    // -1
indexOf('Blue Whale', 'leB');                      // -1

// lastIndexOf('Some strings', 's');                  // 11
// lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
// lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1
