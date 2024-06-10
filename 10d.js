const removeduplicate=(arr)=>{
  
    return [...new Set(arr)]
   

};
console.log(removeduplicate([1,2,3,2,3,2,34,5,53,32,22,1]));