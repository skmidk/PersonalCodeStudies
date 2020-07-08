function solution(number){
let numbers = {
  'M': 1000,
  'CM': 900,
  'D': 500,
  'CD': 400,
  'C': 100,
  'XC': 90,
  'L': 50,
  'XL': 40,
  'X': 10,
  'IX': 9,
  'VIII': 8,
  'VII': 7,
  'VI': 6,
  'V': 5,
  'IV': 4,
  'III': 3,
  'II': 2,
  'I': 1
}
}














// function romanize (num) {
// 	if (!+num)
// 		return false;
// 	var	digits = String(+num).split(""),
// 		key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
// 		       "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
// 		       "","I","II","III","IV","V","VI","VII","VIII","IX"],
// 		roman = "",
// 		i = 3;
// 	while (i--)
// 		roman = (key[+digits.pop() + (i * 10)] || "") + roman;
// 	return Array(+digits.join("") + 1).join("M") + roman;
// }
//
// console.log(romanize(393))
