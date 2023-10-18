let mainMenu = document.querySelector(".mainMenu");
let closeMenu = document.querySelector(".closeMenu");
let openMenu = document.querySelector(".openMenu");
let menu_items = document.querySelectorAll("nav .mainMenu li a");

closeMenu.addEventListener("click", close);
openMenu.addEventListener("click", show);

// close menu when you click on a menu item
menu_items.forEach((item) => {
  item.addEventListener("click", function () {
    close();
  });
});

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}
function close() {
  mainMenu.style.top = "-100%";
}


let data = JSON.parse(localStorage.getItem("data"));
// account data
let accountSectionData = document.querySelectorAll(".rightSection *");
let accountSection = document.querySelector(".rightSection");
if (localStorage.getItem("status") === "true") {
  accountSectionData.forEach((element) => {
    element.style.display = "none";
  });
  console.log(accountSection);
  // create element
  let div = document.createElement("div");
  let span = document.createElement("span");
  let icon = document.createElement("span");
  span.textContent = `${data.username}`;
  icon.className = `fa-regular fa-circle-user`;
  icon.style.cssText = `
    color: black;
    font-size: 22px;
  `;
  accountSection.appendChild(span);
  accountSection.appendChild(icon);
  accountSection.style.cssText = `
    display: flex;
    align-items: center;
    gap: 10px;
  `;
}

// counter
let span = document.querySelectorAll(".numberOfUser");
console.log(span[0]);
counter = [1000, 2000, 3000, 1500];
let spanValue = parseInt(span[0].textContent);
setInterval(() => {
  counter.forEach((element, i) => {
    if (element >= spanValue) {
      spanValue++;
      span[i].textContent = `${spanValue}`;
    }
  });
}, 10);

// slider parts

let imgs = [
  {
    brandName: "BMW CARS",
    imgBrands: [
      "images/bmw/1.webp",
      "images/bmw/2.jpg",
      "images/bmw/3.jpg",
      "images/bmw/4.jpg",
      "images/bmw/5.jpg",
      "images/bmw/6.jpg",
    ],
  },
];

