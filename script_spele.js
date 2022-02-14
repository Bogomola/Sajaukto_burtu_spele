
const zinojums=document.querySelector('.zinojums');
const guess=document.querySelector('input');
const poga=document.querySelector('.poga');
const poga2=document.querySelector('.poga2');
const no=document.querySelector('.no')
let play=false;
let jaunsVards="";
let randomVards="";
let rezultats=0;
let i=0;
var laiks=20;
let d1=0;
let n;
let spele;
let rindas= document.querySelector('.rindas');
//rindas.innerHTML="hello";



function timer(){ 
//var elem = document.getElementById('poga').addEventListener("click", function(){
   
 var downloadTimer = setInterval(function function1(){
    document.getElementById("countdown").innerHTML = laiks + 
    "&nbsp"+"sekundes";
    laiks -= 1;
    if(laiks <= 0 || i==l){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Laiks beidzas!";
        
        //zinojums.innerHTML=`Laiks beidzās! Tavs rezultāts ir:${rezultats} punkti`
        document.getElementById("poga2").hidden=true;
        document.getElementById("poga").hidden=false;
        i=0;
        play=false;
        punkti=0;
        document.getElementById("punkti").innerHTML="punkti  0";
        laiks=20;
    }
    }, 1000);
    
    

    
}

//vārdu massīvs
let vardi=['MĪLESTĪBA','LAIME','CIEŅA','DZĪVE', 'ZIEDS','ENĢELIS', 'MEDUS','ZIEDS','GALVA','SPĒKS','CILVĒKS','VĀRDS','DRAUDZĪBA', 'NAKTS','DIENA','SALAVECIS','ZIEMASSVĒTKI','EGLE','DĀVANAS','PIPARKŪKAS','ZVAIGZNE','LAMPIŅAS','SNIEGAVĪRS','RAGAVIŅAS'];


let l=vardi.length;
function izvele(){
        //izveidot vārdu
        let rand=Math.random()*vardi.length;
        rand=Math.floor(rand);
        jaunsVards=vardi[rand];
        randomVards=scrambleWord(jaunsVards.split("")).join("");
        zinojums.innerHTML = ` ${randomVards}`;}

//vārda izjaukšana
const scrambleWord =(arr) =>{
    for(let i=arr.length-1;i>0;i--){ 
        let j=Math.floor(Math.random()*(i+1));
        //swapping
        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }
    return arr;
}
document.getElementById("poga2").hidden=true;
poga.addEventListener("click", function(){
    document.getElementById("poga").hidden=true;
    document.getElementById("poga2").hidden=false;
    timer();
    no.innerHTML=`Vārds Nr.${i+1}`
    play=true;
    izvele();

})


//kad poga piespiesta, sākas spēle
poga2.addEventListener('click',function(){
    if(!play & i<l){
        no.innerHTML=`Vārds Nr. ${i+1}`
        play=true;
        izvele();
        
        
        //poga pamainās uz "Minēt"
        //poga.innerHTML="Minēt";
        document.getElementById("poga2").hidden=false;
        document.getElementById("poga").hidden=true;
        guess.classList.toggle('hidden');



    }
    else if(i == l){
        zinojums.innerHTML=`Rezultāts:${rezultats}`
        poga2.innerHTML="Spēlēt vēlreiz";
        document.getElementById("poga").hidden=false;
        document.getElementById("poga2").hidden=true;
        guess.value="";
        play=false;
        rezultats=0;
        i=0;
    }
    else{
        let tempWord=guess.value;
        let Word=tempWord.toUpperCase()
        if(jaunsVards === Word){
            play=false;
            timeLeft=0;
            rezultats=rezultats+10*(randomVards.length);
            zinojums.innerHTML=`Pareizi!Tu ieguvi ${10*(randomVards.length)} punktus!`
            poga2.innerHTML="Nākošais vārds";
            guess.classList.toggle('hidden');
            guess.value="";
            i++;
            
            
        }
        else{
            zinojums.innerHTML=`Tu pazaudēji 10 punktus! Pamēģini vēlreiz: ${randomVards}`;
            rezultats=rezultats-10;
    
        }
        
    }
    // punkti.innerHTML=`Punkti: ${rezultats}`;
    //     if (laiks<0 && punkti>0){
    //     let speletajs=prompt("Tu ieguvi "+rezultats+" punktus! Ja vēlies saglabāt rezultātu, ievadi savu vārdu!");
    //     if(speletajs!=="" && speletajs!==null) rezultati(speletajs, punkti);
    //           punkti=0;
    //     document.getElementById("punkti").innerHTML="punkti = 0";
    // }
})

