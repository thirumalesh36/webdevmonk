let moon = document.getElementById('moon');
let sun = document.getElementById('white');
let opens = document.getElementById('opens');
let closes = document.getElementById('closes');
let body = document.body;
let nav = document.querySelector('nav');
let links = document.querySelector('ul');
let para = document.querySelector('p');
let h1 = document.querySelector('h1');
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
     body.style.background='black';
     sun.style.display='block';
     para.style.color='white';
     h1.style.color='white'
}
sun.onclick=function(){
     moon.style.display='block';
     body.style.background='white';
     sun.style.display='none';
     para.style.color='black';
     h1.style.color='black'
}
