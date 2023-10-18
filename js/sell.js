import {loading} from"./details.js";
loading();


let btnsToSell = document.querySelectorAll(".btn");


btnsToSell.forEach(btn => {
    btn.addEventListener("click", (e) => {
     localStorage.setItem("sellStatus", btn.dataset.need);
    });
});