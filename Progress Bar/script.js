

const nums = document.querySelectorAll(".num")
const prev = document.getElementById("prev")
const next = document.getElementById("next")

let activeNum = document.querySelectorAll(".active-num")
let lastElement = activeNum.length-1

next.addEventListener("click",goNext);
prev.addEventListener("click",goPrev)

function goNext(){
   
   if(activeNum[lastElement].nextElementSibling){
      // activeNum.classList.remove("active-num")

       let id = activeNum[lastElement].nextElementSibling.className[0];

       activeNum[lastElement].nextElementSibling.classList.add("active-line")
        document.getElementById(id).classList.add("active-num")
   }
   
  
    activeNum = document.querySelectorAll(".active-num")
    lastElement = activeNum.length-1

    if(!activeNum[lastElement].nextElementSibling){
        next.setAttribute("disabled",true)
        prev.removeAttribute("disabled")
    }

}

function goPrev(){


    if(activeNum[lastElement].previousElementSibling){

        activeNum[lastElement].classList.remove("active-num")
        activeNum[lastElement].previousElementSibling.classList.remove("active-line")

    }

    activeNum = document.querySelectorAll(".active-num")
    lastElement = activeNum.length-1

    if(!activeNum[lastElement].previousElementSibling){
        prev.setAttribute("disabled",true)
        next.removeAttribute("disabled")
    }
    



}