// function scramble(str1, str2) {
//   let counter = 0
//   str1 = str1.split("")
//   str2 = str2.split("")
//   str2.forEach((x) => {
//     if (str1.indexOf(x) !== -1) {
//       counter += 1
//       str1.splice(str1.indexOf(x), 1)
//     }
//   })
//   return counter === str2.length ? true : false
// }
//
// console.log(scramble('katas', 'steak'))


 function scramble(str1, str2) {
     str1 = str1.split("")
     str2 = str2.split("")
     let counter = 0
     let obj2 = {}
     let obj1 = {}
     for(let i = 0; i < str2.length; i++){
      if(obj2[str2[i]] === undefined){
        obj2[str2[i]] = 1
      }else{
        obj2[str2[i]] += 1
      }
    }
    for(let i = 0; i < str1.length; i++){
      if(obj1[str1[i]] === undefined){
        obj1[str1[i]] = 1
      }else{
        obj1[str1[i]] += 1
      }
    }
    for(const key in obj2){
      if(obj1[key] >= obj2[key]){
        counter += obj2[key]
      }
    }
     return counter === str2.length? true : false
 }
//
// 
//
// console.log(scramble('scriptjava','javascript'))
