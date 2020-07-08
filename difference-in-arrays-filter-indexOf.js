var first = [ 1, 2, 3, 4];
var second = [ 4, 5 ];

var difference = first.filter(x => second.indexOf(x) === -1);
console.log(difference)

//first.filter() is filtering the array first by the parameters inside filter
//the .filter will automatically test each array item by the parameter
// x=> second.indexOf(x) is just shorthand for funtion (x) { second.indexOf(x) === -1}
// second.indexOf(x) just replaces the x with each item in the array
// example being it first is checking for the index of 1
// so it looks like second.indexOf(1) then sees if the value is equal to -1 or not
// the index value in the array second for 1 is -1 (always is -1 if it doesnt exist)
// as such it will put 1 in the new array. However when it comes to 4 it changes.
// when it does second.indexOf(4) it sees in array second, the index of 4 is 0
// since it actually has a place in the second array. as such its not -1 and wont be included
//in newArray.
