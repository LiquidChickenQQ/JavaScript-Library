exampleObj = {
    color: 'green',
    smashes: true,
    name: 'Hulk'
}




// function CheckColor() {
//     if (exampleObj.color == 'green') {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }


let cap = {
    color: 'blue',
    smashes: true,
    name: 'First Avenger',
}

iceBreaker(cap);

function iceBreaker(x) { //takes in property by using (x)
    if ('smashes' in x) {
        console.log('true');
    } else {
        console.log('false');
    }
}

//Tylers solution
exampleObj = {
    color: 'green',
    smashes: true,
    name: 'Hulk'
}
console.log(objChecker(exampleObj, 'pants'));

function objChecker(obj, key) {
    let objKeys = Object.keys(obj);
    return (objKeys.includes(key)) ? true : false;
}