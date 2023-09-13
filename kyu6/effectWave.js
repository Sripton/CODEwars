// Решение 1
// const effectWave = (str, num) => {
//     const array = [];
//     for(let i = 0; i < num; i++){
//         array.push(str); // [ 'elmar', 'elmar', 'elmar', 'elmar', 'elmar' ]
//     }
//     const rersult = [];
//     let k = 0;
//     for(let i = 0; i < array.length; i++){
//        for(let j = 0; j < array[i].length; j++){
//         if(j === k){
//             rersult.push(array[i][k].toUpperCase())
//         }else {
//             rersult.push(array[i][j]);
//         }
//        }
//        k++;
//     }
//    let string = '';
//   for(let i = 0; i < rersult.length; i++){
//     string += rersult[i];
//   }
//   let fin = '';
//   let z = num;
//   while(z <= string.length){
//     fin += string.slice(z-num,z) + ' ';
//     z+= num;
//   }
//   return fin
// }
// console.log(effectWave('elmar', 5)); // Elmar eLmar elMar elmAr elmaR 

// Решение 2
// const effectWave = (str, num) => {
//     const array = [];
//     for(let i = 0; i < num; i++){
//         array.push(str);
//     }
//     let string = '';
//     for(let i = 0; i < array.length; i++){
//         for(let j = 0; j < array[i].length; j++){
//             if(j === i){
//                 string += array[i][j].toUpperCase();
//             }else {
//                 string += array[i][j];
//             }
//         }
//         string += ' '
//     }
//     return string
// }
// console.log(effectWave('elmar', 5)); // Elmar eLmar elMar elmAr elmaR 


// Решение 3
// const effectWave = (str, num) => {
//    let string = '';
//    let k = 0;
//    const array = Array(num).fill(str);
//    for(let i = 0; i < array.length; i++){
//     string += array[i].slice(0,i) + array[i][k].toUpperCase() + array[i].slice(i+1) + ' ';
//     k++;
//    }
//    return string
// }
// console.log(effectWave('elmar', 5)); // Elmar eLmar elMar elmAr elmaR 


// Решение 4
// const helpFunction = (item, index) => {
//     return item.slice(0,index) + item[index].toUpperCase() + item.slice(index + 1);
// }
// const effectWave = (str, num) => {
//     let string = '';
//     const array = Array(num).fill(str);
//     array.forEach((elem, index) => {
//         string += helpFunction(elem, index) + ' ';
//     });
//     return string
// }
// console.log(effectWave('elmar', 5)); // Elmar eLmar elMar elmAr elmaR


// Решение 5
// const helpFunction = (item, index) => {
//     let str = '';
//     for(let i = 0; i < item.length; i++){
//         if(i === index){
//             str += item[index].toUpperCase();
//         }else {
//             str += item[i];
//         }
       
//     }
//     return str + ' ';
// }
// const effectWave = (str, num) => {
//     const array = [];
//     for(let i = 0; i < num; i++) {array.push(str)};
//     let string =  '';
//     for(let i = 0; i < array.length; i++){
//         string += helpFunction(array[i], i);
//     }
//     return string;
// }
// console.log(effectWave('elmar', 5)); // Elmar eLmar elMar elmAr elmaR 


// Решение 6
const effectWave = (str) => {
   const array = [];
   for(let i = 0; i < str.length; i++){
    let result = str.split('');
    result[i] = result[i].toUpperCase();
    array.push(result.join(''));
   }
   return array.join(' ')
}
console.log(effectWave('elmar'));  // Elmar eLmar elMar elmAr elmaR