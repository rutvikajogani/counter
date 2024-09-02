const desc = document.getElementsByClassName("desc")[0];
const reset = document.getElementsByClassName("reset")[0];
const inc = document.getElementsByClassName("inc")[0];


const h1=document.getElementById("count")
let count=0;
function decfn(){
   if(count>=1)
   count--;
   h1.innerText=count
   
  
// console.log(count)
}
function resetfn(){
    count=0;
    h1.innerText=count
 }
 function incfn(){
    count++;
    h1.innerText=count
 }




desc.addEventListener('click',decfn);
reset.addEventListener('click',resetfn);
inc.addEventListener('click',incfn);