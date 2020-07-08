 function validParentheses(parens){
   let openNum = 0;
   for( let i = 0; i < parens.length; i++){
     if ( parens.charAt(i) == "(" ) {
       openNum += 1;
     }else{
       openNum -= 1;
     }
     if ( openNum < 0 ){
       return false
     }
   }
   if (openNum === 0){
     return true
   }else {
     return false
  }
  }
