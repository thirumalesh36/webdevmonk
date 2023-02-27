let moon = document.getElementById('moon');
let sun = document.getElementById('white');
let opens = document.getElementById('opens');
let closes = document.getElementById('closes');
let body = document.querySelector('main');
let nav = document.querySelector('nav');
let links = document.querySelector('ul');
let para = document.querySelectorAll('p');
let h1 = document.querySelectorAll('h1');
let h2 = document.querySelectorAll('h2');
let h3 = document.querySelectorAll('h3');
opens.onclick=function(){
      links.style.display='flex';
      opens.style.display='none';
      closes.style.display='flex';
 }
closes.onclick=function(){
      links.style.display='none';
      opens.style.display='flex';
      closes.style.display='none';
}
moon.onclick=function(){
     moon.style.display='none';
     body.style.background='white';
     body.style.color='black';
     sun.style.display='block';
 
}
sun.onclick=function(){
     moon.style.display='block';
     sun.style.display='none';
     para.style.color='black';
     body.style.background='white';
     body.style.color='black';
}

// top scrolling 
let up = document.getElementById('up');
up.addEventListener('click',()=>{
    window.scrollTo({
      top:0, 
      left:15,
      behavior:"smooth"
    })
 
})
 