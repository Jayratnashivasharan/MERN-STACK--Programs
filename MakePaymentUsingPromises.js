//Write a Node.js program using a Promise to simulate an online payment transaction.
function makePayment(amount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const balance = 1000;
            if (amount <= balance) {
                resolve("Payment successful: ₹" + amount);
            } else {
                reject("Payment failed: Insufficient balance");
            }
        }, 1000);
    });
}

makePayment(500)
    .then((message) => console.log(message))
    .catch((error) => console.log(error));