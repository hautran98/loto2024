// setItem(): Add key and value to localStorage
// getItem(): This is how you get items from localStorage
// removeItem(): Remove an item from localStorage
// clear(): Clear all data from localStorage
// key(): Passed a number to retrieve the key of a localStorage
const key = "result";
class Save {
  constructor(result) {}
  setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  getItem(key) {
    return JSON.parse(localStorage.getItem(key));
  }
  removeItem(key) {
    localStorage.removeItem(key);
  }
  clear() {
    localStorage.clear();
  }
}

const save = new Save();

const resultContainer = document.getElementById("result");
const singLotoElement = document.getElementById("loto-mp3");
const songElement = document.getElementById("song");

{
  /* <audio controls id="loto-mp3" src="assets/audio/raoloto1.webm">
        <source type="audio/mpeg" />
      </audio> */
}
const templateChild = (number) => {
  const audio = document.createElement("audio");
  const source = document.createElement("source");
  source.setAttribute("type", "audio/mpeg");
  audio.setAttribute("id", `loto-${number}`);
  audio.setAttribute("controls", true);
  audio.setAttribute("src", `assets/audio/raoloto${number}.webm`);
  audio.setAttribute("class", "d-none");
  source.setAttribute("class", "d-none");
  audio.appendChild(source);
  return audio;
};

const displayNumber = (number, time) => {
  setTimeout(() => {
    const divEle = document.createElement("div");
    const divChildEle = document.createElement("div");
    divEle.setAttribute("class", "col");
    divChildEle.setAttribute(
      "class",
      "p-1 border rounded-1 bg-danger text-light"
    );
    divChildEle.textContent = number;
    divEle.append(divChildEle);
    resultContainer.append(divEle);
  }, time * 1000);
};
const renderInit = () => {
  for (let i = 1; i <= 90; i++) {
    songElement.append(templateChild(i));
  }
  save.getItem(key).forEach((element) => {
    displayNumber(element);
  });
};

const play = () => {
  renderInit();
  console.log("play");
};

play();

const getNumber = () => {
  return Math.round(Math.random() * 90);
};
const result = save.getItem(key);
const getResult = () => {
  return save.getItem(key);
};

const isInResult = (number) => {
  const result = getResult();
  return result.includes(number);
};

{
  /* <div class="col">
<div class="p-1 border rounded-1">Row column</div>
</div> */
}

const singLoto = (number) => {
  for (let i = 1; i <= 90; i++) {
    const song = document.getElementById(`loto-${i}`);
    song.setAttribute("class", "d-none");
    song.pause();
  }
  const singLotoElement = document.getElementById(`loto-${number}`);
  singLotoElement.setAttribute("class", "block");
  singLotoElement.load();
  singLotoElement.play();
  displayNumber(number, Math.round(singLotoElement.getAttribute("duration")));
};

const random = () => {
  const kq = getResult();
  if (!kq) {
    save.setItem(key, []);
  }
  let number;
  do {
    number = getNumber();
  } while (isInResult(number));
  singLoto(number);
  save.setItem(key, getResult().concat(number));
};

const reset = () => {
  save.setItem(key, []);
};
