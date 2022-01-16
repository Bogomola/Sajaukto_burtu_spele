
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
poga.addEventListener('click',function(){
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
            timeleft == 0;
        }
        else{
            zinojums.innerHTML=`Tu pazaudēji 5 punktus! Pamēģini vēlreiz: ${randomVards}`;
            rezultats=rezultats-5;
    
        }
        punkti.innerHTML=`Punkti: ${rezultats}`;
         
    }
    
})


        var elem = document.getElementById('spele').addEventListener("click", function(){
            var timeleft = 15;
         var downloadTimer = setInterval(function function1(){
            document.getElementById("countdown").innerHTML = timeleft + 
            "&nbsp"+"sekundes";
        
            timeleft -= 1;
            if(timeleft <= 0){
                clearInterval(downloadTimer);
                document.getElementById("countdown").innerHTML = "Laiks beidzas!";
              
                
                
            }
            }, 1000);
            

            
        })
        if (laiks=== 0 && rezultats>0){
            
            let speletajs=prompt("Tu ieguvi "+rezultats+" punktus! Ja vēlies saglabāt rezultātu, ievadi savu vārdu!");
            if(speletajs!==null)rezultati(speletajs, rezultats);
            punkti=0;
            document.getElementById("punkti").innerHTML="punkti = 0";}