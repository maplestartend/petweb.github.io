const banner1 = document.getElementById("banner1");
const banner2 = document.getElementById("banner2");
const banner3 = document.getElementById("banner3");
const qaTabAll = document.querySelectorAll(".i-qa-tab");
const qaTab = document.querySelector(".i-qa-tab");
const qaImg = document.getElementById("qaImg");
let iconImg = document.createElement("img");
iconImg.setAttribute("src", "img/yarn.svg");

window.onload = function () {
  qaTab.classList.add("i-qa-tab_active"), qaTab.appendChild(iconImg);
  resizeBanner();
};

window.addEventListener("resize", (e) => {
  // documentWidth();
  resizeBanner();
});
// function documentWidth() {
//   const doc = document.documentElement;
//   console.log(doc);
//   doc.style.setProperty("--doc-width", `${window.innerWidth}px`);
// }
// documentWidth();

//reset while resize

function resizeBanner() {
  const imgID = document.querySelector(".i-qa-tab_active").id;
  const callupImg = document.querySelector(".i-callup_img");
  const navImg1 = document.getElementById("navImg1");
  const navImg2 = document.getElementById("navImg2");

  if (window.innerWidth < 501) {
    banner1.setAttribute("src", "img/banner1-sm.png");
    banner2.setAttribute("src", "img/banner2-sm.png");
    banner3.setAttribute("src", "img/banner3-sm.png");
    qaImg.setAttribute("src", `img/${imgID}-sm.png`);
    callupImg.setAttribute("src", "img/callup-sm.png");
    navImg1.setAttribute("src", "img/Group2-sm.png");
    navImg2.setAttribute("src", "img/Group3-sm.png");
  } else {
    banner1.setAttribute("src", "img/banner1.png");
    banner2.setAttribute("src", "img/banner2.png");
    banner3.setAttribute("src", "img/banner3.png");
    qaImg.setAttribute("src", `img/${imgID}.png`);
    callupImg.setAttribute("src", "img/callup.png");
    navImg1.setAttribute("src", "img/Group2.png");
    navImg2.setAttribute("src", "img/Group3.png");
  }
}

qaTabAll.forEach((element) => {
  element.addEventListener("click", function () {
    qaTabAll.forEach((element) => {
      element.classList.remove("i-qa-tab_active");
      if (element.iconImg != null) {
        element.removeChild(iconImg);
      }
    });
    element.classList.add("i-qa-tab_active");
    element.appendChild(iconImg);
    window.innerWidth < 501
      ? qaImg.setAttribute("src", `img/${element.id}-sm.png`)
      : qaImg.setAttribute("src", `img/${element.id}.png`);
  });
});

const bannerSwiper = new Swiper("#bannerSwiper", {
  direction: "horizontal",
  loop: true,
  allowTouchMove: false,
  autoplay: {
    delay: 5000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  preloadImages: false,
});
