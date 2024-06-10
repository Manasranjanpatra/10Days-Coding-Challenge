let str=" apa";
 let rsrt=str.split("").reverse().join('').trim();
 console.log(rsrt);
 if(str.trim()==rsrt){
    console.log("Pallindrome");
 }
 else{
    console.log("not pallindrome");
 }
