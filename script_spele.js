
let Vardi=["ZIEMASSVĒTKI"]
var izjauktsvards=["MSVZISĒKIASET"]
let vards;
let laiks=30;
let punkti=0;


function Limenis1() {
    dif = 1;
    document.getElementById('SaktSpeli').style.display='block';
    document.getElementById('Limenis').style.display='none';
}

function Limenis2() {
    dif = 2;
    document.getElementById('SaktSpeli').style.display='block';
    document.getElementById('Limenis').style.display='none';
}

function Limenis3() {
    dif = 3;
    document.getElementById('SaktSpeli').style.display='block';
    document.getElementById('Limenis').style.display='none';
}

var spelet=true
while (spelet){
    var randomNumber=Math.floor(Math.random()*Vardi.length);
    var randomWord=izjauktsvards[randomNumber];
    var userInput=promt("Vai tu vari atminēt vārdu?"+"\n\t\t"+ randomWord);
    console.log(user.Input);
    if(userInput==Vardi[randomNumber]){
        alert("Pareizi!")
    }else{
        alert("Sorry"+"\n\t\t"+Vardi[randomNumber]);
    }
}