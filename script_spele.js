
const message=document.querySelector('.message');
const guess=document.querySelector('input');
const poga=document.querySelector('.poga');
const no=document.querySelector('.no')
let play=false;
let newWord="";
let randomWord="";
let score=0;
let i=0;
//vārdu massīvs
let Words=['ZIEMA','SALAVECIS','ZIEMASSVETKI','EGLE','DĀVANAS','PIPARKŪKAS','ZVAIGZNE','LAMPIŅAS','SNIEGAVĪRS','RAGAVIŅAS'];
let l=Words.length;

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
        //when poga clicked change innerhtml to guess
        poga.innerHTML="Guess";
        //show hidden class
        guess.classList.toggle('hidden');
        //create words
        newWord=Words[i];
        randomWord=scrambleWord(newWord.split("")).join("");
        message.innerHTML = `Guess the word ${randomWord}`;
    }
    else if(i == l){
        message.innerHTML=`Rezultāts:${score}`
        poga.innerHTML="Spēlēt vēlreiz";
        guess.value="";
        play=false;
        score=0;
        i=0;
    }
    else{
        let tempWord=guess.value;
        if(newWord === tempWord){
            play=false;
            score=score+10;
            message.innerHTML=`Awesome!!! It is correct.`
            poga.innerHTML="Next";
            guess.classList.toggle('hidden');
            guess.value="";
            i++;
        }
        else{
            message.innerHTML=`Try Again ${randomWord}`;
            score=score-5;
        }
    }
})



