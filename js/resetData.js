let email = document.querySelector("#email");

let phone = document.querySelector("#passwd");
let btn = document.querySelector("#btn");
console.log(email);
let realEmail = JSON.parse(localStorage.getItem("data")).Email;
let realPhone = JSON.parse(localStorage.getItem("data")).phone;
console.log(realEmail);
console.log(realPhone);

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (email.value === realEmail && phone.value === realPhone) {
    document.querySelector(".pageAll").classList.add("active");
    let resetBtn = document.querySelector("#resetBtn");
    resetBtn.addEventListener("click", (ev) => {
      ev.preventDefault();
      let passwordReset = document.querySelector("#passwdReset");
      let rePassword = /\w{8,}/gi;
      let result = rePassword.test(passwordReset);
      if (result) {
        let valuePass = passwordReset.value;
        let data=JSON.parse(localStorage.getItem("data"));
        data.passwd = valuePass;
        localStorage.setItem("data", JSON.stringify(data));
        setTimeout(() => {
            location.href="login.html"
        }, 2000);
        
      }
    });
  }
});
