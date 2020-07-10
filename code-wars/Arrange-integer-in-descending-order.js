 function descendingOrder(n){
 n = n.toString().split('').sort(function(a, b){return b - a}).join('')
 let newN = Number(n, 10)
 return newN
 }
