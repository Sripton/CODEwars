// Решение 1
// const gimme = (triplet) => {
//     const tripletSort = [];
//     for(let i = 0; i < triplet.length; i++){
//         tripletSort.push(triplet[i]);
//     }
//    for(let i = 0; i < tripletSort.length-1; i++){
//     for(let j = 1; j < tripletSort.length; j++){
//         if(tripletSort[j] < tripletSort[i]){
//             let temp = tripletSort[i];
//             tripletSort[i] = tripletSort[j];
//             tripletSort[j] = temp;
//         }
//     }
//    }
//    let min = tripletSort[0];
//    let max = tripletSort[tripletSort.length-1];
//    for(let i = 0; i < triplet.length; i++){
//     if(triplet[i] !== min && triplet[i] !== max){
//         return i;
//     }
//    }
// }
// console.log(gimme([23,11,76])); // 0
// console.log(gimme([2,11,7])); // 2


// Решение 2
// const gimme  = (triplet) => {
//   const sortTriple = [...triplet];
//   sortTriple.sort((a,b) => a - b);
//   let min = sortTriple[0];
//   let max = sortTriple[sortTriple.length -1];
//  return triplet.map((elem, index) =>  {
//     if(elem !== min && elem !== max){
//         return triplet.indexOf(triplet[index]);
//     }
//  }).find(elem => elem !== undefined)
// }
// console.log(gimme([23,11,76])); // 0
// console.log(gimme([2,11,7])); // 2

// Решение 3

// const gimme  = (triplet) => {
//   const sortTriple = [...triplet];
//   sortTriple.sort((a,b) => a - b);
//   let min = sortTriple[0];
//   let max = sortTriple[sortTriple.length -1];
//  return triplet.map((elem, index) =>  {
//     if(elem !== min && elem !== max){
//         return index;
//     }
//  }).find(elem => elem !== undefined)
// }
// console.log(gimme([23,11,76])); // 0
// console.log(gimme([2,11,7])); // 2

// Решение 4
// const gimme = (triplet) => {
//     return triplet.indexOf(triplet.concat().sort((a,b) => a - b)[1]);
// }
// console.log(gimme([2,11,7])); // 2


// Решение 5
// const gimme = (triplet) => {
//     return triplet.indexOf([...triplet].sort((a,b) => a - b)[1])
// }
// console.log(gimme([23, 14, 34]));


// Решение 6
// const gimme = (triplet) => {
//     const result = triplet.map((elem) => {
//         if(elem !== Math.min(...triplet) && elem !== Math.max(...triplet)) {
//             return triplet.indexOf(elem);
//         }
//     })
//     return +result.filter((elem) => elem !== undefined).join('')
    
// }
// console.log(gimme([23, 14, 34]));