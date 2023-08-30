// Решение 1
// const findNumber_5 = (start, end) => {
//     const arr = [];
//     for(let i = start; i <= end; i++){
//         arr.push(i);
//     }
//     return arr.filter((elem) => !/5/g.test(elem)).length;
// }
// console.log(findNumber_5(3,20)); -> 16
// console.log(findNumber_5(1,20)); -> 18
// console.log(findNumber_5(1,30)); -> 27


// Решение 2 
// const findNumber_5 = (start, end) => {
//     const arr = [];
//     let count  = 0;
//     for(let i = start; i <= end; i++){
//         arr.push(i.toString())
//     }
//      arr.forEach((elem) => /\b\d?5\b/g.test(elem) ? count++ : elem);
//      return arr.length - count;
// }
// console.log(findNumber_5(3,20)); -> 16
// console.log(findNumber_5(1,20)); -> 18
// console.log(findNumber_5(1,30)); -> 27


// Решение 3
// const findNumber_5 = (start, end) => {
//     let i = start;
//     let find_5;
//     let count  = 0;
//     let result = []
//     while(i  <= end){
//          find_5 = i.toString().split('').map((elem) => /5/g.test(elem) ? count++ : elem);
//          result.push(i);
//         i++;
//     }
//     return result.length - count;
// }
// console.log(findNumber_5(3,20)); // -> 16
// console.log(findNumber_5(1,20));  // -> 18
// console.log(findNumber_5(1,30)); // -> 27


// Решение 4
// const findNumber_5 = (start, end) => {
//     let count  = 0;
//    for(let i = start; i <= end; i++){
//     if(!/\b\d?5\b/.test(i)){
//         count++;
//     }
//    }
//    return count;
// }
// console.log(findNumber_5(3,20)); // -> 16
// console.log(findNumber_5(1,20));  // -> 18
// console.log(findNumber_5(1,30)); // -> 27



