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
const renderInit = () => {};

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

const singLoto = (number) => {
  const path = `/assets/audio/raoloto${number}.webm`;
  singLotoElement.setAttribute("src", path);
  singLotoElement.load();
  singLotoElement.play();
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
