let firstname = document.querySelector("#firstname")
let lastname = document.querySelector("#lastname")
let password = document.querySelector("#password")
let loginBtn = document.querySelector("#sign_in")

let getfirstname = localStorage.getItem("firstname")
let getlastname = localStorage.getItem("lastname")
let getPassword = localStorage.getItem("password")

loginBtn.addEventListener("click" , function(e){
    e.preventDefault()
    if(firstname === " " ||lastname === " " || password === " "){
        alert("please fill data")
    }
    else if(getfirstname && getfirstname.trim() === firstname.value.trim() && getlastname && getlastname.trim() === lastname.value.trim() && getPassword && getPassword.trim() === password.value){
        setTimeout (() => {
            window.location = "index.html"
        }, 500)
    }
    else{
        alert("username or password is wrong, please enter correct data")
    }
})