// create a custome module to calculate whether a student has passed or failed based on marks?
function calculateResult(marks) {
    if (marks >= 50) {
        return "Passed";
    } else {
        return "Failed";
    }
}
exports.calculateResult = calculateResult;
