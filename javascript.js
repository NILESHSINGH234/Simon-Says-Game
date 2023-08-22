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
function checkAns(idx)
{
    if(userSeq[idx]===gameSeq[idx])
    {
        if(userSeq.length==gameSeq.length)
        {
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`game is over your score was <b> ${level}</b> press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
           setTimeout(function()  {
               document.querySelector("body").style.backgroundColor="white";
           },150)
        reset();
    }
}
function btnPress()
{
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btnn of allBtns)
{
    btnn.addEventListener("click",btnPress);
}
function reset()
{
    start=false;
    level=0;
    gameSeq=[];
    userSeq=[];s
}