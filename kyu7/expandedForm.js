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

