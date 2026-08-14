// Write a node.js program to simulate a bank widrawal using callbacks and setTimeout(). check whether sufficient balance is available and display remaning balance.
function withdraw(balance, amount, callback) {
    setTimeout(() => {
        if (amount > balance) {
            callback("Insufficient balance!", balance);
        } else {
            const remainingBalance = balance - amount;
            callback("Withdrawal successful!", remainingBalance);
        }
    }, 1000);
}

const balance = 5000;
const withdrawAmount = 1500;

withdraw(balance, withdrawAmount, (message, remainingBalance) => {
    console.log(message);
    console.log("Remaining Balance:", remainingBalance);
});