// const binaryConvertation = (int) => {
//     if(int < 0){
//         return 0;
//     } 
//     const binaryInt = int.toString(2);
//     const newArray = [];
//     let i = 8;
//     while(i < 40){
//         let current = binaryInt.slice(i-8,i);
//         newArray.push(current);
//         i+=8;
//     }
//     return newArray.map((elem) => {
//         if(elem === ''){
//             return 0;
//         }else {
//             return parseInt(elem, 2);
//         }
//     }).join('.')
// }
// console.log(binaryConvertation(56557)); //220.237.0.0


// const binaryConvertation = (int) => {
//     const binaryInt = int.toString(2);
//     const newArray = [];
//     for(let i = 4; i < 40; i+=4){
//         let curent = binaryInt.slice(i-4,i);
//         newArray.push(curent);
//     }
//     const finalyResult = [];
//     for(let i = 0; i < newArray.length; i++){
//         if(/\w+/.test(newArray[i])){
//             finalyResult.push(newArray[i]);
//         }
//     }
//     let str = '';
//     for(let i = 0; i < finalyResult.length; i++){
//         str += parseInt(finalyResult[i], 2) + '.';
//     }
//     return str.replace(/\.$/g, '');
// }
// console.log(binaryConvertation(56557)); // 13.12.14.13