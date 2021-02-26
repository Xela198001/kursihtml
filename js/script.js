let title = document.querySelectorAll(".listItems .item .itemSVG");
let imgSVG = document.querySelectorAll(".listItems .item .itemTitle");
let desc = document.querySelectorAll(".listItems .item .itemText");
let listi = document.querySelectorAll(".section-advantages .item");
const popup = document.querySelector("#popup");

var listItems = [
  {
    id: 1,
    svgIcon:
      '<svg id="iconMoney" viewBox="0 0 24 16.92" xmlns="http://www.w3.org/2000/svg" width="50" height="50"><path d="M12,2.5a4,4,0,1,0,4,4A4,4,0,0,0,12,2.5Zm0,7a3,3,0,1,1,3-3A3,3,0,0,1,12,9.5Z"/><path d="M23.5,0H.5A.5.5,0,0,0,0,.5V16.42a.5.5,0,0,0,.5.5h23a.5.5,0,0,0,.5-.5V.5A.5.5,0,0,0,23.5,0ZM23,12H20.1A3.45,3.45,0,0,1,23,9.1Zm-3.89,0H4.89A4.41,4.41,0,0,0,1,8.11V4.89A4.41,4.41,0,0,0,4.89,1H19.11A4.41,4.41,0,0,0,23,4.89V8.11A4.41,4.41,0,0,0,19.11,12ZM3.9,12H1V9.1A3.45,3.45,0,0,1,3.9,12ZM1,13H23v1H1ZM23,1V3.9A3.45,3.45,0,0,1,20.1,1ZM1,1H3.9A3.45,3.45,0,0,1,1,3.9ZM23,15.92H1V15H23Z"/></svg>',
    title: "Меньшая стоимость оплаты",
    desc:
      "Например, новую профессию можно получить за сравнительно недорогую оплату",
  },
  {
    id: 2,
    svgIcon:
      '<svg id="iconCity" version="1.0" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"  width="50" height="50"><path d="M22,47h4a1,1,0,0,0,1-1V42a1,1,0,0,0-1-1H22a1,1,0,0,0-1,1v4A1,1,0,0,0,22,47Zm1-4h2v2H23Z"/><path d="M30,47h4a1,1,0,0,0,1-1V42a1,1,0,0,0-1-1H30a1,1,0,0,0-1,1v4A1,1,0,0,0,30,47Zm1-4h2v2H31Z"/><path d="M22,55h4a1,1,0,0,0,1-1V50a1,1,0,0,0-1-1H22a1,1,0,0,0-1,1v4A1,1,0,0,0,22,55Zm1-4h2v2H23Z"/><path d="M30,55h4a1,1,0,0,0,1-1V50a1,1,0,0,0-1-1H30a1,1,0,0,0-1,1v4A1,1,0,0,0,30,55Zm1-4h2v2H31Z"/><polygon points="49.71 13.71 51.41 12 53 12 53 13.59 51.29 15.29 52.71 16.71 54 15.41 55.29 16.71 56.71 15.29 55 13.59 55 12 56.59 12 58.29 13.71 59.71 12.29 58.41 11 59.71 9.71 58.29 8.29 56.59 10 55 10 55 8.41 56.71 6.71 55.29 5.29 54 6.59 52.71 5.29 51.29 6.71 53 8.41 53 10 51.41 10 49.71 8.29 48.29 9.71 49.59 11 48.29 12.29 49.71 13.71"/><path d="M57,24a3,3,0,1,0,3-3A3,3,0,0,0,57,24Zm3-1a1,1,0,1,1-1,1A1,1,0,0,1,60,23Z"/><path d="M38,15a3,3,0,1,0-3-3A3,3,0,0,0,38,15Zm0-4a1,1,0,1,1-1,1A1,1,0,0,1,38,11Z"/><path d="M16,7a3,3,0,1,0-3-3A3,3,0,0,0,16,7Zm0-4a1,1,0,1,1-1,1A1,1,0,0,1,16,3Z"/><path d="M61,54a1,1,0,0,0-.29-.71l-6-6a1,1,0,0,0-1.42,0L51,49.59l-2.29-2.3a1,1,0,0,0-1.42,0l-6,6A1,1,0,0,0,41,54v7H39V41H62a1,1,0,0,0,.92-.62,1,1,0,0,0-.21-1.09L44.18,20.77a9.44,9.44,0,0,0-13.36,0L29,22.59V12a1,1,0,0,0-1-1H4a1,1,0,0,0-1,1V61H1v2H63V61H61Zm-7-4.59,5,5V61H55V54a1,1,0,0,0-.29-.71L52.41,51Zm-11,5,5-5,5,5V61H43ZM20,23v8H12V23Zm-8-2V13h8v8ZM37,57H19V39H37ZM18,37a1,1,0,0,0-1,1v3H12V33h8v4Zm4,0V33h5v4Zm0-6V23h5v8ZM10,31H5V23h5Zm0,2v8H5V33Zm0,10v8H5V43Zm2,0h5v8H12Zm7,16H37v2H19ZM39,39V38a1,1,0,0,0-1-1H29V34h1a4,4,0,0,0,4-4,1,1,0,0,1,2,0v1a3,3,0,0,0,6,0V28a1,1,0,0,1,2,0,3,3,0,0,0,3,3h4.59l8,8ZM32.23,22.18a7.46,7.46,0,0,1,10.54,0L49.59,29H47a1,1,0,0,1-1-1,3,3,0,0,0-6,0v3a1,1,0,0,1-2,0V30a3,3,0,0,0-6,0,2,2,0,0,1-2,2H29V25.41ZM27,21H22V13h5ZM10,13v8H5V13ZM5,53H17v8H5Z"/><path d="M50,54H46a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V55A1,1,0,0,0,50,54Zm-1,4H47V56h2Z"/></svg>',
    title: "Можно учиться, где угодно и как угодно",
    desc: "",
  },
  {
    id: 3,
    svgIcon:
      '<svg version="1.1" id="iconSpeedMeter" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28 28"  width="50" height="50"><path d="M15.391,19.341L14,11l-1.39,8.341C11.653,19.842,11,20.845,11,22c0,1.657,1.343,3,3,3s3-1.343,3-3	C17,20.845,16.348,19.842,15.391,19.341z"/><path d="M14,3C6.268,3,0,9.268,0,17c0,2.059,0.444,4.014,1.242,5.773c0.544-0.312,1.147-0.605,1.8-0.875 C2.372,20.402,2,18.745,2,17C2,10.373,7.373,5,14,5s12,5.373,12,12c0,1.745-0.372,3.402-1.042,4.898 c0.653,0.27,1.256,0.562,1.8,0.875C27.557,21.014,28,19.059,28,17C28,9.268,21.732,3,14,3z"/><path d="M3.828,21.377l-0.617-1.901l3.805-1.235l0.617,1.902L3.828,21.377z M9.063,11.929l-2.35-3.236 l1.62-1.176l2.35,3.237L9.063,11.929z M13,6h2v4h-2V6z M7.015,15.801l-3.804-1.236l0.619-1.902l3.804,1.236L7.015,15.801z M20.983,15.8l-0.617-1.902l3.806-1.235l0.617,1.901L20.983,15.8z M17.316,10.753l2.352-3.235l1.619,1.176l-2.351,3.236 L17.316,10.753z M24.172,21.377l-3.805-1.235l0.617-1.901l3.805,1.235L24.172,21.377z"/></svg>',
    title: "Индивидуальный темп обучения",
    desc:
      "Вы можете много раз пересматривать видео лекций или презентаций если вам что-то стало не понятно, при этом не отвлекая остальную группу",
  },
  {
    id: 4,
    svgIcon:
      '<svg version="1.1" id="iconClock" xmlns="http://www.w3.org/2000/svg" width="510px" height="510px" viewBox="0 0 510 510"  width="50" height="50" > <path style="opacity:0.9;enable-background:new    ;" d="M267.75,12.75c-89.25,0-168.3,48.45-209.1,122.4L0,76.5v165.75h165.75 l-71.4-71.4c33.15-63.75,96.9-107.1,173.4-107.1C372.3,63.75,459,150.45,459,255s-86.7,191.25-191.25,191.25 c-84.15,0-153-53.55-181.05-127.5H33.15c28.05,102,122.4,178.5,234.6,178.5C402.9,497.25,510,387.6,510,255 C510,122.4,400.35,12.75,267.75,12.75z M229.5,140.25V270.3l119.85,71.4l20.4-33.15l-102-61.2v-107.1H229.5z"/></svg>',
    title: "Удобное время обучения для вас",
    desc: "Вам не нужно будет подстраиваться под группу или преподавателя",
  },
  {
    id: 5,
    svgIcon:
      '<svg version="1.1" id="iconPercent" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 42.667 42.667" style="enable-background:new 0 0 426.667 426.667;" xml:space="preserve">< rect x="181.343" y="-43.104" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 213.3582 515.0159)" style="fill:#F05228;"/><path style="fill:#F05228;" d="M326.272,426.667c-55.351,0-100.382-45.035-100.382-100.386s45.03-100.39,100.382-100.39 c55.356,0,100.386,45.035,100.386,100.386S381.624,426.667,326.272,426.667z M326.272,289.89 c-20.062,0-36.382,16.324-36.382,36.386c0,20.062,16.32,36.39,36.382,36.39c20.062,0,36.386-16.324,36.386-36.386 S346.334,289.89,326.272,289.89z"/> <path style="fill:#F05228;" d="M100.395,200.772c-55.356,0-100.386-45.035-100.386-100.386C0.009,45.035,45.043,0,100.395,0 s100.382,45.035,100.382,100.382C200.781,155.738,155.746,200.772,100.395,200.772z M100.395,64 c-20.062,0-36.386,16.32-36.386,36.382c0,20.066,16.324,36.386,36.386,36.386s36.382-16.32,36.382-36.386 C136.781,80.32,120.457,64,100.395,64z"/></svg>',
    title: "Восемьдесят процентов практики",
    desc:
      "Подобное обучение обычно дает точечные практические навыки, которые будут применимы для реальной жизни",
  },
];

