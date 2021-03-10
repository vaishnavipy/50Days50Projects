const ps5 = document.getElementById("ps5");

const xbox = document.getElementById("xbox");

const container = document.querySelector(".container")

ps5.addEventListener("mouseenter",onHover);

xbox.addEventListener("mouseenter",onHover);

container.addEventListener("mouseleave",onHoverOut);

function onHover(e){

    if(e.currentTarget.id === "ps5"){

        e.currentTarget.classList.add("extra-width");
        if(xbox.classList.contains("extra-width")){
            xbox.classList.remove("extra-width")
        }

    }else if(e.currentTarget.id === "xbox"){
        e.currentTarget.classList.add("extra-width");
        if(ps5.classList.contains("extra-width")){
            ps5.classList.remove("extra-width")
        }
    }


}

function onHoverOut(){


    if(ps5.classList.contains("extra-width")){
        console.log("Remove")
        ps5.classList.remove("extra-width")
    }

    if(xbox.classList.contains("extra-width")){
        console.log("Remove")
        xbox.classList.remove("extra-width")
    }

}

