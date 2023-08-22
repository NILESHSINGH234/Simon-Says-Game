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
function gameFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function(){
btn.classList.remove("flash");
    },1000)
}
function userFlash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function(){
btn.classList.remove("userflash");
    },1000)
}
function levelUp()
{
userSeq=[];
    level++;
    h2.innerText=`Level is ${level}`;
    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);

    gameFlash(randbtn);

}