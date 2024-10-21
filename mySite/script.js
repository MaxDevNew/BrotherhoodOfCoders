document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});

// Плавное появление секций при прокрутке
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY + window.innerHeight;
    sections.forEach(section => {
        if (scrollPosition > section.offsetTop + 100) {
            section.classList.add('active');
        }
    });
});

// Запускаем анимацию для первого раздела
window.addEventListener('load', function() {
    document.querySelector('section').classList.add('active');
});

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const header = document.querySelector('header');
    const headerH1 = header.querySelector('h1');
    const headerP = header.querySelector('p');

    // Изменение размера содержимого в зависимости от позиции скролла
    if (scrollPosition > 50) {
        header.style.padding = '30px 20px';
        headerH1.style.fontSize = '2rem';
        headerP.style.fontSize = '1rem';
    } else {
        header.style.padding = '60px 20px';
        headerH1.style.fontSize = '3rem';
        headerP.style.fontSize = '1.2rem';
    }
});

// Текст для анимации набора
const aboutText = "Верстальщик | HTML, CSS, JS | Адаптивная верстка | WordPress";
const aboutTextElement = document.getElementById('about-text');

// Флаг для запуска анимации один раз
let hasTextTyped = false;

// Функция для анимации набора текста
function typeWriterEffect(text, element, delay = 50) {
    let i = 0;
    const timer = setInterval(function() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, delay);
}

// Функция, которая запускает анимацию при появлении секции "Обо мне"
function checkSectionVisibility() {
    const aboutSection = document.getElementById('about');
    const aboutSectionPosition = aboutSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    // Если секция видима и анимация еще не запускалась
    if (aboutSectionPosition < screenPosition && !hasTextTyped) {
        hasTextTyped = true; // Устанавливаем флаг, чтобы анимация больше не запускалась
        typeWriterEffect(aboutText, aboutTextElement);
    }
}

// Слушатель события скролла
window.addEventListener('scroll', checkSectionVisibility);

// Проверка секции при загрузке страницы
window.addEventListener('load', checkSectionVisibility);

