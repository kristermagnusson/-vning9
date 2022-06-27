const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const li=document.querySelector('#listPlace');
const rad = document.querySelector('#Form');

 
const memorera = function()
{
    
    let nyRad = document.getElementById('nyRad').value;
    if (nyRad==''){alert('Tom Textruta, försök igen'); return;  }
    let lista = document.createElement('li');    
    lista.innerText = nyRad;     //innerText
    
    lista.addEventListener('click',(e)=>e.target.classList.toggle('changer'));
    lista.addEventListener('dblclick',(e) =>e.target.remove()  );      //tar bort en vara från listan
    listPlace.appendChild(lista);
    document.getElementById('Form').reset();
    
   
    
} 

const radera =function ()
{

   
let TaBortRad = document.getElementById('nyRad').value;
if (TaBortRad==''){alert('Tom Textruta, försök igen'); return;  }
let lis = document.querySelectorAll('li');
lis.forEach(item=>{if (item.innerText==TaBortRad) item.remove(); })   //Tar bort alla instanser av en vara
}

rad.addEventListener('keypress',(e) =>{if(e.keyCode == 13)     //Tar bort ev enter refresher
    {e.preventDefault();return false}}      )                  
btn1.addEventListener('click', memorera);
btn2.addEventListener('click', radera);

