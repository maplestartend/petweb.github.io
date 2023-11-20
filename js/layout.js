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
