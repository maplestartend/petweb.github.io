"use strict";

let signupBtn = document.querySelector("#signupBtn");
let signinBtn = document.querySelector("#signinBtn");
let nameField = document.querySelector("#nameField");
let title = document.querySelector("#title");

//進入頁面判斷登入或註冊
window.onload = function () {
  const data = location.href;
  const url = new URL(data);
  url.searchParams.get("index") == 1 ? signinPage() : signupPage();
};

function signinPage() {
  nameField.style.maxHeight = "0";
  title.innerHTML = "登入";
  signupBtn.classList.add("disable");
}

function signupPage() {
  nameField.style.maxHeight = "60px";
  title.innerHTML = "註冊";
  signinBtn.classList.add("disable");
}

//按鈕點擊切換頁面
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