const listItemsPrice = [
  {
    id: 1,
    title: "Курс Начинающий",
    list: ["HTML", "CSS"],
    skills: [
      "Знаниям и умениям применять на практике HTML",
      "Использовать самые последние новшества CSS",
      "Верстать статические сайты",
      "Изучите свойства и возможности применения HTML/CSS",
    ],
    time: "1 месяц",
    long: "2 занятия в неделю по 1,5-2 часа",
    express:
      "Экспресс: 2 месяца, 4 занятия в неделю по 1.5-2 часа. Стоимость курса 28 777 руб.",
    price: 9000,
    sale: 3555,
  },
  {
    id: 2,
    title: "Курс Продвинутый",
    list: [
      "Курс Начинающий в подарок",
      "Курс HTML5/CSS3",
      "Основы программирования",
      "JavaScript базовый",
      "Препроцессоры SASS/SCSS, LESS",
      "Git. Базовый курс",
    ],
    skills: [
      "Изучите свойства и возможности применения HTML/CSS",
      "Знаниям и умениям применять на практике HTML5",
      "Использовать самые последние новшества CSS3",
      "Препроцессоры SASS, SCSS, LESS",
      "Верстать статические сайты",
      "Использовать тени, скругленные углы блоков без использования изображений",
      "Создавать текстовые эффекты",
      "Использовать на своих сайтах нестандартные загружаемые шрифты",
      "Определять поддерживаются ли возможности HTML5/CSS3 в браузере пользователя",
      "Использовать встроенные возможности браузера для воспроизведения аудио и видео на веб-страницах",
      "Разбираться в языке JavaScript и писать код, соответствующий стандартам",
      "Использовать инструменты разработки и отладку в браузере",
      "Управлять структурой страницы DOM",
      "Создавать и реагировать на различные события в браузере",
    ],
    time: "2 месяца",
    long: "2 занятия в неделю по 1,5-2 часа",
    express:
      "Экспресс: 2 месяца, 4 занятия в неделю по 1.5-2 часа. Стоимость курса 28 777 руб.",
    price: 20000,
    sale: 10555,
  },
  {
    id: 3,
    title: "Курс Frontend-разработчик",
    list: [
      "Курс Начинающий в подарок",
      "Курс Продвинутый в подарок",
      "JavaScript продвинутый",
      "VueJS",
      "ReactJS",
      "Webpack",
    ],
    skills: [
      "Изучите свойства и возможности применения HTML/CSS",
      "Знаниям и умениям применять на практике HTML5",
      "Использовать самые последние новшества CSS3",
      "Препроцессоры SASS, SCSS, LESS",
      "Верстать статические сайты",
      "Использовать тени, скругленные углы блоков без использования изображений",
      "Создавать текстовые эффекты",
      "Использовать на своих сайтах нестандартные загружаемые шрифты",
      "Определять поддерживаются ли возможности HTML5/CSS3 в браузере пользователя",
      "Использовать встроенные возможности браузера для воспроизведения аудио и видео на веб-страницах",
      "Разбираться в языке JavaScript и писать код, соответствующий стандартам",
      "Использовать инструменты разработки и отладку в браузере",
      "Управлять структурой страницы DOM",
      "Создавать и реагировать на различные события в браузере",
      "Использовать возможности ReactJS",
      "Верстать динамические сайты",
      "Использовать возможности Git для командной работы",
      "Использовать возможности Webpack для сборки проекта",
      "Использовать возможности шаблонизатора Tailwindcss",
    ],
    time: "4 месяца",
    long: "2 занятия в неделю по 1,5-2 часа",
    express:
      "Экспресс: 2 месяца, 4 занятия в неделю по 1.5-2 часа. Стоимость курса 28 777 руб.",
    price: 35000,
    sale: 20555,
  },
];

