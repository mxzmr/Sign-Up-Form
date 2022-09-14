const pass = document.getElementById("password")
const passCon = document.getElementById("password2")
const form = document.querySelector("form");
const btn = document.getElementById("btn")

function submitAlert(event) {
    alert("Thank you for joining our community")
  }

form.addEventListener("input", ()=>{
    if(pass.value === passCon.value){
        passCon.setCustomValidity("");
    }
    else  passCon.setCustomValidity("New password and confirm password don't match.");
})

form.addEventListener("submit", submitAlert)
