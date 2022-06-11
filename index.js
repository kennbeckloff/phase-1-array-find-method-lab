// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]
  
  function superbowlWin(record) {
    function winner(year) {
        return year.result === "W";
    }
    const theWinningYear = record.find(winner)
    if 
    (theWinningYear) {
        return theWinningYear.year
    }
}