var i = 0;

function listAdv(i) {
  // console.log(n.innerHTML);
  listi.forEach((item) => {
    item.children[0].innerHTML = listItems[i].svgIcon;
    item.children[1].innerHTML = listItems[i].title;
    item.children[2].innerHTML = listItems[i].desc;
    i++;
  });
}

listAdv(0);

let listCard = document.querySelectorAll(".card");

function listPrice(j, n) {
  for (let i = 0; i < listCard.length; i++) {
    // listCard[i].children[j].innerHTML = listItemsPrice[i].title;
    var listLi = listCard[i].children[j + 1];
    if (n === "list") {
      listItemsPrice[i].list.map((item) => {
        let list = document.createElement("li");
        list.classList.add("item");
        list.innerHTML = item;
        listLi.appendChild(list);
      });
    }
    if (n === "skills") {
      listItemsPrice[i].skills.map((item) => {
        let list = document.createElement("li");
        list.classList.add("item");
        list.innerHTML = item;
        listLi.appendChild(list);
      });
    }
  }
}

let price = document.querySelectorAll("div.price");

console.log(price);
function Price(price) {
  let i = 0;
  listItemsPrice.map((item, i) => {
    price[i].children[0].innerHTML = `${item.price.toLocaleString()} руб.`;
    price[i].children[1].innerHTML = `${item.sale.toLocaleString()} руб.`;
    i++;
  });
}

