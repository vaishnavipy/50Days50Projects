const equal  = document.getElementById("equal");

const cross = document.getElementById("cross");

const rotating_div = document.querySelector(".rotating-div");

const all_menus = document.querySelectorAll(".menu p")
console.log(all_menus)

equal.addEventListener("click",rotateEqual);

cross.addEventListener("click",rotateBack);



function rotateEqual(){

    equal.classList.add("rotate-equal");
    cross.classList.remove("hide-cross")
    rotating_div.classList.add("rotate-div");
    all_menus.forEach(elm => {
        elm.classList.remove("hide-menu")
       
    })

}

function rotateBack(){
    equal.classList.remove("rotate-equal")
    cross.classList.add("hide-cross")
    rotating_div.classList.remove("rotate-div")
    all_menus.forEach(elm => {
        elm.classList.add("hide-menu")
       
    })

}

