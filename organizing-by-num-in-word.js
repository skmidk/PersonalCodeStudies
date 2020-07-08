function order(words){
  words = words.split(' ')
  let newArr = []
  for(let i = 0; i < words.length; i++){
    for(let j = 0; j < words[i].length; j++){
     if(words[i].charAt(j) === 1, 2, 3, 4, 5, 6, 7, 8, 9 ){
       //newArr.indexOf(words[i]) = words[i].charAt(i)
       newArr.push(words[i])
     }else{
       newArr.push("")
  }
}
return newArr
}

console.log(order("4of Fo1r pe6ople whoop g3ood th5e the2 hello"))
