// var translate = function(word) {
//     var array = word.split('');
//     var vowels = ['a', 'e', 'i', 'o', 'u'];
//     var newWord = '';
//     for (var i = 0; i < vowels.length - 1; i++) {
//         for (var y = 0; y < word.length - 1; y++) {
//             if (word[y] === vowels[i]) {
//                 for (var x = y; x < word.length; x++) {
//                     newWord = newWord + word[x];
//                 }
//                 for (var n = 0; n < y; n++) {
//                     newWord = newWord + word[n];
//                 }
//                 return newWord + "ay";
//             }
//         }
//     }
// }
// let z = "Kerry"
// translate(z);
// console.log(translate(z));

// let phrase = 'whatever phrase we want to chage'.split(' ');

// for (let word in phrase) {
//     if (phrase[word].charAt(0) == 'a' || phrase[word].charAt(0) == 'e' || phrase[word].charAt(0) == 'i' || phrase[word].charAt(0) == 'o' || phrase[word].charAt(0) == 'u') {
//         console.log(phrase[word] + 'ay');
//     } else {
//         console.log(phrase[word].substr(1) + phrase[word].charAt(0) + 'ay');
//     }
// } //word represents each index number in the phrase array

let sampleString = '   i will marry amy marie baker    ';​
function pigLatin(str) {
    let wordsArray = str.trim().split(' ');
    wordsArray.forEach((word, index) => {
        let lettersArray = word.split('');
        while (lettersArray[0] !== 'a' && lettersArray[0] !== 'e' && lettersArray[0] !== 'i' && lettersArray[0] !== 'o' && lettersArray[0] !== 'u') {
            lettersArray.push(lettersArray[0]);
            lettersArray.shift();
        }
        lettersArray.push('ay');
        wordsArray[index] = lettersArray.join('');
    });
    return wordsArray.join(' ');
}​
console.log(pigLatin(sampleString));