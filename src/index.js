
// You should implement your task here.

module.exports = function towelSort (matrix) {

    let arrAll=[];
    if(matrix==undefined){
    return []
    }else{
      let count=0
      let arrAll=[];
        for (let i = 0; i < matrix.length; i++) {
          if(i%2==1){
                  
for (let r = matrix[i].length-1; r >= 0; r--) {

  arrAll[count]=matrix[i][r]
  count++
    
  }
  
     }  else{
        
      for (let j = 0; j < matrix[i].length; j++) {
      arrAll[count]=matrix[i][j]
      count++
      }
        }
      }
      
      return arrAll
        }
      
      
      
}
