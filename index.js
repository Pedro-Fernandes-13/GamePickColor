'use strict'




const boxColors = [...document.querySelectorAll('.color')];
const alpha = document.getElementById('alpha');
const pre = document.getElementsByTagName('pre')[0]
const attemptspre = document.getElementById('attempts')
const btnStart = document.getElementById('btnStart')
const game = document.getElementById('game');
const menu = document.getElementById('menu');


function ranDomColor(){
  let vetorColors = ['red','blue','green','grey','yellow','purple']
   //insert colors 
  for(let index=0; index<boxColors.length; index+=1){
    let numRanbom = Math.floor(Math.random()*vetorColors.length)
      boxColors[index].style.backgroundColor = vetorColors[numRanbom]
  }

  alpha.style.backgroundColor = vetorColors[Math.floor(Math.random()*vetorColors.length)]
}
setInterval(()=>{ranDomColor()},1000)


function points(){
  let spots =0;
  let attempts =3


 return boxColors.forEach((box)=>{
  box.addEventListener('click',(e)=>{
    if(e.target.style.backgroundColor == alpha.style.backgroundColor){
      spots +=1
      pre.innerHTML = spots
    }
    else{
      attempts -=1
      attemptspre.innerHTML = attempts
      if(attempts<1){
        alert('You Loser :(')
        spots -= spots
        pre.innerHTML = spots
        attempts =3
        attemptspre.innerHTML = attempts
        game.style.display = 'none'
        menu.style.display = 'flex'
      }
    }
  })
  })
}
points()

btnStart.addEventListener('click',(e)=>{
  game.style.display = 'block'
  menu.style.display = 'none'
})