


window.onload = ()=>{
    const counter = document.getElementById("counter");

    const image = document.getElementById("img")

    let count = 1;  let blur = 10; let opaqueness=0.5;
  let intervalId=  setInterval(()=>{

        count++; 

        blur -= 0.1;

        if(count <= 100){

            counter.innerHTML = count+"%"
            image.style.filter = `blur(${blur}px)`;
            if(count >= 50){
                opaqueness -= 0.01
                counter.style.opacity = `${opaqueness}`
                console.log(opaqueness)
            }

        }else{
            clearInterval(intervalId)
        }


    },50)





}