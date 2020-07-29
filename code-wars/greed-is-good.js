
 function score( dice ) {
   let points = 0
   var counts = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
  }
   for(let i = 0; i < dice.length; i++){
       counts[dice[i]] += 1
   }
  if(counts[6] / 3 >= 1){
    let newSix = counts[6] - counts[6]%3
    points +=  (newSix/3) * 600
  }
  if(counts[5] > 0){
    if(counts[5]%3 === 0){
      points +=  (counts[5]/3) * 500
    }else if(counts[5] / 3 >= 1){
      let newFive = counts[5] - counts[5]%3
      points +=  ((newFive/3) * 500) + ((counts[5]%3) * 50)
    }else{
      points += ((counts[5]%3) * 50)
    }
  }
  if(counts[4] / 3 >= 1){
    let newFour = counts[4] - counts[4]%3
    points +=  (newFour/3) * 400
  }
  if(counts[3] / 3 >= 1){
    let newThree = counts[3] - counts[3]%3
    points +=  (newThree/3) * 300
  }
  if(counts[2] / 3 >= 1){
    let newTwo = counts[2] - counts[2]%3
    points +=  (newTwo/3) * 200
  }
  if(counts[1] > 0){
    if(counts[1]%3 === 0){
      points +=  (counts[1]/3) * 1000
      }else if(counts[1] / 3 >= 1){
        let newOne = counts[1] - counts[1]%3
        points +=  ((newOne/3) * 1000) + ((counts[1]%3) *100)
      }else{
      points += ((counts[1]%3) *100)
    }
  }
  return points
 }

console.log(score([1, 1, 1, 1, 3]))
