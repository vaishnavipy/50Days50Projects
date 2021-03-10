const sounds =  document.querySelectorAll(".sounds")

sounds.forEach(elm => elm.addEventListener("click",playSound));

const audioElm = document.querySelectorAll("audio");



function playSound(e){
    
    audioElm.forEach(elm => { 
        elm.pause();
        elm.currentTime = 0;
    })

   let sound =  e.currentTarget.innerText;

   document.getElementById(sound).play();
}