const headerLink = document.querySelectorAll(".header-link");
let headerIconimg = document.createElement("img");
headerIconimg.setAttribute("src", "img/header-icon.png");

headerLink.forEach((element) => {
  element.addEventListener("mouseover", function () {
    element.appendChild(headerIconimg);
  });
  element.addEventListener("mouseout", function () {
    element.removeChild(headerIconimg);
  });
});

const headerNav = document.querySelector(".header-hamburger");
const navBg = document.querySelector(".nav-bg");

headerNav.addEventListener("click", function () {
  navBg.classList.toggle("nav-bg_active");
});

const sectionHeroEl = document.querySelector(".swiper");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (!ent.isIntersecting) document.body.classList.add("sticky");

    if (ent.isIntersecting) document.body.classList.remove("sticky");
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-100px",
  }
);
obs.observe(sectionHeroEl);
