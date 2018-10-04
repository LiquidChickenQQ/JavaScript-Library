//Callbacks


//the below are not callback functions--they are nested functions

function one(x) {
    return x;
}

function two(dataFromOne) {
    return `I have ${dataFromOne} chickens!`;
}

function three(dataFromTwo) {
    return dataFromTwo;
}
console.log(three(two(one(10))));

//callbacks with a promise
let promise = new Promise((resolve, reject) => {
    setTimeout(() => { // fat arrow function is a callback -- it executes after 3 seconds
        (true) ? resolve('it worked!'): reject('it didn\'t work....');
    }, 3000);
})

promise
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    })