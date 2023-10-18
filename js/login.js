let email = document.querySelector("#email");
let passwd = document.querySelector("#passwd");
let btn = document.querySelector("#btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let dataObject = localStorage.getItem("data");
  if (dataObject) {
    let data = JSON.parse(dataObject);
    if (data.Email === email.value && data.passwd === passwd.value) {
      setTimeout(() => {
        location.href = "home.html";
      }, 2000);
      let status=true;
      localStorage.setItem("status",status)
    } else {
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
      createCustomAlert("Error,password or email");
    }
  } else if (!dataObject) {
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
    createCustomAlert("User,not found");
  }
});
