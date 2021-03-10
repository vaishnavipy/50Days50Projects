const btn = document.querySelector("BUTTON");


btn.addEventListener("click",onClick);

onClick();

function onClick(){
    const joke_container = document.getElementById("joke")

    fetch("https://icanhazdadjoke.com/",{headers: {
        'Accept': 'application/json',
      }})
    .then(response => response.json())
    .then(data => joke_container.innerHTML = data.joke)

}