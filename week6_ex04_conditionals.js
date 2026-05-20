// TODO: Create a variable called score and give it a value between 0 and 100
let score = 68;
// TODO: Create a variable called passingGrade and set it to 60
let passingGrade = 60;
// TODO: Write an if statement to check if score is greater than or equal to passingGrade
// TODO: Add an else statement for when the score is below passingGrade
// TODO: Print "Passed" or "Failed" based on the score
// TODO: Add another condition to check if the score is perfect (100)
let result;

if (score === 100) {
  result = "Excellent!";
} else if (score >= passingGrade) {
  result = "Passed";
} else {
  result = "Failed";
}

console.log(result);
