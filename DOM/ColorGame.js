let btn=document.querySelector("button");
btn.addEventListener("click",generateColor)
function generateColor()
{
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color=`rgb(${red},${green},${blue})`
    let p=document.getElementById("demo");
    p.innerHTML=color;
    let circle=document.getElementsByClassName("color-circle")[0];
circle.style.backgroundColor=color;
    return color;

    
}


