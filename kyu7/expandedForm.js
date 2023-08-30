// // Решение 1
// const num = 56577;
// // output -> 50000 6000 500 70 7
// const expandedForm = (item) => {
//    const numberLen = String(item).length; // 5
//    const newArray = [];
//    let str = '';
//    for(let i = 0; i <= numberLen-1; i++){
//     newArray.push(Math.pow(10, i)); // [ 1, 10, 100, 1000, 10000 ]
//    }
//    let j = 0;
//    for(let i = newArray.length-1; i >= 0; i--){
//     str += newArray[i] * Number(String(item)[j]) + ' ';
//     j++;
//    }
//    return str;
// }
// console.log(expandedForm(num)); // 50000 6000 500 70 7 
// 10 ** 0 -> 1 
// 10 ** 1 -> 10
// 10 ** 2 -> 100
// 10 ** 3 -> 1000
// 10 ** 4 -> 10000


// Анализ 
// let number = 123;
// let str = number.toString().padStart(4, '0');
// console.log(str);  // "0123"


// Решение 2
// const number = 56577;
// const expandedForm = (item) => {
//     const  len = "" + item; // 56577
//     let str = '';
//     const newArray = [];
//     for(let i = len.length-1; i>= 0; i--){
//        newArray.push(Math.pow(10, i));
//     }
//    for(let i = 0; i < newArray.length; i++){
//     str += +len[i] * newArray[i] + ' '
//    }
//    return str
// }
// console.log(expandedForm(number)); // 50000 6000 500 70 7 

// Решение 3
// const number = 56577;
// const expandedForm = (num) => {
//     const str = num.toString();
//     let string = '';
//     for(let i = 0; i < str.length-1; i++){
//         const muliPly = Math.pow(10, str.length-i-1); // 10000
//         string += +str[i] * muliPly + ' ';
//     }
//     return string + str.slice(-1);
// }
// console.log(expandedForm(number)); // 50000 6000 500 70 7

// Анализ 
// const number = 56577;
// const expandedForm = (num) => {
//     const str = String(num);
//     let string = '';
//     for(let i = 0; i < str.length-1; i++){
//         // i = 0 
//         const muliPly0 = Math.pow(10, str.length-i-1); // 10 ** len(5-0)-1  -> 10**4 -> 10000
//         // i = 1
//         const muliPly1 = Math.pow(10, str.length-i-1); // 10 ** len(5-1)-1 -> 10**3 -> 1000
//         // i = 2
//         const muliPly2 = Math.pow(10, str.length-i-1); // 10 ** len(5-2)-1 -> 10**2 -> 100
//         // i = 3
//         const muliPly3 = Math.pow(10, str.length-i-1); // 10 ** len(5-3)-1 -> 10**1 -> 10
//         // i = 4
//         const muliPly4 = Math.pow(10, str.length-i-1); // 10 ** len(5-4)-1 -> 10**0 -> 1
//         const el = +str[i];
//         string += el * muliPly + " "
//     }
//     return string + str.slice(-1);
// }
// console.log(expandedForm(number)); // 50000 6000 500 70 7

