
let Suser = document.getElementById("sign-user");
let Sname = document.getElementById("sign-name");
let Spass = document.getElementById("sign-pass");
let Smob = document.getElementById("sign-mob")
const signin_btn = document.getElementById("btn-Signin");
let luser = document.getElementById("login-user");
let lpass = document.getElementById("login-pass")
const signup_btn = document.getElementById("btn-signup");
let login_container = document.getElementById("l");
let sign_container = document.getElementById("s");

let login_arr = JSON.parse(localStorage.getItem("Math-user"));
if (login_arr == null) {
    login_arr = [];
}


signup_btn.addEventListener('click', () => {
    let obj = {
        name: Sname.value,
        username: Suser.value,
        password: Spass.value,
        mobile: Smob.value,
        product: []
    }
    login_arr.push(obj);

    localStorage.setItem("Math-user", JSON.stringify(login_arr));
    if (document.querySelector(".conf_msg2")) {
        document.querySelector(".conf_msg2").remove();
    }
    let para = document.createElement("p");
    para.className = "conf_msg2"
    para.innerText = "Account Created !"
    sign_container.append(para);
    setTimeout(() => {
        window.location.reload();
    }, 1500);
})


signin_btn.addEventListener('click', () => {
    checkAuthication(login_arr);
})

function checkAuthication(arr) {

    let is = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].username == luser.value && arr[i].password == lpass.value) {
            is = true;
            localStorage.setItem("Storage-User-name",JSON.stringify(arr[i].name));
            
        }
    }

    if (is) {
        if (document.querySelector(".conf_msg")) {
            document.querySelector(".conf_msg").remove();
        }
        let para = document.createElement("p");
        para.className = "conf_msg"
        para.innerText = "Login Sucessfull !"
        login_container.append(para);
       
        setTimeout(() => {
            window.location.assign("index.html")
        }, 1500);

    } else {
        if (document.querySelector(".conf_msg")) {
            document.querySelector(".conf_msg").remove();
        }
        let para = document.createElement("p");
        para.className = "conf_msg"
        para.innerText = "Incorrect Credentials !"
        login_container.append(para);

    }
}
