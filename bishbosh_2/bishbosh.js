const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');


const bb = function()
{
    let Bish = document.getElementById('Bish').value;
    let Bosh = document.getElementById('Bosh').value;
    let MaxValue = document.getElementById('Maxtal').value;
    Bish = parseInt(Bish);
    Bosh = parseInt(Bosh);
    MaxValue = parseInt(MaxValue);

    if ((!Number.isInteger(Bish)) || (Bish < 1))               //alldeles för lång validering, men....
    {
        window.alert('Bish är inget possitivt heltal, försök igen');
        Break;
    }
    if ((!Number.isInteger(Bosh)) || (Bosh < 1))
    {
        window.alert('Bosh är inget possitivt heltal, försök igen');
        Break;
    }

    if ((!Number.isInteger(MaxValue)) || (MaxValue < 1))
    {
        window.alert('Maxtal är inget possitivt heltal, försök igen');
        Break;
    }

    if ((MaxValue < Bish) || (MaxValue < Bosh))
    {
        window.alert('Maxtal är mindre änBish eller Bosh, försök igen');
        Break;
    }

    
    for (let index = 1; index-1 < MaxValue; index++)
    {
        let outPut = '';
        if (index%Bish==0) outPut = 'Bish';
        if ((index%Bish==0)&&(index%Bosh==0)) outPut = outPut +'-'; 
        if (index%Bosh==0) outPut = outPut +'Bosh' ;
        if (outPut == '') outPut = index;
    console.log(outPut);

    let h5 = document.createElement('h5');
     h5.innerText = outPut;
     resultat.appendChild(h5);
    }

 
};        


const CleanSlate = function()                                                //rensar gamla Bish-Bosh
{
    while (resultat.firstChild)
    {
        resultat.removeChild(resultat.firstChild);
    }
};

btn1.addEventListener('click', bb);
btn2.addEventListener('click',CleanSlate );







