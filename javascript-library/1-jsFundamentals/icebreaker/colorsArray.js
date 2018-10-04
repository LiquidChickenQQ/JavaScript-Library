// let colorsArray = ['red', 'blue', 'green', 'yellow', 'violet'];
// let place = ['st', 'nd', 'rd', 'th', 'th'];


// for (i = 0; i = colorsArray.length; i++) {

//     console.log(place[0, 1, 2, 3, 4] + [i]); doesn't work for shit
// }

//Tyler's solution

let colorArr = ['red', 'blue', 'green', 'yellow', 'purple', 'white', 'black', 'orange']
let suffArr = ['st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th']

function colorPlacement(colors, suffixes) {
    colors.forEach((value, index) => { //colors is the color array,  forEach is a for loop, value is the color value, index is the color number
        console.log(`${index +1}${suffixes[index]} is ${colors[index]}`);
    });
}

colorPlacement(colorArr, suffArr);