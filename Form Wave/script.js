const input = document.querySelectorAll("input");

input.forEach(elm => elm.addEventListener("focus",onFocus))

input.forEach(elm => elm.addEventListener("focusout",onFocusOut))

const formtext = document.querySelectorAll(".form-text");

const email = document.querySelectorAll(".email")


const pass = document.querySelectorAll(".password")

function onFocus(e){

  if(  e.currentTarget.id === "email" ){
        email.forEach((letter,i) => {
         
            setTimeout(()=>{
                letter.classList.add("top")
                letter.style.color = "#ADD8E7";
            },i*100)

          
          
        })
  }else if(e.currentTarget.id === "password"){
    pass.forEach((letter,i) => {
       
        setTimeout(()=>{
            letter.classList.add("top")
            letter.style.color = "#ADD8E7";
        },i*100)
       
       
    })

  }

}

function onFocusOut(e){

    email.forEach((letter,i) => {
     
      
        setTimeout(()=>{
            letter.classList.remove("top")
            letter.style.color = "white";
        },i*100)
    })

    pass.forEach((letter,i) => {
     
      
        setTimeout(()=>{
            letter.classList.remove("top")
            letter.style.color = "white";
        },i*100)
    })


   

}