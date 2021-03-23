
const card =  document.querySelector(".card")
setTimeout(()=>{

    fillPage();


},3000)

function fillPage(){


    card.innerHTML = ` 
    <div class="img-holder">
            <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"/>
            </div>
            <div class="content">
            <h4 >Lorem ipsum dolor sit amet</h4> 
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis</p>

            <div class="user-profile-flex">
            <div class="img-div"> <img src="https://randomuser.me/api/portraits/men/45.jpg"/></div> 
            <div>
                <h4>John Doe</h4>
                <p>Oct 8, 2021</p>
            </div> 
            </div> 

    </div> `



}