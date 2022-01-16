
const zinojums=document.querySelector('.zinojums');
const guess=document.querySelector('input');
const poga=document.querySelector('.poga');
const no=document.querySelector('.no')
let play=false;
let jaunsVards="";
let randomVards="";
let rezultats=0;
let i=0;
let laiks=30;
let d1=0;
let n;
let spele;
//vārdu massīvs
let vardi=['ZIEMA','SALAVECIS','ZIEMASSVĒTKI','EGLE','DĀVANAS','PIPARKŪKAS','ZVAIGZNE','LAMPIŅAS','SNIEGAVĪRS','RAGAVIŅAS'];
let l=vardi.length;

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

//kad poga piespiesta, sākas spēle
poga.addEventListener('click',
var timeLeft = 60;
var elem = document.getElementById('some_div');
var timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == -1) {
      clearTimeout(timerId);
      doSomething();
    } else {
      elem.innerHTML = timeLeft + ' s';
      timeLeft--;
    }
    laiks.innerHTML="Laiks:"+timeLeft;}



function(){
    if(!play & i<l){
        no.innerHTML=`${i+1}/10`
        play=true;
        //poga pamainās uz "Minēt"
        poga.innerHTML="Minēt";
        guess.classList.toggle('hidden');
        //izveidot vārdu
        jaunsVards=vardi[i];
        randomVards=scrambleWord(jaunsVards.split("")).join("");
        zinojums.innerHTML = ` ${randomVards}`;

    }
    else if(i == l){
        zinojums.innerHTML=`Rezultāts:${rezultats}`
        poga.innerHTML="Spēlēt vēlreiz";
        
        guess.value="";
        play=false;
        rezultats=0;
        i=0;
    }
    else{
        let tempWord=guess.value;
        if(jaunsVards === tempWord){
            play=false;
            rezultats=rezultats+10;
            zinojums.innerHTML=`Pareizi!Tev ir ${rezultats} punkti`
            poga.innerHTML="Nākošais vārds";
            guess.classList.toggle('hidden');
            guess.value="";
            i++;
        }
        else{
            zinojums.innerHTML=`Tu pazaudēji 5 punktus! Pamēģini vēlreiz: ${randomVards}`;
            rezultats=rezultats-5;
    
        }
        punkti.innerHTML=`Punkti: ${rezultats}`;
         
    }
    
})
