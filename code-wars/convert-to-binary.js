var countBits = function(n) {
  let x = (n).toString(2)
  let nw = x.split('')
  let final = 0
  for ( let i = 0; i < nw.length; i++){
    final += Number(nw[i])
  }
  return final
};
console.log(countBits(9))

// var countBits = function(n) {
//   let x = (n >>> 0).toString(2)
//   let nw = x.split('')
//   let final = 0
//   for(let i = 0; i < nw.length; i++){
//     final += Number(nw[i])
//   }
//   return final
// };
// console.log(countBits(10))
