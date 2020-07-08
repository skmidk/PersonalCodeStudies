
function findOutlier(integers){
  let even = []
  let odd = []
  for( let i = 0; i < integers.length; i++){
    if(integers[i] % 2 === 0){
      even.push(integers[i])
    }else if (integers[i] % 1 === 0){
      odd.push(integers[i])
    }else if(integers[i] % -2 === 0){
      even.push(integers[i])
    }else {
      odd.push(integers[i])
    }
  }
}




// function findOutlier(integers){
//   let even = []
//   let odd = []
//   for( let i = 0; i < integers.length; i++){
//     if(integers[i] % 2 === 0){
//       even.push(integers[i])
//     }else if (integers[i] % 1 === 0 ){
//       odd.push(integers[i])
//       //console.log(odd)
//     }else if (integers[i] % -2 === 0){
//       even.push(integers[i])
//     }else {
//       odd.push(integers[i])
//     }
//   }
//   if(even.length < odd.length){
//     return Number(even)
//   }else{
//     return Number(odd)
//   }
// }

console.log(findOutlier([0, 1, 2]))
