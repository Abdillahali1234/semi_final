// logic

let mainPage = document.querySelector(".mainPage");
console.log(mainPage);

products.forEach((element) => {
  let product = `${`<div class="product div-${element.id}"  data-id=${element.id}>
          <div class="boxImg">
            <img src="${element.imgCar[0]}" alt="" />
            <i class="fa-solid fa-heart" onclick="showInCart(${element.id})"></i>
          </div>
          <div class="productContent">
            <div class="details">
              <div class="name">
                <h5 onclick="sendToLocal(${element.id})">${element.namCar}</h5>
              </div>
              <div class="price">
                <span>$ ${element.priceCar}</span>
              </div>
            </div>
            <div class="Features">
              <ul>
                <li><span>Remote keyless entry</span></li>
                <li><span>Remote keyless entry</span></li>
                <li><span>Remote keyless entry</span></li>
                <li><span>Remote keyless entry</span></li>
                <li><span>Remote keyless entry</span></li>
                <li><span>Remote keyless entry</span></li>
              </ul>
            </div>
            <button class="btn" >Check Availability</button>
          </div>
        </div>
  `}`;
  mainPage.innerHTML += `${product}`;
});

function sendToLocal(ele) {
  console.log(ele);
  localStorage.setItem("idToSend", ele);
  setTimeout(() => {
    location.href = "details.html";
  }, 1000);
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let body = document.querySelector("body");
let shoppedCar = document.querySelector(".shoppedCar");
if (cart.length > 0) {
  cart.map((ele) => {
    showInCart(ele);
  });
}
console.log(shoppedCar);
openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

// logic t arr card
function addToCart(id) {
  if (userCheck()) {
    let item = products.find((ele) => {
      return ele.id == id;
    });
    // prevent add  element to cart twice
    let resultSearchInCart = cart.find((ele) => ele.id == id);
    if (resultSearchInCart === undefined) {
      item.quantity = 1;
      cart.push(item);
    } else {
      item.quantity++;
      console.log(item.quantity);
    }
    // add item in cart to add localStorage
  } else {
    console.log("log in please");
    location.href = "login.html";
  }
}

function showInCart(id) {
  addToCart(id);
  cart.forEach((element, index) => {
    shoppedCar.innerHTML += `<div class="item-${index}">
                     <div class="imgCar">
                      <img src="${element.imgCar[0]}" alt="" />
                    </div>
                    <div>
                      <div class="details">
                        <h3>${element.namCar}</h3>
                        <span>${element.priceCar}$</span>
                        <div class="quntaity"  data-id="${element.id}">
                          <i class="fa-solid fa-square-minus minus"></i>
                          <span class="containerQuntatity">${element.quantity}</span>
                          <i class="fa-solid fa-square-plus plus"></i>
                        </div>
                      </div>
                      <div class="features">
                        <ul class="listFeatures">
                          <li>Lorem, ipsum.</li>
                          <li>Lorem, ipsum.</li>
                          <li>Lorem, ipsum.</li>
                          <li>Lorem, ipsum.</li>
                          <li>Lorem, ipsum.</li>
                          <li>Lorem, ipsum.</li>
                        </ul>
                      </div>
                    </div>
 </div> `;

    let eleInCart = document.querySelectorAll(".shoppedCar >div");
    eleInCart.forEach((ele, index2) => {
      eleInCart.forEach((ele2, index1) => {
        if (ele.className === ele2.className && index1 > index2) {
          ele.remove();
        }
        console.log("removed");
      });
    });
  });
  let itemsInCardLength = document.querySelectorAll(".shoppedCar >div").length;
  let quantity = document.querySelector(".quantity");
  quantity.innerHTML = `${itemsInCardLength}`;
}

function userCheck() {
  let user = localStorage.getItem("data");
  if (user) {
    return true;
  } else {
    return false;
  }
}

// handle search

let submitSearch = document.querySelector(".submitSearch");

// products
let InputSearch = document.querySelector(".headerInput");
let productsDiv = document.querySelectorAll(".product");
submitSearch.addEventListener("click", () => {
  if (InputSearch.value !== "") {
    let carSearch = products.find((ele) => {
      return (
        ele.namCar == InputSearch.value ||
        ele.namCar.includes(InputSearch.value)
      );
    });
    if (carSearch) {
      productsDiv.forEach((ele) => {
        if (+carSearch.id !== +ele.getAttribute("data-id")) {
          ele.style.display = "none";
          // console.log(ele);
        }
      });
    }
  }
});


InputSearch.addEventListener("search", () => {
  location.reload()
});


// handle icons search in small screen

let iconISmall = document.querySelector(".iconISmall");
let midSection = document.querySelector(".midSection");
iconISmall.addEventListener("click",()=>{
  midSection.classList.add("activeSerach");
})