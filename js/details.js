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

export function loading() {
  let links = document.querySelectorAll(".links a");
  let loader = document.querySelector(".loader");
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      loader.classList.add("loader--visible");
      setTimeout(() => {
        location.href = link.getAttribute("href");
      }, 1000);
    });
  });
}
loading();

// handel btn info
let openBtnInfo = document.querySelector(".btnInfo");
let closeBtn2 = document.querySelector(".closeBtn");
let offcanvasMenu = document.querySelector(".offcanvas-menu");
openBtnInfo.addEventListener("click", function (e) {
  e.preventDefault();
  offcanvasMenu.classList.add("activeInfo");
});

closeBtn2.addEventListener("click", function (e) {
  e.preventDefault();
  offcanvasMenu.classList.remove("activeInfo");
});

// handle slider
let popup = document.querySelector(".popup");
let closeBtn3 = document.querySelector(".close-btn3");
const imageName = document.querySelector(".image-name");
const largeImage = document.querySelector(".large-image");
const mainImg = document.querySelector(".mainImg");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
// get details to car
let idToCar = localStorage.getItem("idToSend");

let carDetails = products.find((ele) => {
  return ele.id == idToCar;
});
imageName.textContent = `${carDetails.namCar}`;

// handle car Name

let nameOfCar = document.querySelector(".nameOfCar");
nameOfCar.textContent=carDetails.namCar;
const images = [...carDetails.imgCar];
// handle main imge
mainImg.src = `${images[0]}`;
// handle popup to aperient
let btnTOShow = document.querySelector(".btnTOShow");
btnTOShow.addEventListener("click", () => {
  if (popup.classList.contains("disabled") === false) {
    popup.classList.add("activeSlider");
  } else {
    popup.classList.remove("disabled");
    popup.classList.add("activeSlider");
  }
});
// handle close btn

closeBtn3.addEventListener("click", () => {
  popup.classList.remove("activeSlider");
  popup.classList.add("disabled");
});

// handel aperient   images in slider
let index = 0;
largeImage.src = images[index];
// move images
// left move
rightArrow.addEventListener("click", () => {
  if (index < images.length - 1) {
    index++;
    largeImage.src = images[index];
    leftArrow.classList.remove("disabledArrow");
  }
  if (index === images.length - 1) {
    rightArrow.classList.add("disabledArrow");
  }
});
leftArrow.addEventListener("click", () => {
  if (index > 0) {
    index--;
    largeImage.src = images[index];
  }
  if (index < images.length - 1) {
    if (index === 0) {
      leftArrow.classList.add("disabledArrow");
    }
    rightArrow.classList.remove("disabledArrow");
  }
});
// btnBack

let btnBack = document.querySelector(".btnBack");
btnBack.addEventListener("click", (e) => {
  e.preventDefault();
  setTimeout(() => {
    location.href = btnBack.getAttribute("href");
  }, 1000);
});

// handle logic to pay;
// ".optionsTime > div label";

function moveActive(path) {
  let LabelsInOptionsTime = document.querySelectorAll(path);
  LabelsInOptionsTime.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      let parentDiv = ele.closest("div");
      LabelsInOptionsTime.forEach((ele2) => {
        let parentDiv2 = ele2.closest("div");
        parentDiv2.classList.remove("activeOptions");
      });
      parentDiv.classList.add("activeOptions");
    });
  });
}

moveActive(".optionsTime > div label");
moveActive(".payMony > div label");

let select = document.querySelector(`select[name="mileage"]`);

let kilometers = 6000;
select.addEventListener("mouseout", () => {
  kilometers = select.value;
  console.log(kilometers);
});

let optionsTime = document.querySelectorAll(".optionsTime div label");
let labelTimes = document.querySelector(`label[for="times"]`);

optionsTime.forEach((ele) => {
  ele.addEventListener("click", () => {
    let time = ele.textContent;
    labelTimes.innerHTML = `How long would you like the car for? (months)
     <span> ${time} months / ${+time / 12} years </span></label`;
  });
});
let orderDiv = document.querySelector(".orderDiv");
let payMony = document.querySelectorAll(".payMony div label");
let labelPayMony = document.querySelector(`label[for="payMony"]`);
payMony.forEach((ele) => {
  ele.addEventListener("click", () => {
    let time = ele.textContent;
    console.log(time);
    labelPayMony.innerHTML = `<label for="payMony"
              >How much would you like to pay upfront?
              <span> ${time} / £${(969.93 * +time * 1.1).toFixed(
      4
    )}</span></label>`;

    orderDiv.innerHTML = `
          <div>
            <h4>£${((969.93 * +time * 1.4) / time).toFixed(
              3
            )}<span>/month</span></h4>
            <h4>£${(969.93 * +time * 1.1).toFixed(3)}<span>upfron</span></h4>
          </div>
          <div>
            <button>Order Online</button>
            <i class="fa-solid fa-phone"></i>
          </div>
        `;
  });
});

// handle futures to cars

let futuresInCar = document.querySelectorAll(".futuresInCar div ul");

carDetails.features.forEach((ele, index) => {
  let futuresName = ele.slice(0, ele.indexOf(","));
  let futures = ele.slice(ele.indexOf(",")+1,);
  if (index >= carDetails.features.length / 2) {
    futuresInCar[0].innerHTML += `
              <li><span>${futuresName}:</span>
              <span>${futures}</span></li>
              `;
  } else {
    futuresInCar[1].innerHTML += `
              <li><span>${futuresName}:</span>
              <span>${futures}</span></li>`;
  }
});

// handle order

let btnOrder = document.querySelector(".btnOrder");
let layoutOrder = document.querySelector(".layout");
btnOrder.addEventListener("click",()=>{
layoutOrder.classList.add("activeLayout");

})