function subirTela(){
    window.scrollTo({top: 0,left: 0, behavior: 'smooth'});


}

function decidirBotaoScroll(){
 
    if(window.scrollY === 0){
        document.querySelector('.up').style.display = 'none';
    } else {
        document.querySelector('.up').style.display ='block';
    }
}


//setInterval(decidirBotaoScroll, 1000);
window.addEventListener('scroll', decidirBotaoScroll);



//******************************SLIDER********************//
function nextOne(){
    document.getElementById("pointer-One").style.background="orange";
    document.getElementById("sliders").style.marginLeft ="0vw";

    document.getElementById("pointer-Dois").style.background="none";
    document.getElementById("pointer-Three").style.background="none";
    
}

function nextDois(){
    document.getElementById("pointer-Dois").style.background="orange";
    document.getElementById("sliders").style.marginLeft ="-100vw";

    document.getElementById("pointer-One").style.background="none";
    document.getElementById("pointer-Three").style.background="none";
    
}
function nextThree(){
    document.getElementById("pointer-Dois").style.background="none";
    document.getElementById("sliders").style.marginLeft ="-200vw";

    document.getElementById("pointer-One").style.background="none";
    document.getElementById("pointer-Three").style.background="orange";
    
}

//********************REPEAT SLIDE *********************************//



let automate=[nextOne(), nextDois, nextThree]


setInterval(function(){ 
  
   


    
}, 2000); 