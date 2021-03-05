const icon = document.getElementById("icon")

icon.addEventListener("click",toggleSearch);



function toggleSearch(){

    const search = document.getElementById("search");

        if(search.classList.contains("hide-input")){

            search.classList.remove("hide-input")
        }else{

            search.classList.add("hide-input")
        }

}