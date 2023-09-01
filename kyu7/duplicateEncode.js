// Решение 1
// const duplicateEncode = (word) => {
//     let str = '';
//     let result = '';
//     for(let i = 0; i < word.length; i++){
//         const code = word.charCodeAt(i);
//         if(code >= 65 && code <= 90){
//             str += String.fromCharCode(code + 32);
//         }else {
//             str += word[i];
//         }
//     }
//     const obj = {};
//     for(let i = 0; i < str.length; i++){
//         obj[str[i]] = (obj[str[i]] || 0) + 1;
//     }
//     for(let i = 0; i < str.length; i++){
//         if(obj[str[i]] > 1){
//             result += ')'
//         }else {
//             result += '('
//         }
//     }
//     return result
// }
// console.log(duplicateEncode('Elmare')); // )(((()

// Решение 2
// const duplicateEncode = (word) => {
//     return word.toLowerCase()
//     .split('').map((elem, index, arr) => arr.indexOf(elem) !== arr.lastIndexOf(elem) ? ')' : '(').join('')
// }
// console.log(duplicateEncode('Elmare')); // )(((()

// Решение 3
// const duplicateEncode = (word) => {
//     const str = word.toLowerCase();
//     let result = ''
//     for(let i =  0; i < str.length; i++){
//         if(str.indexOf(str[i]) !== str.lastIndexOf(str[i])){
//             result += ')'
//         }else {
//             result += '('
//         }
//     }
//     return result
// }
// console.log(duplicateEncode('Elmare')); // )(((()

// Решение 4
const helpFunction = (char) => {
    return char.toLowerCase().split('')
    .reduce((acum, elem) => {
         acum[elem] = acum[elem] ? acum[elem]  + 1 : 1;
         return acum
    },{});
}
const duplicateEncode = (word) => {
    let result = '';
    return Object.keys(helpFunction());
}
console.log(duplicateEncode('Elmare')); 