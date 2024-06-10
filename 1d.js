if(1){
    let str = "Hello how are you hhhththhththth";

let words = str.split(" ");
console.log(words);
 words.reduce(
  (accumulator, currElem) =>{
    return ((currElem.length>accumulator.length?currElem:accumulator),"")
  }
 

  

);
console.log(words)

}