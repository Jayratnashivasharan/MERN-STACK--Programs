//Write a node.js program to demostrate callback hell using online shopping order process.
// Order placed 
// payment completed 
// order packed
// order shipped
// order process completed

function placeOrder(callback) {
    setTimeout(() => {
        console.log("Order placed");
        callback();
    }, 1000);
}

function makePayment(callback) {
    setTimeout(() => {
        console.log("Payment completed");
        callback();
    }, 1000);
}

function packOrder(callback) {
    setTimeout(() => {
        console.log("Order packed");
        callback();
    }, 1000);
}

function shipOrder(callback) {
    setTimeout(() => {
        console.log("Order shipped");
        callback();
    }, 1000);
}

function completeOrder(callback) {
    setTimeout(() => {
        console.log("Order process completed");
        callback();
    }, 1000);
}

// Callback hell
placeOrder(() => {
    makePayment(() => {
        packOrder(() => {
            shipOrder(() => {
                completeOrder(() => {
                    console.log("Thank you for shopping!");
                });
            });
        });
    });
});