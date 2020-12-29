/*
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

//output: number 
//input: string of alphanumeric characters
//constraints: input will always be alphanumeric characters
//edge cases: if input length is 1, return 0
//justification: We want to find out how many characters in the input appear more than once
//explanation: go through the input string, compare each letter to see if they appear more than once, return the amount of letters that appear more than once
//pseudo

var duplicateCount = (str) => {
  //counter, find way to compare letters, check casing (maybe just downcase everything)
//   create counter variable
  let counter = 0;
//   make all characters in the string lowercase
  str = str.toLowerCase();
//   break up the string into an array, with each character at its own index
  let strArr = str.split('').sort();
  let seen = [];
  
  for (var i = 0; i < strArr.length; i++) {
    let currentChar = strArr[i]
    let nextChar = strArr[i + 1]
    if (seen.includes(currentChar)) {
        continue;
    };
    if (currentChar === nextChar) {
      counter += 1 
      seen.push(currentChar);
    }
  }
//   return counter variable
  return counter;
  
  let counts = {};
  str.split('').forEach(char => {
    counts[char] ? counts[char] += 1 : counts[char] = 1
  })
  counts
}

def duplicate_count(text) 'abbc'
  text.downcase.chars.uniq.count { |char| text.downcase.count(char) > 1 }
end

"hello".count { |char| ['a', 'b'].includes?(char) }
  
function someFunction(...args) {
  args.forEach(
}
//Tests
console.log(duplicateCount("")) //0
console.log(duplicateCount("b22caeB2222d123")) //2
console.log(duplicateCount("aabbcde")) //2
console.log(duplicateCount("aabBcde")) //2
console.log(duplicateCount("Indivisibility")) //1
console.log(duplicateCount("Indivisibilities")) //2 

               https://github.com/airbnb/javascript
