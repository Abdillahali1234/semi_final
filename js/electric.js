function loading() {
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
//javascript for navigation bar effect on scroll
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

//javascript for responsive navigation sidebar menu
let menu = document.querySelector(".menu");
let menuBtn = document.querySelector(".bars");
let closeBtnMenu = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
  menu.classList.add("activeNav");
});

closeBtnMenu.addEventListener("click", () => {
  menu.classList.remove("activeNav");
});

let popularBrands = [
  {
    nameBrand: "NISSAN",
    imageBrand:
      "https://m.atcdn.co.uk/schemes/media/w150/nissan/6ea26bb667584442836971cab6e9a981.jpg",
  },
  {
    nameBrand: "PEUGEOT",
    imageBrand:
      "https://m.atcdn.co.uk/schemes/media/w150/peugeot/0dc587254f9e4acab78581d28cc06216.jpg",
  },
  {
    nameBrand: "AUDI",
    imageBrand:
      "https://m.atcdn.co.uk/schemes/media/w150/audi/226b3dbffe2b4155a69702dc9d547f4d.jpg",
  },
  {
    nameBrand: "TESLA",
    imageBrand:
      "https://m.atcdn.co.uk/schemes/media/w150/tesla/c5c9eec1e08c42ca8ad1169fda72d4a8.jpg",
  },
];

let containerTOBrandsE = document.querySelector(".containerTOBrandsE");
popularBrands.forEach((element) => {
  containerTOBrandsE.innerHTML += `<div class="boxBrand">
    <img src="${element.imageBrand}" alt="">
    <h3>${element.nameBrand}</h3>
  
  </div>`;
});

let boxBrands = document.querySelectorAll(".boxBrand");
console.log(boxBrands);
boxBrands.forEach((ele) => {
  ele.addEventListener("click", () => {
    localStorage.setItem("typeBrand", `${ele.children[1].textContent}`);
    setTimeout(() => {
      location.href = "brands.html";
    }, 1000);
  });
});
// handle Guide

let Guide = [
  {
    imgIcon: "../images/GuideImg/1.svg",
    tittle: "Charging at home",
    description:
      "From installing a home charge point to keeping your electric bill under control, here's our guide to charging at home.",
  },
  {
    imgIcon: "../images/GuideImg/2.svg",
    tittle: "Range",
    description:
      "Read more about the average electric car range and just how far an EV can go on a single charge.",
  },
  //3
  {
    imgIcon: "../images/GuideImg/3.svg",
    tittle: "Electric Explained",
    description:
      "Your ultimate guide to electric cars from what's under the bonnet to how they work and what it's like to drive one.",
  },
  {
    imgIcon: "../images/GuideImg/4.svg",
    tittle: "Charging on the go",
    description:
      "Discover where you can charge your car, how much it’ll cost and how you’ll actually struggle to run out of charge.",
  },
  {
    imgIcon: "../images/GuideImg/5.svg",
    tittle: "Understanding the jargon",
    description:
      "We explain all the electric acronyms and jargon in one place, so you can start shopping in confidence",
  },
  {
    imgIcon: "../images/GuideImg/6.svg",
    tittle: "Battery life",
    description:
      "Everything you need to know about electric car batteries. How they work, how to look after them and more.",
  },
];

let contentGuides = document.querySelector(".contentGuides");

Guide.forEach((element) => {
  let boxGuide = `          <div class="boxToGuide">
            <img src="${element.imgIcon}" alt="">
            <a href="#"><span>${element.tittle}</span></a>
            <p>${element.description}</p>
          </div> `;
  contentGuides.innerHTML += boxGuide;
});

