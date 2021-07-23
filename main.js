const news = document.querySelector(".news");
const teams = document.querySelector(".teams");
const linksContainer = document.querySelector(".links");
const header = document.querySelector(".header");
const en = document.querySelector(".en");
const input = document.querySelector(".inp");
const subscribe = document.querySelector(".subscribe");
const btnContainer = document.querySelector(".button-container");
const btt = document.querySelector(".btt");
news.classList.add("underline");
header.innerHTML = news.innerHTML;

const links = Array.from(linksContainer.getElementsByTagName("a"));

Array.from(btnContainer.children).forEach(function (btn) {
  btn.classList.add("red");
});

btnContainer.addEventListener("click", function (e) {
  Array.from(btnContainer.children).forEach(function (btns) {
    btns.classList.remove("white");
  });

  e.target.classList.add("white");
});

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (e) {
    const underline = document.querySelectorAll(".underline");
    underline.forEach(function (el) {
      el.classList.remove("underline");
    });

    e.target.classList.add("underline");
    const text = e.target.innerHTML;
    console.log(text);
    header.innerHTML = text;
  });
}

btnContainer.addEventListener("click", function (e) {
  e.target.classList.add("white");
});

let users = [];

subscribe.addEventListener("click", function (e) {
  if (input.value === "") {
    alert("you should type your email account");
    return;
  }

  users.push(input.value);

  if (typeof Storage !== "undefined") {
    // Store
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("user", JSON.stringify(users));
  } else {
    alert("Error");
  }
});
