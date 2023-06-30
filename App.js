
let navicon = document.querySelector(".navbar-menu-icon");
let navLinks = document.querySelector(".navbar-links");
let indexBtn = document.getElementById("index-btn");
let account_links_container = document.getElementById("account-link");
let historyLink = document.getElementById("history-link");
let solutionLink=document.getElementById("solution-link");
let tryItBtn=document.getElementById("try-it-btn")

let isloggedIn = JSON.parse(localStorage.getItem("Storage-User-name"));

if (isloggedIn == null) {
    isloggedIn = "";
}

if (isloggedIn != "") {
    let profileLOgo = document.createElement("li");
    profileLOgo.innerHTML = `<div class="dropdown">
<button class="dropbtn">${isloggedIn[0] + "K"}</button>
<div class="dropdown-content">
    <a id="my-profile" href="myprofile.html">My Profile</a>
    <a href="#" id="sign_out" onClick=loggedOut()>Sign out</a>
</div>
</div>`
navLinks.append(profileLOgo)
    account_links_container.style.display = "none";
  

}

function loggedOut(){
    localStorage.setItem("Storage-User-name",JSON.stringify(""));
    window.location.assign("index.html")
    localStorage.setItem("problems",JSON.stringify([]));

}

navicon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
})
window.addEventListener('resize', () => {
    if (window.innerWidth > 750) {
        navLinks.classList.remove('active')
    }
})

solutionLink.addEventListener('click',()=>{
    if(isloggedIn!=""){
        window.location.assign("Solve.html")
    }else{
        alert("login first")
    }
  
})
historyLink.addEventListener('click',()=>{
    if(isloggedIn!=""){
        window.location.assign("history.html")
    }else{
        alert("login first")
    }
})
tryItBtn.addEventListener('click',()=>{
    if(isloggedIn!=""){
        window.location.assign("Solve.html")
    }else{
        alert("login first")
    }
})

