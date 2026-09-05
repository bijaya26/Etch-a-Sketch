const body= document.querySelector("body");
const div=document.createElement("div");
const button=document.querySelector("#button");
const input=document.querySelector("#input");
div.style.border="2px solid black";
div.style.display="flex";
div.style.width="50%"
div.style.aspectRatio="1";

div.style.flexDirection="row";
div.style.flexWrap="wrap";
body.appendChild(div);


function divCreate(number){
    
    for(let i=1; i<=number*number; i++){
        
        
        const insideDiv=document.createElement("div");
        insideDiv.style.width=(100/number)+"%";
        insideDiv.style.aspectRatio="1";
        insideDiv.style.border="1px solid black";
        insideDiv.style.boxSizing="border-box";
        div.appendChild(insideDiv);
        insideDiv.addEventListener("mouseenter",(event)=>{
            insideDiv.style.backgroundColor="orange";
        })
       
       excitingGridDlt(insideDiv);
    }
     
    
     
}


function getButtonClicked(){
    button.addEventListener("click",()=>{
        const number= input.value;
        divCreate(number)
        input.value="";})};

getButtonClicked();

function excitingGridDlt(indiv){
    button.addEventListener("click",()=>{
         div.removeChild(indiv);
    })
}
   