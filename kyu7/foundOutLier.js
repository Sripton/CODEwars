// Решение 1 найти единственный элемент который либо четный либо не четный 
// const foundOutLier = (int) => {
//    const intOdd = [];
//    const intEven = [];
//    for(let i = 0; i < int.length; i++){
//     if(int[i] % 2 === 0){
//         intEven.push(int[i])
//     }else {
//         intOdd.push(int[i]);
//     }
//    }
//    return intEven.length === 1 ? +intEven.join('') : +intOdd.join('')
// }
// console.log(foundOutLier([1,3,5,7,8,9,11,13,17])); // 8
// console.log(foundOutLier([2,4,6,11,8,90,10,132,176])); // 11


// Решение 2 найти единственный элемент который либо четный либо не четный 
// const foundOutLier = (int) => {
//     const intOdd = [];
//     const intEven = [];
//     for(let i = 0; i < int.length; i++){
//         int[i] % 2 === 0 ? intEven.push(int[i]) : intOdd.push(int[i]);
//     }
//     return intEven.length === 1 ? intEven[0] : intOdd[0]; 
// } 
//  console.log(foundOutLier([1,3,5,7,8,9,11,13,17])); // 8
// console.log(foundOutLier([2,4,6,11,8,90,10,132,176])); // 11

// Решение 3 найти единственный элемент который либо четный либо не четный 
// const foundOutLier = (int) => {
//     let intEven = [];
//     let intOdd = [];
//    int.forEach(element => {
//     element % 2 === 0 ?  intEven.push(element) : intOdd.push(element);
//     });
//     return intEven.length === 1  ? intEven.pop() : intOdd.pop(); 
// }
// console.log(foundOutLier([1,3,5,7,8,9,11,13,17])); // 8
// console.log(foundOutLier([2,4,6,11,8,90,10,132,176]));  // 1

// Решение 4  
// const foundOutLier = (int) => {
//     const intEven = [];
//     const intOdd = [];
//     for(let i = 0; i < int.length; i++){
//         if(int[i] % 2 === 0)  {
//             intEven.push(int[i]);
//     }else {
//         intOdd.push(int[i]);
//     }
// }
// if(intOdd.length < intEven.length){
//     return Number(intOdd);
// }else {
//     return Number(intEven);
// }
// }
// console.log(foundOutLier([1,3,5,7,8,9,11,13,17])); // 8  
// console.log(foundOutLier([2,4,6,11,8,90,10,132,176])); // 11


// Решение 5
// const foundOutLier  = (int) => {
//     const eventInt = int.filter(elem => elem % 2 === 0);
//     const oddInt = int.filter(elem => elem % 2 !== 0);
//     return eventInt.length < oddInt.length ? eventInt.pop() : oddInt.pop();
// }
// console.log(foundOutLier([1,3,5,7,8,9,11,13,17]));  // 8 
// console.log(foundOutLier([2,4,6,11,8,90,10,132,176])); // 11

// Решение 6 
// const foundOutLier  = (int) => {
//     const first = Math.abs(int[0]) % 2;
//     const second = Math.abs(int[1]) % 2;
//     const thrid = Math.abs(int[2]) % 2;
//     const base = (first + second + thrid) >= 2 ? 1 : 0;
//     for(let i = 0; i < int.length; i++){
//         if(int[i] % 2 !== base){
//             return int[i];
//         }
//     }
//     }
// console.log(foundOutLier([1,3,5,7,8,9,11,13,17]));  // 8
// console.log(foundOutLier([2,4,6,11,8,90,10,132,176]));  // 11


// Анализ 
// const foundOutLier = (int) => {
//     const oddInt = int.filter(elem => elem & 1);
//     return oddInt;
// }
// console.log(foundOutLier([1,3,5,7,8,9,11,13,17]));
// // [
// //     1,  3,  5,  7,
// //     9, 11, 13, 17
// // ]
// console.log(foundOutLier([2,4,6,11,8,90,10,132,176])); 
//  // [ 11 ]

// const arr = [1, 3, 6, 5, 7, 9, 20, 11, 13, 17];
// console.log(arr.filter((elem) => elem & 1)); // [1, 3, 5, 7, 9, 11, 13, 17];
// console.log(arr.filter((elem) => !(elem & 1))); // [ 6, 20 ]


// Решение 7 
// const foundOutLier =  (int) => {
//     const oddInt = int.filter(elem => elem & 1);
//     const eventInt = int.filter(elem => !(elem &1));
//     return oddInt.length < eventInt.length ? oddInt.pop() : eventInt.pop();
// }
//  console.log(foundOutLier([1,3,5,7,8,9,11,13,17]));  // 8
//  console.log(foundOutLier([2,4,6,11,8,90,10,132,176]));  // 11


