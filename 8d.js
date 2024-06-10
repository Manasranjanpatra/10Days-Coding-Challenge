const rangeofaray=(a,b,arr=[])=>{
   if(a<=b){
    arr.push(a);
    return rangeofaray(a+1,b,arr);
}
return arr;


}
console.log(rangeofaray(1,10));