// SWIPER

const swiper = new Swiper(".hero__swiper-container", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 0,

  pagination: {
    el: ".hero__swiper-pagination",
    clickable: true,
  },
});

// BURGER

let burger = document.querySelector(".burger");
let menu = document.querySelector(".section-header__list");
let menuLinks = menu.querySelectorAll(".section-header__link");

burger.addEventListener(
  "click",

  function () {
    console.log("clicked");
    burger.classList.toggle("burger--active");

    menu.classList.toggle("section-header__list--active");

    document.body.classList.toggle("stop-scroll");
  }
);

menuLinks.forEach(function (el) {
  el.addEventListener("click", function () {
    burger.classList.remove("burger--active");

    menu.classList.remove("section-header__list--active");

    document.body.classList.remove("stop-scroll");
  });
});

// ACCORDION

$(".accordion").accordion({
  heightStyle: "content",
  active: false,
  collapsible: true,
});

// TABS

document.querySelectorAll(".tabs-nav__btn").forEach(function (tabsBtn) {
  tabsBtn.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll(".tabs-nav__btn").forEach(function (btn) {
      btn.classList.remove("tabs-nav__btn--active");
    });
    e.currentTarget.classList.add("tabs-nav__btn--active");
    document.querySelectorAll(".tabs-item").forEach(function (tabsBtn) {
      tabsBtn.classList.remove("tabs-item--active");
    });
    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("tabs-item--active");
  });
});

// SEARCH

const searchButton = document.querySelector(".section-header__search");
const searchBox = document.querySelector(".search-box1");
const cross = document.querySelector(".header-cross");

searchButton.addEventListener("click", function () {
  searchBox.classList.add("search-box--active");
});

cross.addEventListener("click", function () {
  searchBox.classList.remove("search-box--active");
});
