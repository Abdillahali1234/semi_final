//javascript for navigation bar effect on scroll
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

//javascript for responsive navigation sidebar menu
let menu = document.querySelector(".menu");
let menuBtn = document.querySelector(".bars");
let closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
  menu.classList.add("activeNav");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("activeNav");
});

// show cars in document
let typeBrand = localStorage.getItem("typeBrand");
let dataCArs = typeBrand;
// handle logo image dynamic
let LogoImg = document.querySelector(".section-1 img");
let h3 = document.querySelector(".section-1 h1");
if (typeBrand === "BMWCARS") {
  dataCArs = BMWCARS;
  LogoImg.setAttribute(
    "src",
    "https://m.atcdn.co.uk/ect/media/74deb1191aeb438eb9764aef4b52665a.jpg"
  );
  document.title = "BMW cars";
  h3.textContent = "BMW models";
} else if (typeBrand === "FORDCARS") {
  dataCArs = FORDCARS;
  LogoImg.setAttribute(
    "src",
    "https://m.atcdn.co.uk/ect/media/%7Bresize%7D/03156d35774a4e0bb86272a4ddf7dc8a.jpg"
  );
  h3.textContent = "FORD models";
   document.title = "FORD cars";
} 
else if (typeBrand === "MERCEDES-BENZ") {
  dataCArs = Mercedes;
  LogoImg.setAttribute(
    "src",
    "https://m.atcdn.co.uk/ect/media/%7Bresize%7D/1758ab59de774da2933aef4d5e8d15f1.jpg"
  );
  h3.textContent = "MERCEDES models";
  document.title = "MERCEDES cars";
}

else if (typeBrand === "Audi".toUpperCase()) {
  dataCArs = ElectricAudi;
  LogoImg.setAttribute(
    "src",
    "https://m.atcdn.co.uk/ect/media/%7Bresize%7D/226b3dbffe2b4155a69702dc9d547f4d.jpg"
  );
  h3.textContent = "Audi models";
  document.title = "Audi cars";
}

else if (typeBrand === "Nissan".toUpperCase()) {
  dataCArs = ElectricNissan;
  LogoImg.setAttribute(
    "src",
    "https://m.atcdn.co.uk/ect/media/%7Bresize%7D/6ea26bb667584442836971cab6e9a981.jpg"
  );
  h3.textContent = "Nissan  models";
  document.title = "Nissan cars";
} 

else if (typeBrand === "Peugeot".toUpperCase()) {
  dataCArs = ElectricPeugeot;
  LogoImg.setAttribute(
    "src",
    "https://m.atcdn.co.uk/ect/media/%7Bresize%7D/0dc587254f9e4acab78581d28cc06216.jpg"
  );
  h3.textContent = "Peugeot  models";
  document.title = "Peugeot cars";
}
// console.log(typeBrand);
// containerToCars

let dataNameToCarsTOSearch = [];

let containerToCars = document.querySelector(".containerToCars");
dataCArs.forEach((element, index) => {
  element.id = index + 1;
  let nameArr = element.carName.split(" ");
  let remindName = nameArr.splice(1).join(" ");
  dataNameToCarsTOSearch.push(remindName);
  let carCart = ` <div class="carBox" id="data-${index + 1}">
          <div class="imgBox">
            <img src="${element.carMainImg}" alt="" />
          </div >
          <div class="content">
            <div class="name">
              <h3>${nameArr[0]} <br /><span>${remindName}</span></h3>
              <span class="shape">${element.shape}</span>
            </div>
            <div class="details">
              <div>
                <svg
                  fill="hsla(0,0%,0%,1)"
                  height="82px"
                  width="82px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 240.24 240.24"
                  xml:space="preserve">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke="#CCCCCC"
                    stroke-width="1.9218800000000003"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M211.744,6.089C208.081,2.163,203.03,0,197.52,0h-15.143c-11.16,0-21.811,8.942-23.74,19.934l-0.955,5.436 c-0.96,5.47,0.332,10.651,3.639,14.589c3.307,3.938,8.186,6.106,13.74,6.106h19.561c2.714,0,5.339-0.542,7.778-1.504l-2.079,17.761 c-2.001-0.841-4.198-1.289-6.507-1.289h-22.318c-9.561,0-18.952,7.609-20.936,16.961l-19.732,93.027l-93.099-6.69 c-5.031-0.36-9.231,1.345-11.835,4.693c-2.439,3.136-3.152,7.343-2.009,11.847l10.824,42.618 c2.345,9.233,12.004,16.746,21.53,16.746h78.049h1.191h39.729c9.653,0,18.336-7.811,19.354-17.411l15.272-143.981 c0.087-0.823,0.097-1.634,0.069-2.437l5.227-44.648c0.738-1.923,1.207-3.967,1.354-6.087l0.346-4.97 C217.214,15.205,215.407,10.016,211.744,6.089z"></path>
                  </g>
                </svg>
                <span>${element.seat}</span>
              </div>
              <div>
                <i class="fa-solid fa-gas-pump"></i>
                <span>${element.power}</span>
              </div>
            </div>
            <div class="price">
              <span>new from ${element.price}</span>
            </div>
          </div>
        </div>  
    `;
  containerToCars.innerHTML += `${carCart}`;
});

// set modal type

let modal = document.getElementById("modal");

dataNameToCarsTOSearch.forEach((ele) => {
  let options = `<option value="${ele}">${ele}</option>`;
  modal.innerHTML += options;
});

let btnSubmit = document.querySelector("#btnSubmit");

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("clicked");
  let containerToModelValue = document
    .querySelector("#modal")
    .value.toUpperCase();
  console.log(containerToModelValue);
  dataNameToCarsTOSearch.forEach((ele) => {
    if (containerToModelValue === ele.toUpperCase()) {
      let carBox = dataCArs.find((ele) => {
        if (ele.carName.toLocaleUpperCase().includes(containerToModelValue)) {
          return ele;
        }
      });
      dataCArs.forEach((element2) => {
        if (element2.carName !== carBox.carName) {
          let carRemove = document.querySelector(`#data-${element2.id}`);
          carRemove.style.display = "none";
        }
      });
    }
  });
});

let clearBtn = document.querySelector(".clearBtn");

clearBtn.addEventListener("click", () => {
  window.location.reload();
});


// handle filter

let filterIcon = document.querySelector(".filterIcon");
let filter = document.querySelector(".filter");
let xmarkIcon = document.querySelector(".xmarkIcon");
filterIcon.addEventListener("click",()=>{
  filter.style.cssText = `
    top: 63px;
  `
  xmarkIcon.classList.add("active")

});
 xmarkIcon.addEventListener("click",()=>{
    filter.style.cssText = `
    top: -100%
  `;
    xmarkIcon.classList.remove("active");
 })