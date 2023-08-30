// Решение 1
// const solution = (start, ending) => {
//     return start.toLowerCase().slice(-ending.length) === ending.toLowerCase();
// }
// console.log(solution('ScriPt', 'ipt')); // true
// console.log(solution('ScriPt', 'ift')); // false


// Решение 2
// const solution = (start, ending) => {
// const reg = new RegExp(ending.toLowerCase());
// let str = '';
// let len = start.length - ending.length;
// for(let i = len; i <= start.length-1; i++){
//     str += start[i].toLowerCase();
// }
// return reg.test(str) ? true : false
// }
// console.log(solution('ScriPt', 'pt')); // true
// console.log(solution('ScriPt', 'ft')); // false
// console.log(solution('ScriPt', 'ipt')); // true


// Решение 3
// const solution = (start, ending) => {
//     let stringStart = '';
//     let stringEnding = '';
//    for(let i = 0; i < start.length; i++){
//     const codeStart = start.charCodeAt(i);
//     if(codeStart >= 65  && codeStart <= 90){
//         stringStart += String.fromCharCode(codeStart + 32);
//     }else {
//         stringStart += start[i];
//     }
//    }
//    for(let i = 0; i < ending.length; i++){
//     const codeEnding = ending.charCodeAt(i);
//     if(codeEnding >= 65 && codeEnding <= 90){
//         stringEnding += String.fromCharCode(codeEnding + 32);
//     }else {
//         stringEnding += ending[i];
//     }
//    }
//    const startArray = [];
//    const endingArray = [];
//    for(let i = stringStart.length-1; i >= 0; i--){
//     startArray.push(stringStart[i]);
//    }
//    for(let i = stringEnding.length-1; i >= 0; i--){
//     endingArray.push(stringEnding[i]);
//    }
//    let resultStart = '';
//    let resultEnd = '';
//    for(let i = 0; i < endingArray.length; i++){
//     resultStart += startArray[i];
//     resultEnd += endingArray[i];
//    }
//    return new RegExp(resultStart).test(resultEnd)
// }
// console.log(solution('ScriPt', 'pt')); // true
// console.log(solution('ScriPt', 'fpt')); // false



// Решение 4
// const solution = (start, ending) => {
//     return start.toLowerCase().split('').reverse().join('') 
//     .search(ending.split('').reverse().join('')) === 0;
// }
// console.log(solution('ScriPt', 'pt')); // true
// console.log(solution('ScriPt', 'fpt')); // false

// Решение 4
//  const solution = (start, ending) => {
//     let len = start.length  - ending.length;
//     let str = '';
//     for(let i = len; i < start.length; i++){
//         str += start[i].toLowerCase();
//     }
//     return str.search(ending.toLowerCase()) === 0;
//  }
// console.log(solution('ScriPt', 'pt')); // true
// console.log(solution('ScriPt', 'fpt')); // false


// Решение 5
// const solution = (start, ending) => {
//     return start.slice(-ending.length).toLowerCase().search(ending.toLowerCase()) === 0;
// }
// console.log(solution('ScriPt', 'pt')); // true
// console.log(solution('ScriPt', 'fpt')); // false


// Решение 6
// const solution = (start, ending) => {
//     return start.slice(start.length - ending.length).toLowerCase() === ending.toLowerCase();
// }
// console.log(solution('ScriPt', 'pt')); // true
// console.log(solution('ScriPt', 'ipt')); // true





