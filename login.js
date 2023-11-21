"use strict";

let signupBtn = document.querySelector("#signupBtn");
let signinBtn = document.querySelector("#signinBtn");
let nameField = document.querySelector("#nameField");
let title = document.querySelector("#title");

signinBtn.onclick = function () {
  nameField.style.maxHeight = "0";
  title.innerHTML = "登入";
  signupBtn.classList.add("disable");
  signinBtn.classList.remove("disable");
};

signupBtn.onclick = function () {
  nameField.style.maxHeight = "60px";
  title.innerHTML = "註冊";
  signupBtn.classList.remove("disable");
  signinBtn.classList.add("disable");
};
