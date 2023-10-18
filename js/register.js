let name = document.querySelector("input[type=text]");
let email = document.querySelector("input[type=email]");
let password = document.querySelector("#password");
console.log(password);
let number = document.querySelector("input[type=number]");
let btn = document.querySelector("#btn");
let form = document.querySelector("form");
let container = document.querySelector(".notificationsContainer");

// rejex test
btn.addEventListener("click", (e) => {
  e.preventDefault();
  let resUser = /\w+/gi.test(name.value);
  let resEmail = /\w+@\w+\.(com|org|net)/gi.test(email.value);
  let resPhone = /\w{11}/gi.test(number.value);
  let respass = /[\w+]/gi.test(password.value);
  if (
    resUser === false ||
    resEmail === false ||
    resPhone === false ||
    respass === false
  ) {
    function createCustomAlert(txt) {
      // step 1
      let alertContainer = document.createElement("div");
      alertContainer.id = "alertCont";
      alertContainer.className = "alertBox";
      // step 2
      let btnClose = document.createElement("span");
      btnClose.className = "alertClose";
      btnClose.innerHTML = '<i class="fas fa-times"></i>';
      btnClose.onclick = function () {
        document.body.removeChild(document.getElementById("alertCont"));
      };

      alertContainer.appendChild(btnClose);
      // step 3
      let notificationSign = document.createElement("span");
      notificationSign.className = "notification-sign";
      notificationSign.innerHTML = '<i class="far fa-circle-xmark"></i>';

      alertContainer.appendChild(notificationSign);

      // step 4
      let alertTitle = document.createElement("h1");
      alertTitle.textContent = "friends";
      alertContainer.appendChild(alertTitle);
      // step 5
      let alertbody = document.createElement("p");
      alertbody.textContent = txt;

      alertContainer.appendChild(alertbody);

      // step 6
      document.body.appendChild(alertContainer);
      // step 7
      let autoAction = setTimeout(function () {
        document.body.removeChild(document.getElementById("alertCont"));
      }, 3000);

      alertContainer.onmouseover = function () {
        clearTimeout(autoAction);
      };
    }
    createCustomAlert("Error,invalid input");
  } else {
    let userData = {
      username: name.value,
      Email: email.value,
      passwd: password.value,
      phone: number.value,
    };
    console.log(userData);
    window.localStorage.setItem("data", JSON.stringify(userData));
    function createCustomAlert(txt) {
      // step 1
      let alertContainer = document.createElement("div");
      alertContainer.id = "alertCont";
      alertContainer.className = "alertBox";
      alertContainer.style.cssText = `
        border-left: 2px solid green;
      
      `;
      // step 2
      let btnClose = document.createElement("span");
      btnClose.className = "alertClose";
      btnClose.innerHTML = '<i class="fas fa-times"></i>';
      btnClose.onclick = function () {
        document.body.removeChild(document.getElementById("alertCont"));
      };

      alertContainer.appendChild(btnClose);
      // step 3
      let notificationSign = document.createElement("span");
      notificationSign.style.color="green"
      notificationSign.className = "notification-sign";
      notificationSign.innerHTML = '<i class="fa-regular fa-circle-check"></i>';

      alertContainer.appendChild(notificationSign);

      // step 4
      let alertTitle = document.createElement("h1");
      alertTitle.textContent = "friends";
      alertContainer.appendChild(alertTitle);
      // step 5
      let alertbody = document.createElement("p");
      alertbody.textContent = txt;

      alertContainer.appendChild(alertbody);

      // step 6
      document.body.appendChild(alertContainer);
      // step 7
      let autoAction = setTimeout(function () {
        document.body.removeChild(document.getElementById("alertCont"));
      }, 3000);

      alertContainer.onmouseover = function () {
        clearTimeout(autoAction);
      };
    }
    createCustomAlert("success");
    setTimeout(() => {
      location.href = "login.html";
    }, 2000);
  }
});
