// Задача  Переместите первую букву каждого слова в конец, 
//а затем добавьте «ay» в конец слова. Оставьте знаки препинания нетронутыми.

// Example
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

//   Решение 1
// const pigIt = (item) => {
//   let str = ''
//   item.split(' ')
//   .forEach(element => {
//     if(/\W/.test(element)){
//       str += element
//     }else {
//       str += element.replace(/\b\w/g, '') + element[0]  + 'ay '
//     }
//   });
//   return str
// }
// console.log(pigIt('Pig latin is cool'));
// console.log(pigIt('Hello world !'));

// Решение 2
// const pigIt = (item =>  {
//   return item.split(' ')
//   .map((elem => {
//     if(/\W/.test(elem)){
//       return elem
//     }else {
//       return elem.slice(1) + elem[0] + 'ay '
//     }
//   })).join('')
// })
// console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay 
// console.log(pigIt('Hello world !')); // elloHay orldway !

// Решение 3
const pigIt = (item) =>  {
  let first = [];
  let second = [];
  let result = '';
  const itemMatch = item.match(/\S+/g);
  for(let i = 0; i < itemMatch.length; i++){
      first.push( itemMatch[i].slice(0,1));
      second.push(itemMatch[i].slice(1));
  }
  for(let i = 0; i < itemMatch.length; i++){
    if(/\W/.test(itemMatch[i])){
      result += itemMatch[i];
    }else {
      result += second[i] + first[i] + 'ay '
    }
  }
  return result
}
console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay 
console.log(pigIt('Hello world !')); // elloHay orldway !

