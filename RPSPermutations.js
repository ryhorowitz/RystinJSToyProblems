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
* (r+n-1)! / r! (n-1)! number of combos with repetitions
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...] follow this pattern for psuedo coding []
* // IOCE - INPUT / OUTPUT / CONSTRAINTS / EDGE-CASES
*/

var RPSExtraCredit = (rounds) => {
  let results = [];
  let moves = ['R' , 'P', 'S'];

  var play = (playedSoFar, rounds) => {
    if (rounds === 0) {
      results.push(playedSoFar);
      return;
    }
    for (var i = 0; i < moves.length; i++) {
      play(playedSoFar + moves[i], rounds)
    }
  }
  play('', rounds);
  return results;
}