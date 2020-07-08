function descendingOrder(n){
n = n.toString().split('').sort(function(a, b){return b - a}).join('')
let newN = parseInt(n, 10)
return newN
}

// n.toString makes the integar into a string
//.split then makes the string sorted into an array
//.sort then compares each number b - a means it will go from high to low. if reversed it ascends from low to high
//.join('') since it has no spaces will join the string with no spacers
//parseint(n,10) means it will turn the string into a number. the first half where n is wrote means
//what it is going to parse. 10 simply refers to numbers 0-9
