// Решение 1
// const diamond = (n) => {
    // if(n <= 0 || n % 2 === 0){
    //     return null;
    // }
//     const midle = parseInt(n+1)/2;
//     let str = '';
//     const arrayTab = []; // [ 2, 1, 0, 1, 2 ]
//     const arrayStars = []; // [ 1, 3, 5, 3, 1 ]
//     for(let i = 1; i <= n; i++){
//         arrayTab.push(Math.abs(midle-i)); 
//     }
//     for(let i = 1; i <= n; i++){
//         if(i <= midle){
//             arrayStars.push(2 * i - 1);
//         }else {
//             arrayStars.push(2 * (n-i)+1);
//         }
//     }  
//     for(let i = 0, j = 0; i < arrayTab.length, j < arrayStars.length; i++, j++){
//         str += ' '.repeat(arrayTab[i]) + '*'.repeat(arrayStars[j]) + '\n';
//     }
//     return str
// }
// console.log(diamond(5));
//    *
//   ***
//  *****
//   ***
//    *


// Решение 2
// const diamond = (n) => {
    // if(n <= 0 || n % 2 === 0){
    //     return null;
    // }
//     let i = 1;
//     let str = '';
//     while(i <= n){
//        if(i <= (n+1)/2){
//         str += ' '.repeat((n+1)/2 - i) + '*'.repeat(2 * i - 1) + '\n';
//        }else {
//         str += ' '.repeat(Math.abs((n+1)/2 - i)) + '*'.repeat(2 * (n-i) + 1) + '\n';
//        }
//        i++;
//     }
//     return str;
// }
// console.log(diamond(5));
//    *
//   ***
//  *****
//   ***
//    *


// Решение 3
// const diamond = (n) => {
    // if(n <= 0 || n % 2 === 0){
    //     return null;
    // }
//     const midle = (n+1)/2; // 3
//     let str = '';
//     for(let i = 1; i <= n; i++){
//         if(i <= 3){
//             str += ' '.repeat(midle-i) + '*'.repeat(2 * i -1) + '\n';
//         }else {
//             str += ' '.repeat(Math.abs(midle-i)) + '*'.repeat(2 * (n-i) + 1) + '\n'
//         }
//     }
//     return str;
// }
// console.log(diamond(5));

//    *
//   ***
//  *****
//   ***
//    *


// Решение 4
// const diamond = (n) => {
//     if(n <= 0 || n % 2 ===0){
//         return null;
//     }
//     let str = '';
//     for(let i = 0; i < n; i++){
//         const helper = Math.abs(n - 2 * i -1) /2;
//         str += ' '.repeat(helper);
//         if(i <= Math.floor(n/2)){
//             str += '*'.repeat(2 * i +1);
//         }else {
//             str += '*'.repeat(2 * (n-i)-1);
//         }
//         str += '\n'

//     }
//     return str;
// }

// console.log(diamond(5));

//    *
//   ***
//  *****
//   ***
//    *


// Решение 5
// const diamond = (n) => {
//     if(n <= 0 || n % 2 === null){
//         return null
//     }
//     const midle = Math.floor(n/2);
//     return Array.apply(null, {length: n})
//     .map((element, i) => {
//         const identification = Math.abs(i-midle);
//         const numberDiamondList = n - identification * 2;
//         return Array(identification+1).join(' ') + Array(numberDiamondList+1).join('*')
//     }).join('\n') + '\n'
    
// }
// console.log(diamond(5));
//    *
//   ***
//  *****
//   ***
//    *
