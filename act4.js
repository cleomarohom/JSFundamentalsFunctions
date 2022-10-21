let returnSmaller = (arr, num) => {
    return arr.reduce((acc, curr)=>{ 
      if(curr < num){
        return acc.concat(curr)
      }else{
        return acc
      }
    }, []) 
  }
   
   
  console.log(returnSmaller([10, 27, 20, 6, 24, 66, 41, 12, 73], 18))