const mainDiv = document.querySelectorAll(".main-div")

const text = document.querySelectorAll("h1")


mainDiv.forEach(elm => elm.addEventListener("click",handleExpand))

function handleExpand(e){

    mainDiv.forEach(elm => elm.classList.remove("panel"));

    this.classList.add("panel");

    text.forEach( elm => {
       
        if(elm.classList.contains("active")){
         elm.classList.remove("active");
         elm.classList.add("hidden");
        }
     })

    setTimeout(()=>{

     
        if( this.children[0].classList.contains("hidden")){
         this.children[0].classList.remove("hidden")
         this.children[0].classList.add("active")
        }


    },1000)

   

   


}