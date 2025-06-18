let para1=document.createElement("p");
para1.innerText="Hey I am red";
document.querySelector('body').append(para1);

para1.classList.add('red');

let heading=document.createElement("h3");
heading.innerText="I am blue h3!";
document.querySelector('body').append(heading);
heading.classList.add('blue');

// let div=document.createElement("div");
// let h1=document.createElement("h1");
// let para2=document.createElement("p");

// h1.innerText="I am in div tag";
// para2.innerText="Me too";

// div.append(h1);
// div.append(para2);
// div.classList.add("box");
// document.querySelector('body').append(div);

let input=document.createElement("input");
let btn=document.createElement("button");
btn.innerText="Click me";

btn.setAttribute("id","btn");
input.setAttribute("input","username");

let btn2=document.querySelector('#btn');
btn.classList.add("btn2");

let h1=document.createElement("h1");
h1.innerText="DOM Practice";
h1.classList.add("heading");
document.querySelector('body').append(h1);

let p=document.createElement("p");
p.innerHTML="Apna College <b>Delta</b> Practice";
document.querySelector('body').append(p);