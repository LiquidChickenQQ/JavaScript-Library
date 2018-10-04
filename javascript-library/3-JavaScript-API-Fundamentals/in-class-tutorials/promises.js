let promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        if (true) {
            resolve('success');
        } else {
            reject('failure');
        }
    }, 2000);
})

promise
    .then(newResult => {
        return newResult + ' we are returning from our first .then';
    })
    .then(secondRes => {
        console.log(secondRes);
    })
    .catch(err => {
        console.log(err);
    })

console.log('This code is after our promise, but run before it!');