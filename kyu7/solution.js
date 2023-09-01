// Решение 1
// const solution = (number) => {
//     if(number < 0){
//         return 0;
//     }
//     let sum = 0;
//     for(let i = 0; i <= number; i++){
//        if(i % 3 === 0){
//         sum += i;
//        }
//        if(i % 5 === 0){
//         sum += i;
//        }
//     }
//     return sum  
// }
// console.log(solution(10)); // 33

// Решение 2
// const solution = (number) => {
//     if(number < 0) {return 0}
//     let sum  = 0;
//     let i = 0;
//     while(i <= number){
//         if((i % 3 === 0) || (i % 5 === 0)){
//             sum += i;
//         }
//         i++;
//     }
//     return sum
// }
// console.log(solution(10)); // 33