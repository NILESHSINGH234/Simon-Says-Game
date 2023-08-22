let start=false;
let gameSeq=[];
let userSeq=[];
let level=0;
let btns=["red","green","yellow","purple"];
let h2=document.querySelector("h2");
document.addEventListener("keypress",function()
{
    if(start=false)
    {
        console.log("game is started");
        start=true;
    }
    levelUp();
})