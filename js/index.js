const qaTabAll = document.querySelectorAll(".i-qa-tab");
const qaTab = document.querySelector(".i-qa-tab");
const qaImg = document.getElementById("qaImg");
let iconImg = document.createElement("img");
iconImg.setAttribute("src", "img/yarn.svg");

window.onload = function () {
  qaTab.classList.add("i-qa-tab_active"), qaTab.appendChild(iconImg);
};

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
    qaImg.setAttribute("src", `img/${element.id}.png`);
  });
});