let imgs2 = [
  {
    brandName: "KIA CARS",
    imgBrands: [
      "https://images.unsplash.com/photo-1625037669075-e5472e080265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fEtJQSUyMENBUlN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1657638005555-3cd52afce9e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fEtJQSUyMENBUlN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1688893287874-ac7fbd686c24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fEtJQSUyMENBUlN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1688624054179-f2c19069aa84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fEtJQSUyMENBUlN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1651041940745-9f04e2f72a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fEtJQSUyMENBUlN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1659406189166-7c17fe5df12a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGtpYSUyMGNlcmF0b3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    ],
  },
];
let imgs3 = [
  {
    brandName: "HYUNDAI CARS",
    imgBrands: [
      "https://www.autonocion.com/wp-content/uploads/2023/02/Hyundai-Elantra-2024-48.jpg",
      "https://images.hgmsites.net/hug/2024-hyundai-elantra-preview_100880946_h.jpg",
      "https://cargtr.com/wp-content/uploads/2023/03/2024-elantra.jpg.webp",
      "https://media.ed.edmunds-media.com/hyundai/elantra/2022/oem/2022_hyundai_elantra_sedan_n_fq_oem_1_1600.jpg",
      "https://www.mikekellyhyundai.com/blogs/3332/wp-content/uploads/2021/03/elantra.png",
      "https://pictures.dealer.com/c/coconutcreekhyundai/0366/09dc1b5dd991f571a4e2da708ae0b8e2x.jpg?impolicy=downsize&w=568",
    ],
  },
];
let imgs4 = [
  {
    brandName: "FORD CARS",
    imgBrands: [
      "https://www.cnet.com/a/img/resize/66bfcd0063aa957ff51f41ee65ad596973e58045/hub/2022/04/18/41ef8b2c-5eaa-4208-abe3-37a492de43c5/ogi1-2022-ford-explorer-timberline-001.jpg?auto=webp&fit=crop&height=675&width=1200",
      "https://www.autopediame.com/userfiles/images/ford%20taurus%202022/__thumbs/taurus%203.jpg/taurus%203__800x450.jpg",
      "https://www.ford.com/cmslibs/content/dam/brand_ford/en_us/brand/performance/gt/gallery/video_thumbs/wind_tunnel.jpg",
      "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/2018-Ford-Ranger-Raptor-Ute-Blue-Press-Image-1001x565p.jpg",
      "https://www.arabsauto.com/wp-content/uploads/2021/11/2022-Ford-Fusion-ArabsAuto-1.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDhE-_IsIxJNdlITIPcRjUGgaj_FrhOX35Ig&usqp=CAU",
    ],
  },
];
let imgs5 = [
  {
    brandName: "MERCEDES-BENZ",
    imgBrands: [
      "https://www.mercedes-benz.com.eg/content/egypt/en/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569/simple_teaser_item_769283583.component.damq2.3278513079356.jpg/The-GLS.jpg",
      "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iHZO.zGR7qIg/v1/-1x-1.jpg",
      "https://www.stratstone.com/-/media/stratstone/mercedes-benz/new-cars/gle/mercedes-benz-gle-front-720x405px.ashx",
      "https://www.dubicars.com/images/e5a5b0/650x380/milan-motors-llc/005f7c94-d42d-4c0d-87e3-aa5ab2263b99.jpg",
      "https://klassen.eu/media/vehicles/medium/s07564hl6tf1sn6d6w7e8zga8bhethri.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsRJVWqCAicIYhq7FYOTuCrxrgVCAOvZWf5w&usqp=CAU",
    ],
  },
];
// main div
let boxBrands = document.querySelector(".swiper");

function createBrands(arr, containerName, numberOfBrand) {
  let brandNames = document.querySelectorAll(`.brandName`);
  let Container = document.querySelector(containerName);
  for (let i = 0; i < arr.length; i++) {
    brandNames[numberOfBrand - 1].textContent = `${arr[i].brandName}`;
    for (let x = 0; x < arr[i].imgBrands.length; x++) {
      Container.innerHTML += `<div class="swiper-slide s-${x + 1}">
            <a href="#" class="slider-box">
                <div class="slider-img">
                    <img src="${arr[i].imgBrands[x]}" />
                </div>
                <div class="slider-text">
                    <strong>${arr[i].brandName}</strong>
                </div>
            </a>
            </div>
`;
    }
  }
}

createBrands(imgs, ".brand1 .swiper .swiper-wrapper", 1);
createBrands(imgs2, ".brand2 .swiper .swiper-wrapper", 2);
createBrands(imgs3, ".brand3 .swiper .swiper-wrapper", 3);
createBrands(imgs4, ".brand4 .swiper .swiper-wrapper", 4);
createBrands(imgs5, ".brand5 .swiper .swiper-wrapper", 5);

let brandName = document.querySelectorAll(".brandName");
console.log(brandName);

brandName.forEach((ele) => {
  ele.addEventListener("click", () => {
    let typeBrand = ele.textContent.split(" ").join("");
    localStorage.setItem("typeBrand", typeBrand);
    setTimeout(() => {
      location.href = "brands.html";
    }, 1000);
  });
});

function loading() {
  let links = document.querySelectorAll(".mainMenu li a");
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


// handle tabs
let category = document.querySelectorAll(".category li");
let categoryContent = document.querySelectorAll(".categoryContent >div");

console.log(categoryContent);
category.forEach((element,index) => {
  element.addEventListener("click",()=>{
    category.forEach((ele,index2)=>{
        ele.classList.remove("activeTab");
        categoryContent[index2].classList.remove("activeDiv");
    })
    element.classList.add("activeTab");
    categoryContent[index].classList.add("activeDiv");
  
  })
});