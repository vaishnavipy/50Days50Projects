const left = document.getElementById("left");

const right = document.getElementById("right");

left.addEventListener("click",moveLeft);
right.addEventListener("click",moveRight);

const bgs = document.querySelector(".bgs");

const center = document.querySelector(".center");

const bg_arr = ['url("https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80")',
'url("https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80")',
'url("https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80")',
'url("https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80")',
'url("https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80")']

function moveLeft(){

    const currentBG = bgs.style.backgroundImage;

    const findIndex = bg_arr.findIndex(elm => elm === currentBG );

    if(findIndex === 0){
        bgs.style.backgroundImage = bg_arr[4];
        center.style.backgroundImage = bg_arr[4]

    }else{
        bgs.style.backgroundImage = bg_arr[findIndex-1];
        center.style.backgroundImage = bg_arr[findIndex-1];

    }


}
function moveRight(){

    const currentBG = bgs.style.backgroundImage;

    const findIndex = bg_arr.findIndex(elm => elm === currentBG );

    if(findIndex === 4){
        bgs.style.backgroundImage = bg_arr[0];
        center.style.backgroundImage = bg_arr[0]

    }else{
        bgs.style.backgroundImage = bg_arr[findIndex+1];
        center.style.backgroundImage = bg_arr[findIndex+1];

    }


}