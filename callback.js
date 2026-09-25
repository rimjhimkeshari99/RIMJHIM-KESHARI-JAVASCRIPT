function greet(name, callback) {
    console.log("hello " + name);
    callback();
}

greet("rimjhim", function () {
    console.log("callback function executed");
});

function printName() {
    console.log("rimjhim");
}

printName();
console.log("welcome");

function printNameAfterDelay() {
    setTimeout(() => {
        console.log("rimjhim");
    }, 2000);
}

printNameAfterDelay();

// promise
let complete = true;
let p = new Promise((resolve, reject) => {
    if (complete) {
        resolve("promise resolved successfully");
    } else {
        reject("promise rejected");
    }
});

p.then((value) => console.log(value)).catch((error) => console.log(error));
