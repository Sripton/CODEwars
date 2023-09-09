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
//   const array = [];
//   for(let i = 0; i < num; i++){
//     array[i] = str; // [ 'elmar', 'elmar', 'elmar', 'elmar', 'elmar' ]
//   }
//   let string = '';
//   let k =  0;
//   for(let i = 0; i < array.length; i++){
//    for(let j = 0; j < array[i].length; j++){
//     if(j === k){
//       string += array[i][k].toUpperCase();
//     }else {
//       string += array[i][j];
//     }
//    }
//    k++;
//   }
//   let finStr = '';
//   let z = num;
//   while(z <= string.length){
//     finStr += string.slice(z-num,z) + ' '
//     z+=num;
//   }
//   return finStr
// }
// console.log(effectWave('elmar', 5)); // Elmar eLmar elMar elmAr elmaR


