let show = document.querySelector("#show");
let preloader = document.querySelector("#preloader");
let reset = document.querySelector(".reset");
let submit = document.querySelector(".submit");
let select = document.querySelector(".select");
let toggler = document.querySelector(".toggler");
let options = document.querySelector(".options");
let optionsButtons = options.children;
let modal = document.querySelector(".modal");

let logoFile = document.querySelector("#logo-file");
let logoImg = document.querySelector(".logo-img");
let logo = document.querySelector(".logo");
let selectInp = document.querySelector("#select");

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    options.classList.add("hidden");
  }
});

reset.addEventListener("click", (event) => {
  preloader.classList.add("hidden");
});

show.addEventListener("click", () => {
  preloader.classList.remove("hidden");
});

preloader.addEventListener("click", (event) => {
  if (preloader === event.target) {
    preloader.classList.add("hidden");
    options.classList.add("hidden");
  }
});

select.addEventListener("click", () => {
  toggler.classList.toggle("reverse");
  options.classList.toggle("hidden");
});

for (let option of optionsButtons) {
  option.addEventListener("click", function (event) {
    event.preventDefault();
    selectInp.value = this.textContent;
  });
}
