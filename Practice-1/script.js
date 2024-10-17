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
let logoImg = document.querySelector("#logoPreview");
let uploadButton = document.querySelector("#uploadButton");
let removeLogo = document.querySelector("#removeLogo");

let defaultLogo = "./icons/logo.png";
let selectInp = document.querySelector("#select");

// Закрытие модального окна при клике вне его
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    options.classList.add("hidden");
  }
});

// Обработчик для сброса формы
reset.addEventListener("click", (event) => {
  preloader.classList.add("hidden");
});

// Обработчик для показа модального окна
show.addEventListener("click", () => {
  preloader.classList.remove("hidden");
});

// Закрытие модального окна при клике на preloader
preloader.addEventListener("click", (event) => {
  if (preloader === event.target) {
    preloader.classList.add("hidden");
    options.classList.add("hidden");
  }
});

// Обработчик клика для выбора направления
select.addEventListener("click", () => {
  toggler.classList.toggle("reverse");
  options.classList.toggle("hidden");
});

// Перебираем кнопки опций и добавляем обработчики событий
for (let option of optionsButtons) {
  option.addEventListener("click", function (event) {
    event.preventDefault();
    selectInp.value = this.textContent;
  });
}

// Обработка ввода номера телефона
document.addEventListener("DOMContentLoaded", function() {
  const phoneInput = document.getElementById('phone_number');

  phoneInput.addEventListener('input', function(e) {
    let value = phoneInput.value.replace(/\D/g, '');
    let formattedValue = '+7 ';

    if (value.length > 1) {
      formattedValue += value.substring(1, 4);
    }
    if (value.length >= 5) {
      formattedValue += ' ' + value.substring(4, 7);
    }
    if (value.length >= 8) {
      formattedValue += '-' + value.substring(7, 9);
    }
    if (value.length >= 10) {
      formattedValue += '-' + value.substring(9, 11);
    }

    phoneInput.value = formattedValue;

    if (value.length > 11) {
      phoneInput.value = formattedValue.substring(0, 18);
    }
  });

  phoneInput.addEventListener('focus', function(e) {
    if (phoneInput.value === '') {
      phoneInput.value = '+7 ';
    }
  });

  phoneInput.addEventListener('blur', function(e) {
    if (phoneInput.value === '+7 ') {
      phoneInput.value = '';
    }
  });
});


// Открыть диалог выбора файла при клике на кнопку
uploadButton.addEventListener("click", function(event) {
  event.preventDefault();
  logoFile.click();
});

// Обработка выбора файла
logoFile.addEventListener("change", function(event) {
  const file = event.target.files[0];
  
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      logoImg.src = e.target.result;
      logoImg.style.filter = 'none';
      logoImg.style.zIndex = '2';
    };
    reader.readAsDataURL(file);
  }
});

// Сброс логотипа на изображение по умолчанию
removeLogo.addEventListener("click", function() {
  logoImg.src = defaultLogo; 
  logoFile.value = "";
  logoImg.style.filter = 'brightness(40%)';
  logoImg.style.zIndex = '0'; 
});
