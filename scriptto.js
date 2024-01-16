
let input=document.querySelector('.writting-box');
let add=document.querySelector('.add-button');
let list=document.querySelector('ul');
//****************************** show data from storage*********************** s************************************************************************************************************************************************************************ 
const showData=()=>{
let data=localStorage.getItem("data");
if(data==null||JSON.parse(data).length==0){
list.innerHTML='No data in the list';
}
else{
list.innerHTML=`<li><span></span></li>`;
let arr=JSON.parse(data);
let d=new Date().toLocaleDateString();
Array.from(arr).forEach((i)=>{
const element=i; 
list.innerHTML=list.innerHTML+`<li>${element}<p>${d}</p><span onclick="delWork('${element}')">X</span></li>`;
})}}
// **************************storeData data into storage********************* ************************************************************************************************************************************************************************************
const storeData= ()=>{
let data=localStorage.getItem("data")
   if(data===null){
    let json=[];
 json.push(input.value)
localStorage.setItem("data",JSON.stringify(json));
   }
   else{
 let json = JSON.parse(localStorage.getItem("data"))
json.push(input.value)
localStorage.setItem("data",JSON.stringify(json));
   }
   input.value=''
showData();
    }   
// *********************************delete work***************************** *********************************************************************************************************************************************************************
const delWork = (element)=>{
let data=JSON.parse(localStorage.getItem("data"));
// console.log(data.indexOf(element));
i=data.indexOf(element);
data.splice(i,1)
localStorage.setItem("data", JSON.stringify(data))
showData();
} 
// *********************************if input box empty********************* ****************************************************************************************************************************************************************************
const timer=()=>{
input.value='please write something' ;
      input.style.background='red';
    setTimeout(()=>{
        input.value='' ;
input.style.background='' 
    },1000)     
}
// *********************************click add work button********************* ** *********************************************************************************************************************************************************************
add.addEventListener('click',()=>{(input.value==='')?timer():storeData()});
input.addEventListener('keyup',(e)=>{
    if(e.code==='Enter')
   (input.value==='')?timer():storeData(); 
});
showData()