listPrice(1, "list");
listPrice(3, "skills");
Price(price);

Side();

function Side(params) {
  const bodyPage = document.querySelector("body");
  var card = document.querySelectorAll(".listCards .card");
  var ShowHide = document.querySelector("#hide");
  var hide = document.querySelector(".button.hide");

  console.log(ShowHide);
  card.forEach((item) => {
    item.addEventListener("click", toggleShowHide, false);
    let cardFixed = item.cloneNode(true);
    function toggleShowHide() {
      console.log(cardFixed);
      if (!ShowHide.classList.contains("show")) {
        bodyPage.style.overflow = "hidden";
        ShowHide.classList.toggle("show");
        ShowHide.appendChild(cardFixed);
      }
      //console.log(item);
    }
    hide.addEventListener("click", handleHide, false);
    function handleHide() {
      if (ShowHide.classList.contains("show")) {
        bodyPage.style.overflow = "auto";
        ShowHide.classList.remove("show");
        ShowHide.querySelector(".card").remove();
        // ShowHide.children[1].remove();
      }
    }
  });
}

var pay = document.querySelector("#pay");
var vacancies = document.querySelector("#vacancies");
var scrolly;

window.addEventListener(
  "scroll",
  function scrollStat() {
    scrolly = window.scrollY;
    Stat(87400, 5233, scrolly);
    window.removeEventListener("scroll", scrollStat, false);
  },
  false
);

function Stat(z, v, s) {
  console.log(scrolly);
  var i = 0,
    j = 0;

  if (s > 250) {
    setInterval(() => {
      if (i <= z) {
        i = i + 137;
        pay.innerHTML = i.toLocaleString() + " руб.";
      }
    }, 30);

    setInterval(() => {
      if (j <= v) {
        j = j + 7;
        vacancies.innerHTML = j.toLocaleString() + " +";
      }
    }, 10);
  }
}

const paid = () => {
  const frag = document.createDocumentFragment();
  const body = document.createElement("div");
  body.classList.add("body");
  const sq = document.createElement("div");
  sq.classList.add("square");
  const text = document.createElement("div");
  text.classList.add("text");
  text.innerHTML = "Только что был приобретен курс \"Frontend-разработчик\""
  frag.appendChild(body);
  body.appendChild(sq);
  body.appendChild(text);
  popup.appendChild(frag);
  popup.classList.add("show");
  console.log(popup);
};


setTimeout(() => {
  paid();
}, 10000);

setTimeout(() => {
  popup.classList.toggle("show");
  setTimeout(() => {
    popup.querySelector(".body").remove();
  }, 5000);
}, 20000);


/**Подсчет ширины браузера в реальном времени */
// const width = document.querySelector(".width");

// window.addEventListener(
//   "resize",
//   function () {
//     width.innerHTML = innerWidth;
//   },
//   false
// );
/**------------------------------------------ */

// console.log(listLi)
// listItems.map((item) => {
//   list(title, item.title);
//   list(imgSVG, item.imgSVG);
//   list(desc, item.desc);
// });
