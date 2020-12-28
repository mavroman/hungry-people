const buttonscroll = document.querySelector(".button-scroll");
const aboutRest = document.querySelector(".about-rest");
const menu = document.querySelectorAll(".menu-rest");
const menuSoupe = document.querySelector(".menu-rest_soupe");
const link = document.querySelectorAll(".nav-menu__item");
const linkSoupe = document.querySelector(".nav-menu__item_soupe");
const linkPizza = document.querySelector(".nav-menu__item_pizza");
const linkPasta = document.querySelector(".nav-menu__item_pasta");
const linkDesert = document.querySelector(".nav-menu__item_desert");
const linkWine = document.querySelector(".nav-menu__item_wine");
const linkBeer = document.querySelector(".nav-menu__item_beer");
const linkDrinks = document.querySelector(".nav-menu__item_drinks");

function scrollTo(elem) {
  window.scroll({
    left: 0,
    top: elem.offsetTop, // вычисляем сколько от этого элемента до верха страницы
    behavior: "smooth", // плавная прокрута или быстрая
  });
}

buttonscroll.addEventListener("click", () => {
  scrollTo(aboutRest);
});


linkSoupe.addEventListener("click", () => {
  menu.forEach((e) => {
    e.style.display = "none";
  });
  menuSoupe.style.display = "grid";
});

linkPizza.addEventListener("click", () => {
  menu.forEach((e) => {
    e.style.display = "none";
  });
  document.querySelector(".menu-rest_pizza").style.display = "grid";
});

linkPasta.addEventListener("click", () => {
    menu.forEach((e) => {
      e.style.display = "none";
    });
    document.querySelector(".menu-rest_pasta").style.display = "grid";
  });

  linkDesert.addEventListener("click", () => {
    menu.forEach((e) => {
      e.style.display = "none";
    });
    document.querySelector(".menu-rest_desert").style.display = "grid";
  });

  linkWine.addEventListener("click", () => {
    menu.forEach((e) => {
      e.style.display = "none";
    });
    document.querySelector(".menu-rest_wine").style.display = "grid";
  });

  linkBeer.addEventListener("click", () => {
    menu.forEach((e) => {
      e.style.display = "none";
    });
    document.querySelector(".menu-rest_beer").style.display = "grid";
  });

  linkDrinks.addEventListener("click", () => {
    menu.forEach((e) => {
      e.style.display = "none";
    });
    document.querySelector(".menu-rest_drinks").style.display = "grid";
  });