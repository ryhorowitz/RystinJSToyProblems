/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...] follow this pattern for psuedo coding []
* // IOCE - INPUT / OUTPUT / CONSTRAINTS / EDGE-CASES
*/

function rockPaperScissors() {    //This answers complexity is O(n**2)!! We must refactor!!!
  let possibleMoves = [['R', 'P', 'S'], ['R', 'P', 'S'], ['R', 'P', 'S']]; 
  let moveCombos = []; 
  let move = ''
  for (var i = 0; i < possibleMoves[0].length; i++) {
    let round1Outcome = possibleMoves[0][i]; //'r' or 'p' or 's'
        
    for (var j = 0; j < possibleMoves[1].length; j++) {
      let round2Outcome = possibleMoves[1][j];   
      
      for (var k = 0; k < possibleMoves[2].length; k++) {
        let round3Outcome = possibleMoves[2][k];
        let combo = round1Outcome + round2Outcome + round3Outcome; 
        moveCombos.push(combo); 
      }
    }
  }
  return moveCombos; 
}; 
console.log(rockPaperScissors());
