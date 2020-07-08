function narcissistic(value) {
   let x = 0
   let nw = 0
   if(value > 9){
    x = value.toString().split('')
    for(let i = 0; i < x.length; i++){
      nw += Math.pow(Number(x[i]), x.length)
    }
    return nw === value ? true : false
    }else{
   return true
 }
 }
//
//
// console.log(narcissistic(371))
