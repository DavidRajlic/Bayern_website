const news = document.querySelector('.news');
const teams= document.querySelector('.teams');
const links = document.querySelector('.links');
const a = Array.from(document.querySelectorAll("a"));
const header = document.querySelector(".header");
console.log(a);

links.addEventListener('click', function (e) {
  const underline = document.querySelectorAll('.underline');
  underline.forEach( function(el) {
    el.classList.remove("underline");
});
e.target.classList.add('underline');

})