// handle questions
let questions = [
  {
    question: "What is the best electric car?",
    response1: `That depends on what you want it for. There are some solid all-rounders on the market, while 
    others excel in specific areas
     – like the best range, high-performance, the smoothest drive or the best onboard tech. Take a look at our picks for the
     The choice of electric cars is still relatively limited compared to petrol and diesel, but more manufacturers are investing and innovating in this space. As such, we’re seeing a slew of announcements from household brands and we’re rapidly approaching the point where there’ll be an 
     electric car for everyone. The next few years look very exciting for electric cars,
      and you can stay up to date with the 
      `,
  },
  {
    question: "How long do electric cars take to charge?",
    response1: `On average, it takes between 30 minutes (with a rapid charger) and 12 hours (using a trickle charge or domestic supply) to fully charge a car, depending on the size of the battery and the power of the charging point. A smaller battery won’t take as long to fully charge but won’t hold as much charge, so it’ll need recharging more often. The key is to find a comfortable balance and one that suits your average journey length. Learn more about electric car batteries.

A charging point with higher power output (around 43kW) will take less time to charge a battery than a charging point with a lower power output (around 3kW). Just be aware using high-power chargers too often can sometimes damage the battery so, again, find a balance that works.

Working out how long you’ll take to charge is pretty simple: divide the kilowatt-hour (kWh) of your battery by the kilowatt (kW) power of the charging point. For example, a 60kWh battery plugged into a 7kW charger takes eight hours to fully charge from flat.

Charging that same 60kWh battery at a 40kW rapid charger, theoretically, would only take 90 minutes from flat – and much less for a top-up charge on the go.
      `,
  },
  {
    question: "How do I charge an electric car?",
    response1: `To charge an electric car, you access the electric grid via a charging point. You have the option of using public electric charging points or charging at home.
You’ll need to use a cable and a compatible connector. As different cars use different connectors, you’ll need to check nearby chargers support your car – though most now offer the standard Type 2 and ChaDeMo connectors.
Learn more about charging an electric car, and how you’d charge your car if you don’t have a driveway.
      `,
  },
  {
    question: "What does it cost to charge an electric car?",
    response1: `The cost of charging an electric car depends on where you charge it.

Charging an electric car from home, can be one of the cheapest ways to fuel any vehicle. Some providers offer electric-car tariffs, with specific rates for charging electric cars. You could be looking at as little as eight pence per mile.

The cost of charging using the public network varies depending on how much juice you need, which network is running the charging point, and the type of charging point you’re using.

Rapid charging points tend to be the most expensive - around £7 for a 30-minute charge. But they can charge your car in less time, so you do get convenience for your money.

There are different types of charger available at different price points, so you’ll be able to charge an electric car on most fuel budgets. Learn more about charging your car in public here. `,
  },
  {
    question: "How far can an electric car go?",
    response1: `Most modern electric cars can go well over 100 miles before they need recharging, and many can cover over 250 miles in one charge.
How far an electric car travels between charges is called the range. An electric car’s range can be affected by the car’s weight, battery health and other factors including variables like the weather. For instance, if it’s cold, dark and raining and you’re using your heater, lights and wipers this can drain the battery more quickly.
Older electric cars tend to have limited range. If you’re looking at a used electric car, make sure you check the original claimed range and the health of the battery. Older batteries might not hold their charge as well, so will need charging more often. This doesn’t mean used electric cars should be overlooked – they can make an affordable and practical entry point to the electric car market – you just need to be aware of any limitations and make sure a used electric car suits your lifestyle.
You can learn more about an electric car’s range here and find the electric cars with the best range here.`,
  },
  {
    question: "How much does it cost to tax an electric car?",
    response1: `Zero emission vehicles, including electric cars, are currently exempt from paying vehicle excise duty (road tax). You’ll still need to register your vehicle for tax (as you would any other car) but you won’t pay anything. You could also opt for an electric car salary sacrifice scheme, which gives you the option to buy an EV with monthly payment from your gross salary (income before tax) – learn more about electric car salary sacrifice schemes here.`,
  },
  {
    question: "How much are electric cars?",
    response1: `The average price range for a brand-new electric car in the UK is between £21,700 and £140,000+. Used electric cars can start from much less.
Just like petrol and diesel models a luxury electric car in the top-trim level costs a lot more than an entry-level model – and there are electric cars available for nearly every budget in between, so shop around and you’ll find one that suits.
There are also great finance deals available on electric cars, so you can budget and pay monthly. Here are the best electric car finance deals available today.
While the list price is higher (and can be off-putting) it’s worth remembering the total cost of owning an electric car can work out cheaper overall. Lower fuel costs, road tax/VED exemption and operating costs mean, over the span of a couple of years, electric vehicles can actually to cost less to run overall than petrol or diesels.`,
  },
];
let accordion = document.querySelector(".accordion");
console.log(accordion);

questions.forEach((ele) => {
  let contentAccordion = `<div class="accordion-content">
          <div class="header">
            <i class="fa-solid fa-plus"></i>
            <span class="title">${ele.question}</span>
          </div>
          <p class="description">
          ${ele.response1}
          </p>
        </div>
    
    `;
  accordion.innerHTML += contentAccordion;
});

// acordin
const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item, index) => {
  let header = item.querySelector(".header");
  header.addEventListener("click", () => {
    item.classList.toggle("open");

    let description = item.querySelector(".description");
    if (item.classList.contains("open")) {
      description.style.cssText = `
      height:fit-content;
      padding-top:20px;
      padding-bottom:20px;
      `;
      item.querySelector("i").classList.replace("fa-plus", "fa-minus");
    } else {
      description.style.cssText = `
      height: 0;
      padding-top:0;
      padding-bottom:0;
      `;
      item.querySelector("i").classList.replace("fa-minus", "fa-plus");
    }
    removeOpen(index); //calling the funtion and also passing the index number of the clicked header
  });
});

function removeOpen(index1) {
  accordionContent.forEach((item2, index2) => {
    if (index1 != index2) {
      item2.classList.remove("open");

      let des = item2.querySelector(".description");
      des.style.height = "0px";
      item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
    }
  });
}
