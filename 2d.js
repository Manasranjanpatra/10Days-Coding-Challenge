let str=" helaaalo  hai aaaaare ypou  i aaaam fine ";
let srr=str.split("");
console.log(srr);
let a=0;
const find=(strr,char)=>{
    for(i=0;i<strr.length;i++){
        if(srr[i]==char){
            a=a+1;
    
        }
    }
    return a;

}
console.log(find(srr,"o"));
