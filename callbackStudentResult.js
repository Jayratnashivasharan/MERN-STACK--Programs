//Write a  NOde.js program to demostrate callback functions using setTimeout()for calculating,
//total marks, percentage and result of a student.

function calculateTotal(marks,callback) {
    setTimeout(() => {
        const total = marks.maths + marks.science + marks.english;
        callback(total);
    }, 1000);
}

function calculatePercentage(total,callback) {
    setTimeout(() => {
        const percentage = (total / 300) * 100;
        callback(percentage);
    }, 1000);
}

function calculateResult(percentage, callback) {
    setTimeout(() => {
        const result = percentage >= 50 ? "Passed" : "Failed";
        callback(result);
    }, 1000);
}

const studentMarks = {
    maths: 80,
    science: 70,
    english: 60
};

calculateTotal(studentMarks, (total) => {
    console.log("Total Marks:", total);

    calculatePercentage(total, (percentage) => {
        console.log("Percentage:", percentage + "%");

        calculateResult(percentage, (result) => {
            console.log("Result:", result);
        });
    });
});