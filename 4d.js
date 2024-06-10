let EMptyobject=(obj)=>{
   return Object.keys(obj).length===0;
}
console.log(EMptyobject({key:null}));
console.log(EMptyobject({}));
console.log(EMptyobject({value:undefined}));