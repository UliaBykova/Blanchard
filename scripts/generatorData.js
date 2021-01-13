(function () {
  let accordion = document.querySelector(".accordion");
  let fullName = document.querySelector(".doer__fullName");
  let dateOfBirth = document.querySelector(".doer__dateOfBirth");
  let info = document.querySelector(".doer__info");
  let photo = document.querySelector(".doer__photo");

  accordion.addEventListener("click", (event) => {
    let accDropdown = event.target.closest(".accordion__dropdown-container");
    let liAll = accordion.querySelectorAll("li");
    let li = event.target.closest("li");

    if (!li) return;

    for (let i = 0; i < liAll.length; i++) {
      if (liAll[i].classList.contains("active-li")) {
        liAll[i].classList.remove("active-li");
      }
    }

    let century = +accDropdown.id;

    li.classList.add("active-li");
    fullName.textContent = li.textContent;
    dateOfBirth.textContent = randomDate(century);
    info.textContent = getData("text");
    photo.src = getData("photo");
  });

  accordion.addEventListener("keyup", (event) => {
    if (event.key == "Tab") {
      let parent = event.target.closest(".accordion__dropdown-container");
      focused = parent.querySelector(":focus");

      if (
        parent.classList.contains("open") &&
        focused.classList.contains("accordion__item")
      ) {
        this.addEventListener("keydown", (event) => {
          let accDropdown = event.target.closest(
            ".accordion__dropdown-container"
          );
          let liAll = accordion.querySelectorAll("li");
          let li = event.target.closest("li");

          if (!li) return;

          if (event.key == "Enter") {
            for (let i = 0; i < liAll.length; i++) {
              if (liAll[i].classList.contains("active-li")) {
                liAll[i].classList.remove("active-li");
              }
            }

            let century = +accDropdown.id;
            li.classList.add("active-li");
            fullName.textContent = li.textContent;
            dateOfBirth.textContent = randomDate(century);
            info.textContent = getData("text");
            photo.src = getData("photo");
          }
        });
      }
    }
  });

  function randomInteger(min, max) {
    // случайное число от min до (max)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  function getMonth(a) {
    switch (a) {
      case 0:
        return "января";
        break;
      case 1:
        return "февраля";
        break;
      case 2:
        return "марта";
        break;
      case 3:
        return "апреля";
        break;
      case 4:
        return "мая";
        break;
      case 5:
        return "июня";
        break;
      case 6:
        return "июля";
        break;
      case 7:
        return "августа";
        break;
      case 8:
        return "сентября";
        break;
      case 9:
        return "октября";
        break;
      case 10:
        return "ноября";
        break;
      case 11:
        return "декабря";
        break;
      default:
        return "";
    }
  }

  function randomDate(startYear, endYear) {
    if (startYear != 2000) {
      endYear = startYear + 99;
    } else {
      let nowDate = new Date();
      endYear = nowDate.getFullYear();
    }

    let a = randomInteger(startYear, endYear);
    let b = randomInteger(startYear, endYear);
    let year1, year2;

    if (a > b) {
      year1 = b;
      year2 = a;
    } else {
      year1 = a;
      year2 = b;
    }

    let dayStart = randomInteger(1, 31);
    let dayEnd = randomInteger(1, 31);
    let monthStart = randomInteger(0, 11);
    let monthEnd = randomInteger(0, 11);
    let datesLife = `${dayStart} ${getMonth(
      monthStart
    )} ${year1}  - ${dayEnd} ${getMonth(monthEnd)} ${year2} `;
    return datesLife;
  }

  function getData(data) {
    if (data === "text") {
      let myText = [
        "Один из самых выдающихся философов, который не боялся быть новатором и смело говорил о своих взглядах и убеждениях. Он оказал влияние не только на современников, но и на философов нашего времени.",
        "Ученый считал, что человек должен быть интеллектуальным и обязан всячески развивать свой ум, ведь интеллект – самый большой потенциал, который дан человечеству. Помимо этого, как утверждал Аристотель, полноценный человек должен быть добрым, ведь именно желание оказать помощь ближнему и отражает суть человека.",
        "Один из самых известных философов в истории Востока. Мы считаем демократию изобретением дружелюбных греков, но Конфуций поднимал вопрос о сущности власти и политике в то же время. Хотя он активно защищал идею неоспоримости власти императора, в тот же момент утверждал, что властитель должен быть честным, что уважение подданных необходимо заслужить с помощью добры Если ты читаешь эту надпись, значит кто-то взял эту статью с BroDude.ru х поступков, а не силой и угрозами, ведь власть не должна опираться на страх. По его уверениям, хороший император должен уважать и прислушиваться к своему народу, ознакамливаться с идеями и предложениями людей. Любой властитель, который отклоняется от такого правления и использует силу, чтобы добиться уважения, является тираном и не заслуживает данной ему власти.",
        "Зачастую его воззрения искажены и трактуются как призыв к излишествам. На самом же деле он сосредотачивался на том, как сделать человека счастливым, и искал всевозможные пути для реализации этой потребности. Эпикур не видел необходимости Если ты читаешь эту надпись, значит кто-то взял эту статью с BroDude.ru в том, чтобы понапрасну страдать, ограничивать себя без нужды, ведь человеку, живущему мудро и с умом, нет необходимости в этом. Философ считал, что искусственные ограничения лишь вредят личности и не позволяют полностью реализовать себя.",
        "Влиятельная фигура в стиле барокко, он пробовал себя почти в каждом жанре, в том числе историческом и портретном. Кроме того, он разрабатывал гобелены, книжные иллюстрации, украшения, мультфильмы, эскизы для скульптур и многое другое. В весомой степени на стиль художника повлияли фламандские мастера.",
        "Лидер и приверженец французского импрессионизма и пленэрной живописи, имел страсть к изображению различных воплощений света. Среди последователей можно отметить Берта Моризо, Эдгара Дега, Эдуарда Вюйара и других.",
        "Самый известный художник ранней нидерландской школы живописи отметился новаторскими методами и мастерством работы с масляной живописью. Cтал образцом для многих художников раннего Северного Возрождения.",
        "Величайший европейский скульптор 15-го века, был частью группы художников (Альберти, Брунеллески, Мазаччо), которая развивала ранний ренессанс во Флоренции. Инноватор и мастер камня, дерева и кирпича оказал влияние на всех последующих скульпторов.",
      ];
      randomText = Math.round(Math.random() * (myText.length - 1));
      return myText[randomText];
    }
    if (data === "photo") {
      let myPhoto = [
        "./images/painter1.jpg",
        "./images/painter2.jpg",
        "./images/painter3.jpg",
        "./images/painter4.jpg",
        "./images/painter5.jpg",
        "./images/painter6.png",
        "./images/painter7.jpg",
        "./images/painter8.jpg",
      ];
      randomPhoto = Math.round(Math.random() * (myPhoto.length - 1));
      return myPhoto[randomPhoto];
    }
  }
})();
